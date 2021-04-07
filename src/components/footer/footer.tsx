import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import './footer.scss';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ContactForm } from '../contact/contact-form';
import { Link } from 'react-router-dom';
import { AppleLink, GoogleLink } from '../common/app-links';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// const url = 'https://buildsys.us7.list-manage.com/subscribe/post?u=84fb69048736bc9b382cdba7a&amp;id=17203310df';

const url = 'https://buildsys.us7.list-manage.com/subscribe/post?u=8a3a5698916dc42faa11a9659&amp;id=df83a7e441';

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
            <FooterSubscribe></FooterSubscribe>
            <FooterMain></FooterMain>
            <FooterSecondary></FooterSecondary>
        </div>
    );
};

export const FooterMobile: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="footer footer-mobile">
            <FooterSubscribe></FooterSubscribe>
            <FooterMain></FooterMain>
            <FooterSecondary></FooterSecondary>
        </div>
    );
};

export const FooterSubscribe: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="footer-form flex-column-center">
            <h2>Subscribe to our mailing list</h2>
            <div className="flex-center">
                <MailchimpSubscribe url={url} />
            </div>
        </div>
    );
};

export const FooterMain: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="flex-center footer-main">
            <div className="flex-justify">
                <div className="col">
                    <div className="title">Company</div>
                    <div>
                        Buildsys is a construction productivity application that reduces paperwork and makes
                        field-to-office communication faster, trackable, and mobile. <br />
                        Buildsys works everywhere construction works, in the office, in the field and can be accessed
                        from Web, iPad, iPhone and Android devices.
                        <p>
                            <Link to="/us">About Us</Link>
                        </p>
                        <p>
                            <Link to="/us#contact">Contact Us</Link>
                        </p>
                        <p>
                            <Link to="/blog">Blog</Link>
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Product</div>
                    <p>
                        <Link to="/pricing">Pricing</Link>
                    </p>
                    <p>
                        <Link to="/schedule-demo">Schedule Demo</Link>
                    </p>
                    <p>
                        <Link to="/terms">Terms of Use</Link>
                    </p>
                    <p>
                        <Link to="/privacy-notice">Privacy Policy</Link>
                    </p>
                    <p>
                        <a href="https://app.buildsys.co" rel="noreferrer" target="_blank">
                            Login
                        </a>
                    </p>
                    <p>
                        <AppleLink></AppleLink>
                    </p>
                    <p>
                        <GoogleLink></GoogleLink>
                    </p>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div>
                        <a href="mailto:hello@buildsys.co">hello@buildsys.co</a> <br />
                        <br />
                        <a href="tel:+911140599999">+91 11 40599999 </a> <br />
                        <br />
                        <a href="tel:+919999778225">+91 9999778225 </a> <br />
                        <br />
                    </div>
                    <br />
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
                        <img alt="Buildsys Logo" src="/assets/text-icon_white.png" width="150" height="30" />
                    </span>
                </div>
                <div className="footer_sub_center">
                    <span>© 2021 Buildsys Software Pvt Ltd. All Rights Reserved.</span>
                </div>
                <div className="footer_sub_right">
                    <span className="footer-social-icons">
                        <a
                            href="https://twitter.com/BuildsysCo"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Buildsys on Twitter">
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/buildsysinc/"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Buildsys on Twitter">
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/buildsysinc"
                            rel="noopener noreferrer"
                            target="_blank"
                            aria-label="Buildsys on Facebook">
                            <FaFacebook />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
