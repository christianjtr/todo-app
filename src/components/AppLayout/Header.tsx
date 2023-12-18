import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/todo-brand-logo.png";
import UserImg from "../../assets/user.png";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = (props): React.ReactElement => {
    const { className = undefined } = props;

    return (
        <header className={className}>
            <nav
                className="navbar is-fixed-top px-2 is-transparent"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/home" className="navbar-item">
                        <img src={BrandLogo} alt="Logo" />
                        <span className="mx-2 has-text-weight-bold is-size-5">
                            My TODO App
                        </span>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable is-boxed">
                        <a className="navbar-link is-arrowless">
                            <img src={UserImg} alt="Logo" />
                            <span className="mx-2">Profile</span>
                        </a>
                        <div className="navbar-dropdown is-right">
                            <a className="navbar-item">Log out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
