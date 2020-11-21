import React from 'react';
import './header.scss';
import { useMediaPredicate } from 'react-media-hook';

export const Header: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    return <header>{!isMobile && <HeaderDesktop></HeaderDesktop>}</header>;
};

const HeaderDesktop: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="header-desktop flex-center flex-justify">
            <HeaderLogo></HeaderLogo>
            <HeaderNav></HeaderNav>
        </div>
    );
};

const HeaderLogo: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="header-logo flex-center">
            <a href="https://buildsys.co" className="logo-img-anchor">
                <img className="logo-img" src="logo.png" alt="Buildsys" title="Buildsys" />
            </a>
        </div>
    );
};

const HeaderNav: React.FunctionComponent = (): JSX.Element => {
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <a href="https://buildsys.co/">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="https://buildsys.co/products-solutions">
                        <span>Solutions</span>
                    </a>
                </li>
                <li>
                    <a href="https://buildsys.co/about-us">
                        <span>About Us</span>
                    </a>
                </li>
                <li>
                    <a href="https://buildsys.co/contact-us">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
