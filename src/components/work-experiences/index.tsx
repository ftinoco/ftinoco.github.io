import { useObservableState, useSubscription } from "observable-hooks";
import { useEffect, useState } from "react";
import {
    getWorkExperienceData$,
    workExperienceData$
} from "../../services/work-experience-service";
import { MAX_WORK_EXPERIENCE_TO_SHOW } from "../../utils/consts/portfolio";
import { IWorkExperience } from "./interfaces";

export const WorkExperience = () => {

    const [showLess, setShowLess] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showingLess, setShowingLess] = useState(false);
    const [maxExperiences, setMaxExperiences] = useState(MAX_WORK_EXPERIENCE_TO_SHOW);
    const [workExperiencesFiltered, setWorkExperiencesFiltered] = useState([] as IWorkExperience[]);
    const workExperiences = useObservableState<IWorkExperience[]>(
        workExperienceData$, []
    );

    useSubscription(getWorkExperienceData$, (x) => workExperienceData$.next(x));

    useEffect(() => {
        setShowMore(workExperiences.length > maxExperiences);
    }, [workExperiences]);

    useEffect(() => {
        if(!showingLess){
            setShowMore(!(workExperiences.length === maxExperiences));
            setShowLess(workExperiences.length === maxExperiences);
        } else{
            setShowLess(!(maxExperiences === MAX_WORK_EXPERIENCE_TO_SHOW));
            setShowMore(maxExperiences === MAX_WORK_EXPERIENCE_TO_SHOW);
        }

        if (workExperiences.length > 0) {
            setWorkExperiencesFiltered(
                workExperiences.slice(0, maxExperiences)
            );
        }
    }, [maxExperiences, workExperiences]);

    const showMoreEventHandler = () => {
        setShowingLess(false);
        setMaxExperiences((prev) => prev + 1);
    }

    const showLessEventHandler = () => {
        setShowingLess(true);
        setMaxExperiences((prev) => prev - 1);
    }

    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                {workExperiencesFiltered.map((item, idx) => (
                    <div key={idx} className="card">
                        <div className="row">
                            <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                                data-aos-duration="500">
                                <div className="card-body cc-experience-header">
                                    <p>{item.startDate} - {item.endDate}</p>
                                    <div className="h5">
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            {item.company}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                                <div className="card-body">
                                    <div className="h5">{item.role}</div>
                                    {item.about.map((paragraph, i) => <p key={i}>{paragraph.description}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {showMore &&
                    <div className="text-center">
                        <button className="btn btn-primary smooth-scroll mr-2" onClick={showMoreEventHandler}>
                            Show more
                        </button>
                    </div>
                }
                {showLess &&
                    <div className="text-center">
                        <a className="btn btn-primary smooth-scroll mr-2"  href="#experience" onClick={showLessEventHandler}>
                            Show less
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}
