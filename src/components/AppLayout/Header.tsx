import React from "react";
import { Link } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication";
import BrandLogo from "../../assets/todo-brand-logo.png";
interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = (props): React.ReactElement => {
    const { className = undefined } = props;
    const { logOut } = useAuthentication();

    const handleOnLogOut = (): void => {
        logOut();
    };

    return (
        <header className={className}>
            <nav
                className="navbar is-fixed-top px-2 is-transparent"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/home" className="navbar-item" title="Home">
                        <img src={BrandLogo} alt="Brand logo" />
                        <span className="mx-2">My TODO App</span>
                    </Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link" role="button">
                                <i className="fa fa-user-circle" />
                            </a>
                            <div className="navbar-dropdown is-right is-boxed">
                                <a
                                    id="logOutLink"
                                    className="navbar-item"
                                    role="button"
                                    title="Log out"
                                    onClick={handleOnLogOut}
                                >
                                    Log out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
