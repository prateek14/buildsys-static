import React, { Fragment, useState } from 'react';
import './header.scss';
import { useMediaPredicate } from 'react-media-hook';

export const Header: React.FunctionComponent = (): JSX.Element => {
    const isMobile = useMediaPredicate('(max-width: 979px)');
    return (
        <header>
            {!isMobile && <HeaderDesktop></HeaderDesktop>}
            {isMobile && <HeaderMobile></HeaderMobile>}
        </header>
    );
};

const HeaderDesktop: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="header header-desktop flex-center flex-justify">
            <HeaderLogo></HeaderLogo>
            <HeaderNav></HeaderNav>
        </div>
    );
};

const HeaderMobile: React.FunctionComponent = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    let classNames = 'header-mobile-menu';
    if (isOpen) {
        classNames += ' open';
    }

    return (
        <Fragment>
            <div className="header header-mobile flex-center flex-justify">
                <HeaderLogo></HeaderLogo>
                <HeaderHamburger
                    onChange={(v) => {
                        setIsOpen(v);
                    }}></HeaderHamburger>
            </div>
            <div className={classNames}>
                <HeaderNav></HeaderNav>
            </div>
        </Fragment>
    );
};

const HeaderLogo: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="header-logo flex-center">
            <a href="/" className="logo-img-anchor">
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
                    <a href="/">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="/products-solutions">
                        <span>Solutions</span>
                    </a>
                </li>
                <li>
                    <a href="/about-us">
                        <span>About Us</span>
                    </a>
                </li>
                <li>
                    <a href="/contact-us">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const HeaderHamburger: React.FunctionComponent<{
    onChange?: (value: boolean) => void;
}> = ({ onChange }: { onChange?: (value: boolean) => void }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    let classNames = 'flex-column flex-justify-center header-hamburger';
    if (isOpen) {
        classNames += ' open';
    }
    if (isClosing) {
        classNames += ' closing';
    }
    return (
        <div
            className={classNames}
            onClick={() => {
                setIsOpen(!isOpen);
                if (onChange) {
                    onChange(!isOpen);
                }
                if (isOpen) {
                    setIsClosing(true);
                    setTimeout(() => {
                        setIsClosing(false);
                    }, 200);
                }
            }}>
            <span className="lines"></span>
        </div>
    );
};
