import { FC } from "react";
import { IWorkExperience } from "./interfaces";

export const WorkExperience: FC<IWorkExperience> = (data) => {
    const {
        about,
        company,
        endDate,
        role,
        stack,
        startDate,
        url
    } = data;

    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                            data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>{startDate} - {endDate}</p>
                                <div className="h5">
                                    <a href={url} target="_blank">
                                        {company}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">{role}</div>
                                {about.map((paragraph) => (
                                    <p>{paragraph.description}</p>    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}