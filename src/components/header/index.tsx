import { FC, useEffect, useState } from "react";

export const Header: FC<{ fullName: string }> = ({ fullName }) => {

    const [section, setSection] = useState('');

    const scrollTo = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        ev.preventDefault();
        const href = (ev.target as HTMLAnchorElement).getAttribute('href'); 
        if(href) setSection(href.replace('#', ''))
    }

    useEffect(() => {
        window.scrollTo({
            top: document.getElementById(section)?.offsetTop,
            behavior: 'smooth',
        });
    }, [section]);

    return (
        <header>
            <div className="profile-page sidebar-collapse">
                <nav className="navbar navbar-expand-lg fixed-top navbar-transparent" color-on-scroll="400">
                    <div className="container">
                        <div className="navbar-translate">
                            {/* <button className="navbar-brand">{fullName}</button> */}
                            <button className="navbar-toggler navbar-toggler bg-primary" type="button" data-toggle="collapse"
                                data-target="#navigation" aria-controls="navigation" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#about"
                                        className="nav-link smooth-scroll"
                                        onClick={scrollTo}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#skill"
                                        className="nav-link smooth-scroll"
                                        onClick={scrollTo}>
                                        Skills
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolio"
                                        className="nav-link smooth-scroll"
                                        onClick={scrollTo}>
                                        Portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#experience"
                                        className="nav-link smooth-scroll"
                                        onClick={scrollTo}>
                                        Experience
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact"
                                        className="nav-link smooth-scroll"
                                        onClick={scrollTo}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}