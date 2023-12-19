import React from "react";
import { Link, useHistory } from "react-router-dom";
import BrandLogo from "../../assets/todo-brand-logo.png";
interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = (props): React.ReactElement => {
    const { className = undefined } = props;

    const history = useHistory();

    const handleOnLogOut = (): void => {
        history.push("/login");
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
                                <span className="mx-2">---User---</span>
                            </a>
                            <div className="navbar-dropdown is-right is-boxed">
                                <a
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
