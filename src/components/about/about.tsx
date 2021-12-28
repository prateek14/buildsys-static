import React, { Fragment } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useMediaPredicate } from 'react-media-hook';
import { useTitle } from '../../utils/common';
import { FullWidthPanel } from '../common/full-width-panel';
import { SinglePanel } from '../common/single-panel';
import { TwoColumnPanel } from '../common/two-column-panel';
import './about.scss';

export const About: React.FunctionComponent = (): JSX.Element => {
    const title = 'About Us';
    useTitle(title);
    const isTablet = useMediaPredicate('(max-width: 979px)');
    const colWidth = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 164px)';
    const colPadding = isTablet ? '64px 64px' : '192px 64px 64px 100px';

    const colPadding2 = isTablet ? '64px 64px' : '164px 64px 64px 100px';
    const colWidthRight = 'calc(50vw - 9px)';
    const imgWidth = 'calc(50vw - 9px - 48px)';
    const imgMargin = '64px 24px';
    const imgBorderRadius = '8px';
    return (
        <Fragment>
            <TwoColumnPanel
                padding="0px"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#f8f6f0"
                rightChildren={!isTablet && <SinglePanel width={colWidth} padding={colPadding}></SinglePanel>}>
                <SinglePanel width={colWidth} padding={colPadding} backgroundColor="#ffee6c">
                    <h1>Free up your project team’s time</h1>
                    <p className="text-20">
                        We are on a mission to get back your time, so you can focus on construction and not on paperwork
                    </p>
                </SinglePanel>
            </TwoColumnPanel>
            <TwoColumnPanel
                padding="0px"
                gutterWidth="0px"
                gutterHeight="0px"
                backgroundColor="#fefefe"
                rightChildren={
                    !isTablet && (
                        <SinglePanel className="flex" width={colWidthRight}>
                            <picture>
                                <source srcSet="/assets/hero/landscape-1.webp" type="image/webp" />
                                <source srcSet="/assets/hero/landscape-1.jpg" type="image/png" />
                                <img
                                    src="/assets/hero/landscape-1.jpg"
                                    style={{ width: imgWidth, borderRadius: imgBorderRadius, margin: imgMargin }}
                                    alt="Buildsys About Us"
                                    title="Buildsys About Us"
                                />
                            </picture>
                        </SinglePanel>
                    )
                }>
                <SinglePanel width={colWidth} padding={colPadding2}>
                    <h2>Who we are</h2>
                    <div className="text-20">
                        Founded in 2017 and Buildsys is a construction productivity software company. Buildsys provides
                        software that makes project communication faster, accountable, and painless, allowing project
                        teams to save time, money and resources.
                    </div>
                    <p></p>
                    <div className="text-20">
                        Buildsys’ mission is to free up project team’s time, so that they can focus on construction and
                        not on paperwork.
                    </div>
                </SinglePanel>
            </TwoColumnPanel>
            <Leadership></Leadership>
            <Contact></Contact>
        </Fragment>
    );
};

export const Contact: React.FunctionComponent = (): JSX.Element => {
    const width = '100%';
    const padding = '64px 0';
    const isTablet = useMediaPredicate('(max-width: 1300px)');
    // const colWidth = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 164px)';
    // const colPadding2 = isTablet ? '64px 64px' : '164px 64px 64px 100px';
    const colWidthRight = isTablet ? 'calc(100vw - 64px)' : 'calc(50vw - 9px)';
    const colPadding = isTablet ? '32px' : '0';
    return (
        <div id="contact">
            <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                <SinglePanel width={width} padding={padding}>
                    <TwoColumnPanel
                        padding="0px"
                        gutterWidth="64px"
                        gutterHeight="0px"
                        backgroundColor="transparent"
                        rightChildren={
                            <SinglePanel padding={colPadding} width={colWidthRight}>
                                <h2>Get in touch</h2>
                                <p className="text-20">
                                    6th Floor, Select CITYWALK <br />
                                    A-3 District Center, Saket
                                    <br />
                                    New Delhi 110017 India
                                </p>
                                <p className="text-20">
                                    <a href="mailto:hello@buildsys.co">hello@buildsys.co</a>
                                </p>
                                <p className="text-20">
                                    <a href="tel:+14259180809">+1 (425) 918-0809</a> <br />
                                    10:00 AM - 6:00 PM PST
                                </p>
                                <p className="text-20">
                                    <a href="tel:+918802216273">+91 8802216273</a> <br />
                                    10:00 AM - 6:00 PM IST
                                </p>
                            </SinglePanel>
                        }>
                        <SinglePanel className="flex map" padding={colPadding} width={colWidthRight}>
                            <div className="mapouter">
                                <div
                                    className="gmap_canvas"
                                    style={{
                                        width: isTablet ? '400px' : '600px',
                                        maxWidth: 'calc(100vw - 64px)',
                                    }}>
                                    <iframe
                                        width={isTablet ? '400' : '600'}
                                        height="400"
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=Buildsys&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}></iframe>
                                    <br />
                                </div>
                            </div>
                        </SinglePanel>
                    </TwoColumnPanel>
                </SinglePanel>
            </FullWidthPanel>
        </div>
    );
};

export const Leadership: React.FunctionComponent = (): JSX.Element => {
    const width = '100%';
    const padding = '64px 0';
    return (
        <FullWidthPanel className="flex-center" backgroundColor="#f8f6f0">
            <SinglePanel width={width} padding={padding}>
                <h2 className="text-center">Our Team</h2>
                <LeadershipGrid></LeadershipGrid>
            </SinglePanel>
        </FullWidthPanel>
    );
};

export const LeadershipGrid: React.FunctionComponent = (): JSX.Element => {
    return (
        <Fragment>
            <ul className="lgrid">
                <li className="text-center">
                    <picture>
                        <source srcSet="/assets/profile/Yukti.webp" type="image/webp" />
                        <source srcSet="/assets/profile/Yukti.jpg" type="image/jpg" />
                        <img
                            className="profile"
                            src="/assets/profile/Yukti.jpg"
                            alt="Yukti Arora"
                            title="Yukti Arora"
                        />
                    </picture>
                    <div>
                        <div className="text-20 text-bold">Yukti Arora</div>
                        <div>CPO &amp; Co-founder</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/yukti-arora-2770b03a" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/yukiarora/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="text-center">
                    <picture>
                        <source srcSet="/assets/profile/Prateek.webp" type="image/webp" />
                        <source srcSet="/assets/profile/Prateek.jpg" type="image/jpg" />
                        <img
                            className="profile"
                            src="/assets/profile/Prateek.jpg"
                            alt="Prateek Arora"
                            title="Prateek Arora"
                        />
                    </picture>
                    <div>
                        <div className="text-20 text-bold">Prateek Arora</div>
                        <div>Co-founder</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/patarora/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/prateek_arora_1" target="_blank" rel="noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="text-center">
                    <picture>
                        <source srcSet="/assets/profile/heyramb.webp" type="image/webp" />
                        <source srcSet="/assets/profile/heyramb.jpg" type="image/jpg" />
                        <img
                            className="profile"
                            src="/assets/profile/heyramb.jpg"
                            alt="Heyramb Goyal"
                            title="Heyramb Goyal"
                        />
                    </picture>
                    <div>
                        <div className="text-20 text-bold">Heyramb Goyal</div>
                        <div>Head of Engineering</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/hey24sheep/" target="_blank" rel="noreferrer">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
};
