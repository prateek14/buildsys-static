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
                    isOpen={isOpen}
                    onChange={(v) => {
                        setIsOpen(v);
                    }}></HeaderHamburger>
            </div>
            <div className={classNames}>
                <HeaderNav
                    onClick={() => {
                        setIsOpen(false);
                    }}></HeaderNav>
            </div>
        </Fragment>
    );
};

const HeaderLogo: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className="header-logo flex-center">
            <Link to="/" className="logo-img-anchor">
                <img
                    className="logo-img"
                    src="assets/logo_big.png"
                    alt="Buildsys Logo"
                    title="Buildsys"
                    width="180"
                    height="35"
                />
            </Link>
        </div>
    );
};

const HeaderNav: React.FunctionComponent<{ onClick?: () => void }> = ({
    onClick,
}: {
    onClick?: () => void;
}): JSX.Element => {
    if (!onClick) {
        onClick = () => {
            //
        };
    }
    return (
        <nav className="header-nav">
            <ul>
                <li>
                    <NavLink onClick={onClick} exact={true} to="/" activeClassName="active">
                        <span>Home</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink onClick={onClick} to="/product" activeClassName="active">
                        <span>Product</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink onClick={onClick} to="/pricing" activeClassName="active">
                        <span>Pricing</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onClick} to="/us" activeClassName="active">
                        <span>About Us</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={onClick} to="/schedule-demo" activeClassName="active">
                        <span>Schedule Demo</span>
                    </NavLink>
                </li>
                <li>
                    <a href="https://app.buildsys.co" target="_blank" rel="noreferrer">
                        <span>Login</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

const HeaderHamburger: React.FunctionComponent<{
    isOpen: boolean;
    onChange: (value: boolean) => void;
}> = ({ isOpen, onChange }: { isOpen: boolean; onChange: (value: boolean) => void }): JSX.Element => {
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
                onChange(!isOpen);
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

export default Header;
