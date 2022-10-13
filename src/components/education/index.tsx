import { useObservableState, useSubscription } from "observable-hooks";
import { educationData$, getEducationData$ } from "../../services/education-service";
import { IEducation } from "./interface";
import DOMPurify from 'dompurify'

import './index.css';

export const Education = () => {

    const educationData = useObservableState<IEducation[]>(
        educationData$, []
    );
    useSubscription(getEducationData$, (e) => { educationData$.next(e) });

    /**
     * Sanitizing the html description
     * @param item IEducation object
     * @returns Object as parameter for dangerouslySetInnerHTML method
     * @see https://blog.logrocket.com/using-dangerouslysetinnerhtml-in-a-react-application/
     */
    const sanitizedData = (item: IEducation) => {
        let html = item.description;
        return { __html: DOMPurify.sanitize(html) }
    }

    return (
        <div className="section">
            <div className="container cc-education">
                <div className="h4 text-center mb-4 title"
                    data-testid="education-title">
                    Education
                </div>
                {educationData.map((item, idx) =>
                    <div key={idx} className="card">
                        <div className="row">
                            <div className="col-md-3 bg-primary"
                                data-aos="fade-right"
                                data-aos-offset="50"
                                data-aos-duration="500">
                                <div className="card-body cc-education-header">
                                    <p>{item.startDate} - {item.endDate}</p>
                                    <div className="h5">{item.degree}</div>
                                </div>
                            </div>
                            <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                                <div className="card-body">
                                    <div className="h5">{item.title}</div>
                                    <p className="category"
                                        role="education-institution">
                                        {item.institution}
                                    </p>
                                    <div dangerouslySetInnerHTML={sanitizedData(item)} />
                                    {item.credentials &&
                                        <p>
                                            <a href={item.credentials} target="_blank" rel="noreferrer">See credetials</a>
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}