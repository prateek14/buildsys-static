import React, { Fragment, useState } from 'react';
import './header.scss';
import { useMediaPredicate } from 'react-media-hook';
import { Link, NavLink } from 'react-router-dom';

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
            <Link to="/" className="logo-img-anchor">
                <img className="logo-img" src="assets/logo.png" alt="Buildsys" title="Buildsys" />
            </Link>
        </div>
    );
};

const HeaderNav: React.FunctionComponent = (): JSX.Element => {
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <NavLink exact={true} to="/" activeClassName="active">
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/what" activeClassName="active">
                        <span>What we do</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/who" activeClassName="active">
                        <span>We work with</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/us" activeClassName="active">
                        <span>About us</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">
                        <span>Contact</span>
                    </NavLink>
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
