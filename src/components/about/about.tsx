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
                backgroundColor="#ffffff"
                rightChildren={
                    !isTablet && (
                        <SinglePanel className="flex" width={colWidthRight}>
                            <img
                                style={{ width: colWidthRight }}
                                src="/assets/hero/landscape-1.jpg"
                                alt="Buildsys About Us"
                                title="Buildsys About Us"
                            />
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
            <FullWidthPanel backgroundColor="#f8f6f0">
                <SinglePanel width="calc(100vw - 18px - 512px)" padding="64px 256px">
                    <h2 className="text-center">Our Leadership</h2>
                    <LeadershipGrid></LeadershipGrid>
                </SinglePanel>
            </FullWidthPanel>
        </Fragment>
    );
};

export const LeadershipGrid: React.FunctionComponent = (): JSX.Element => {
    return (
        <Fragment>
            <ul className="lgrid grid-cols-2 col-gap-24 row-gap-36">
                <li className="text-center">
                    <img className="profile" src="assets/profile/Yukti.jpg" />
                    <div>
                        <div className="text-20 text-bold">Yukti Arora</div>
                        <div>CPO &amp; Co-founder</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/yukti-arora-2770b03a" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/yukiarora/" target="_blank">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </li>
                <li className="text-center">
                    <img className="profile" src="assets/profile/Prateek.jpg" />
                    <div>
                        <div className="text-20 text-bold">Prateek Arora</div>
                        <div>CTO &amp; Co-founder</div>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/patarora/" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/prateek_arora_1" target="_blank">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
};
