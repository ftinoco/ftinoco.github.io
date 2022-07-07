import { About } from "./about"

export const Profile = () => {
    return (
        <>
            <div className="profile-page">
                <div className="wrapper">
                    <div className="page-header page-header-small" filter-color="green">
                        <div className="page-header-image" data-parallax="true"
                            style={{ backgroundImage: "url('images/cc-bg-1.jpg')" }}></div>
                        <div className="container">
                            <div className="content-center">
                                <div className="cc-profile-image"><a href="#"><img src="images/profile.jpg"
                                    alt="Image" /></a></div>
                                <div className="h2 title">Fernando Tinoco</div>
                                <p className="category text-white">Software Developer, Programmer Analyst</p>
                                <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor">Hire Me</a>
                                <a className="btn btn-primary" href="/Resume.pdf" target="_blank" data-aos="zoom-in"
                                    data-aos-anchor="data-aos-anchor">Download CV</a>
                            </div>
                        </div>
                        <div className="section">
                            <div className="container">
                                <div className="button-container">
                                    <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                        href="https://www.linkedin.com/in/ftinococ45" rel="tooltip"
                                        title="Connect with me on Linkedin">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                        href="https://github.com/ftinoco" rel="tooltip" title="Follow me on Github">
                                        <i className="fa fa-github"></i>
                                    </a>
                                    <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                        href="skype:ftinococ.45" rel="tooltip" title="Contact me on Skype">
                                        <i className="fa fa-skype"></i>
                                    </a>
                                    <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                        href="https://t.me/ftinococ45" rel="tooltip" title="Contact me on Telegram">
                                        <i className="fa fa-telegram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <About></About>
        </>
    )
}