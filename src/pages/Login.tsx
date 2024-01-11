import React from "react";
import useAuthentication from "../hooks/useAuthentication";
import BrandLogo from "../assets/todo-brand-logo.png";

const Login: React.FC = (): React.ReactElement => {
    const { logIn } = useAuthentication();

    const handleOnLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        logIn({ username, password });
    };

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form
                                id="loginForm"
                                name="loginForm"
                                className="box"
                                onSubmit={handleOnLogin}
                            >
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
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="User"
                                            className="input"
                                            minLength={3}
                                            data-cy="username"
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
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            className="input"
                                            minLength={8}
                                            maxLength={16}
                                            data-cy="password"
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
                                        id="submitBtn"
                                        name="submitBtn"
                                        type="submit"
                                        form="loginForm"
                                        className="button is-transparent"
                                        data-cy="submitBtn"
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
