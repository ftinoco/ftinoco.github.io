import { FC } from "react";
import { IWorkExperienceProps } from "./interfaces";

export const WorkExperience = () => {
    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                            data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>Octuber 2019 - Present</p>
                                <div className="h5">
                                    <a href="https://www.cgclatam.com/" target="_blank">
                                        Consulting group
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">Development Engineer Consultant</div>
                                <p>Great place to work. </p>
                                <p>Currently I am working here, it is 100% remote job. My main functions there are
                                    develop business solutions for our clients in throughout Central American
                                    region.</p>
                                <p>Among my greatest achievements in the company is the development and
                                    implementation of cost-effectiveness calculation processes for Central American
                                    Integration Bank (BCIE) in technologies such as Oracle, DevExtreme, C# and
                                    ASP.NET MVC 5</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                            data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>March 2016 - September 2019</p>
                                <div className="h5">Xolo S.A</div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">Programmer Analyst</div>
                                <p>The place where I got most of my professional experience.</p>
                                <p>I worked here around 4 years, in that time I performed as a programmer analyst
                                    where my duties were develop, test and implement business sofware solutions for
                                    many companies in Nicaragua, both private and public sectors.</p>
                                <p>Among my outstanding performance, I can highlight development of the Agricultural
                                    Quarentine System for Institute for Agricultural Protection and Health (IPSA),
                                    this project was my most important development in the company because it had a
                                    great impact on the control of import and export of agricultural products in the
                                    country, optimizing and improving this process. For this project we use
                                    technologies such as ASP.NET MVC 5, MSSQL Server, ASP.NET Web Api.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                            data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>Octuber 2013 - July 2015</p>
                                <div className="h5">Versatec</div>
                            </div>
                        </div>
                        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                            <div className="card-body">
                                <div className="h5">Technical Developer I</div>
                                <p>My beginnings.</p>
                                <p>In this company I started my career as a software developer, here I was given the
                                    opportunity to show my skills when I was still a university student. Here I was
                                    part of many projects based on the .NET platform</p>
                                <p>I worked on vehicle fleet control system, generic reporting application based on
                                    Devexpress suite, but my most important participation was in development of
                                    payroll system for a company that provided the payroll control as service in
                                    Panama, for this development was used Devexpress suite, C#, MSSQL Server and
                                    ASP.NET Webform </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* export const WorkExperience: FC<IWorkExperienceProps> = ({data}) => { 
    return (
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                {data.map((item) => ( 
                <div className="card">
                    <div className="row">
                        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                            data-aos-duration="500">
                            <div className="card-body cc-experience-header">
                                <p>{item.startDate} - {item.endDate}</p>
                                <div className="h5">
                                    <a href={item.url} target="_blank">
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
} */