import { MutableRefObject, useEffect, useRef } from "react";

export const Skill = () => {
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        ref.current.setAttribute('data-aos', 'progress-full');
        ref.current.setAttribute('data-aos-offset', '10');
        ref.current.setAttribute('data-aos-duration', '2000');
        ref.current.setAttribute('aria-valuemin', '0');
        ref.current.setAttribute('aria-valuemax', '100');
        ref.current.setAttribute('aria-valuenow', '90');
    }, []);

    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">Professional Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">C#</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" role="progressbar"
                                            ref={ref} style={{ width: "90%" }}></div>
                                        <span className="progress-value">90%</span>
                                    </div>
                                </div>
                            </div>
                           {/*  <div className="col-md-6">
                                <div className="progress-container progress-primary"><span className="progress-badge">SQL
                                    Server</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                        <span className="progress-value">80%</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                     {/*    <div className="row">
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">ASP.NET / ASP.NET Core</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                        <span className="progress-value">80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">Oracle</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "60%" }}></div>
                                        <span className="progress-value">60%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">Git</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "80%" }}></div>
                                        <span className="progress-value">80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span className="progress-badge">Azure
                                    DevOps</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "70%" }}></div>
                                        <span className="progress-value">70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">Javascript</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "75%" }}></div>
                                        <span className="progress-value">75%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">BOOTSTRAP</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "75%" }}></div>
                                        <span className="progress-value">75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">Angular +2 </span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "70%" }}></div>
                                        <span className="progress-value">70%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress-container progress-primary"><span
                                    className="progress-badge">JQuery</span>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-primary" data-aos="progress-full"
                                            data-aos-offset="10" data-aos-duration="2000" role="progressbar"
                                            aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: "90%" }}></div>
                                        <span className="progress-value">90%</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}