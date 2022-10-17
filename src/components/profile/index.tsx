import { FC } from "react"
import { About } from "./about"
import { IProfileProps } from "./interfaces"

import './index.css'

export const Profile: FC<IProfileProps> = ({ fullName, profile, socialMedias }) => {
    return (
        <>
            <div className="profile-page">
                <div className="wrapper">
                    <div className="page-header page-header-small" filter-color="green">
                        <div className="page-header-image" data-parallax="true"
                            style={{ backgroundImage: "url('images/cc-bg-3.jpg')" }}></div>
                        <div className="container">
                            <div className="content-center">
                                <h1 className="brand-title">
                                    <span className="primary">F</span>
                                    <span className="secundary">T</span>
                                </h1>
                                <div className="h1 title">{fullName}</div>
                                <p className="category text-white">{profile.position}, {profile.profession}</p>
                                {/*  <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor">Hire Me</a>
                                <a className="btn btn-primary" href="/Resume.pdf" target="_blank" data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor">Download CV</a> */}
                                <div className="button-container">
                                    {socialMedias.map((sm, idx) =>
                                        <a key={idx}
                                            target="_blank"
                                            href={sm.link}
                                            rel="noreferrer"
                                            title={sm.title}
                                            className="btn btn-social btn-icon">
                                            <i className={`fa ${sm.icon}`}></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="cc-profile-image">
                                <a href="#">
                                    <img src={profile.profileImage} alt={fullName} />
                                </a>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <About profile={profile} />
        </>
    )
}