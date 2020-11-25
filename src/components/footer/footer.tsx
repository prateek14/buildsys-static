import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import './footer.scss';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ContactForm } from '../contact/contact-form';
import { Link } from 'react-router-dom';

export const Footer: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    return (
        <footer>
            {!isMobile && <FooterDesktop></FooterDesktop>}
            {isMobile && <FooterMobile></FooterMobile>}
        </footer>
    );
};

export const FooterDesktop: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="footer footer-desktop">
            <FooterMain></FooterMain>
            <FooterSecondary></FooterSecondary>
        </div>
    );
};

export const FooterMobile: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="footer footer-mobile">
            <FooterMain></FooterMain>
            <FooterSecondary></FooterSecondary>
        </div>
    );
};

export const FooterMain: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="flex-center footer-main">
            <div className="flex-justify">
                <div className="col">
                    <div className="title">About Us</div>
                    <div>
                        Buildsys is a construction productivity application that reduces paperwork and makes
                        field-to-office communication faster, trackable, and mobile. <br />
                        Buildsys works everywhere construction works, in the office, in the field and can be accessed
                        from Web, iPad, iPhone and Android devices. <br />
                        Buildsys helps project managers manage all data at one place. It provides real time access to
                        information to all stakeholders right on their phone. Stakeholders can view plans, manage tasks,
                        or create RFIs right from the construction site. Teams can digitize and automate workflows and
                        processes for approvals, design queries and RFIs. <Link to="/us">Learn More</Link>
                        <p>
                            <Link to="/terms">Terms of Use</Link>
                        </p>
                        <p>
                            <Link to="/privacy-notice">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Buildsys HQ</div>
                    <div>
                        6th Floor, Select CITYWALK <br />
                        <br />
                        A-3 District Center, Saket <br />
                        <br />
                        New Delhi 110017 <br />
                        <br />
                        India
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div>
                        <a href="mailto:media@buildsys.co">media@buildsys.co</a> <br />
                        <br />
                        <a href="tel:+911140599999">+91 11 40599999 </a> <br />
                        <br />
                    </div>
                </div>
                <div className="col">
                    <div className="title">Get in touch</div>
                    <div>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FooterSecondary: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="flex-center footer-secondary">
            <div className="flex-justify flex-center">
                <div className="footer_sub_left">
                    <span>
                        <img src="/assets/text-icon_white.png" style={{ maxWidth: '150px' }} />
                    </span>
                </div>
                <div className="footer_sub_center">
                    <span>© 2020 Buildsys Software Pvt Ltd. All Rights Reserved.</span>
                </div>
                <div className="footer_sub_right">
                    <span className="footer-social-icons">
                        <a href="https://twitter.com/BuildsysCo" rel="noopener noreferrer" target="_blank">
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/buildsysinc/"
                            rel="noopener noreferrer"
                            target="_blank">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/buildsysinc" rel="noopener noreferrer" target="_blank">
                            <FaFacebook />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
