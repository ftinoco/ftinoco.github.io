import { FC } from "react";
import { IProfile } from "./interfaces";

export const About: FC<{ profile: IProfile }> = ({ profile }) => {
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">About</div>
                                {profile.about.map((txt, idx) => <p key={idx}>{txt.description}</p>)}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Basic Information</div>
                                <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Age:</strong></div>
                                    <div className="col-sm-8" data-testid="age">{profile.age}</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                    <div className="col-sm-8"><a href={profile.emails.main}>{profile.emails.main}</a></div>
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
                                <div className="row mt-3">
                                    <a className="btn btn-primary smooth-scroll mr-2"
                                        href="#contact"
                                        data-aos="zoom-in"
                                        data-aos-anchor="data-aos-anchor">
                                        Hire Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}