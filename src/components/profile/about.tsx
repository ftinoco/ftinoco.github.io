import { FC, useEffect, useState } from "react";
import { IProfile } from "./interfaces";
import * as Utils from '../../utils';

export const About: FC<{ profile: IProfile }> = ({ profile }) => {
    const [section, setSection] = useState('');

    useEffect(() => {
        window.scrollTo({
            top: document.getElementById(section)?.offsetTop,
            behavior: 'smooth',
        });
    }, [section]);

    return (
        <div className="section" id="about">
            <div className="container">
                <div className="h4 text-center mb-4 title">About me</div>
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-body">
                                    {profile.about.map((txt, idx) => <p key={idx}>{txt.description}</p>)}
                                    {/*  <div className="row mt-3">
                                    <a className="btn btn-primary" href="/Resume.pdf" target="_blank" data-aos="zoom-in"
                                        data-aos-anchor="data-aos-anchor">Download CV</a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    <div className="h5 mt-0 title">Basic Information</div>
                                    <div className="row">
                                        <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                        <div className="col-sm-8" data-testid="age">{profile.age}</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                        <div className="col-sm-8">
                                            <a href={"mailto:" + profile.emails.main}>
                                                {profile.emails.main}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                                        <div className="col-sm-8">{profile.phone}</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                                        <div className="col-sm-8">{profile.address}</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Languages:</strong></div>
                                        <div className="col-sm-8">
                                            {
                                                profile.languages.map((lan, idx) =>
                                                    <span key={idx}
                                                        style={{ marginBottom: "10px", display: 'block' }}>
                                                        {lan.name} - {lan.level}
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="card-body">
                                    <div className="h5 mt-0 title">My interests</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <a className="btn btn-outline-primary"
                                    href="/Resume.pdf"
                                    target="_blank"
                                    data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}