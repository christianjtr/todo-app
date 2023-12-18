import React from "react";
import { useHistory } from "react-router-dom";

import BrandLogo from "../assets/todo-brand-logo.png";

const Login: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const handleOnLogin = (): void => {
        history.push("/home");
    };

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box">
                                <div className="is-flex is-flex-direction-column m-4">
                                    <img
                                        src={BrandLogo}
                                        alt="Logo"
                                        className="is-align-self-center m-2"
                                    />
                                    <span className="is-size-5">
                                        My TODO App
                                    </span>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input
                                            type="text"
                                            placeholder="User"
                                            className="input"
                                        />
                                        <span className="icon is-small is-left">
                                            <i
                                                className="fa fa-user"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control has-icons-left">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="input"
                                        />
                                        <span className="icon is-small is-left">
                                            <i
                                                className="fa fa-lock"
                                                aria-hidden="true"
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <button
                                        className="button is-transparent"
                                        onClick={handleOnLogin}
                                    >
                                        Log in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
