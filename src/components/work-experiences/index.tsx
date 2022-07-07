import { useObservableState, useSubscription } from "observable-hooks";
import {
    getWorkExperienceData$,
    workExperienceData$
} from "../../services/work-experience-service";
import { IWorkExperience } from "./interfaces";

export const WorkExperience = () => {

    const workExperiences = useObservableState<IWorkExperience[]>(
        workExperienceData$, []
    );

    useSubscription(getWorkExperienceData$, (x) => workExperienceData$.next(x));

    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                {workExperiences.map((item) => (
                    <div className="card">
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
                                    {item.about.map((paragraph) => (
                                        <p>{paragraph.description}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
