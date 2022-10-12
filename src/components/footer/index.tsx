import { FC } from "react";
import { IFooterProps } from "./interfaces";
import './index.css';

export const Footer: FC<IFooterProps> = ({ fullName, socialMedias }) => {
    return (
        <footer className="footer footer-default">
            <div className="footer-content">
                <div className="container text-center">
                    {socialMedias.map((sm, idx) =>
                        <a key={idx} className={`cc-${sm.icon.replace('fa-', '')} btn btn-link`}
                            target="_blank" href={sm.link} rel="noreferrer">
                            <i className={`fa ${sm.icon} fa-2x`} aria-hidden="true"></i>
                        </a>
                    )}
                </div>
                <div className="h4 title text-center">{fullName}</div>
                <div className="text-center">
                    <p>© 2022 Resume. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}