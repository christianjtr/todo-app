import React from "react";

const Login: React.FC = (): React.ReactElement => {
    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box">
                                <div className="field">
                                    <label htmlFor="" className="label">
                                        Email
                                    </label>
                                    <div className="control has-icons-left">
                                        <input
                                            type="email"
                                            placeholder="e.g. bobsmith@gmail.com"
                                            className="input"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">
                                        Password
                                    </label>
                                    <div className="control has-icons-left">
                                        <input
                                            type="password"
                                            placeholder="*******"
                                            className="input"
                                            required
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="checkbox">
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                </div>
                                <div className="field">
                                    <button className="button is-success">
                                        Login
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
