import { useObservableState, useSubscription } from "observable-hooks";
import { getProjectData$, projectData$ } from "../../services/project-service";
import { IProject } from "./interfaces";

export const Project = () => {
    const projects = useObservableState<IProject[]>(
        projectData$, []
    );
    useSubscription(getProjectData$, (p) => { projectData$.next(p) });

    return (
        <div className="section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                        <div className="h4 text-center mb-4 title">Portfolio</div>
                        <div className="nav-align-center">
                            <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#web-development"
                                        role="tablist">
                                        <i className="fa fa-laptop" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content gallery mt-5">
                    <div className="tab-pane active" id="web-development">
                        <div className="ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    {
                                        projects.map((project, idx) => (
                                            ((idx % 2) === 0) &&
                                            <div key={idx} className="cc-porfolio-image img-raised" data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom">
                                                <a href={project.url} target="_blank" rel="noreferrer">
                                                    <figure className="cc-effect">
                                                        <img src={project.img} alt={project.title} />
                                                        <figcaption>
                                                            <div className="h4">{project.title}</div>
                                                            <p>{project.role}</p>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-md-6">
                                    {
                                        projects.map((project, idx) => (
                                            ((idx % 2) === 1) &&
                                            <div key={idx} className="cc-porfolio-image img-raised" data-aos="fade-up"
                                                data-aos-anchor-placement="top-bottom">
                                                <a href={project.url} target="_blank" rel="noreferrer">
                                                    <figure className="cc-effect">
                                                        <img src={project.img} alt={project.title} />
                                                        <figcaption>
                                                            <div className="h4">{project.title}</div>
                                                            <p>{project.role}</p>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}