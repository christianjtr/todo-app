import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const PrivateRoute: React.FC<RouteProps> = (props) => {
    const { component: Component, ...routeProps } = props;
    const { checkAuthToken } = useAuthentication();

    if (!Component) return null;

    return (
        <Route
            {...routeProps}
            render={(props) => {
                if (!checkAuthToken()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
                return <Component {...props} />;
            }}
        />
    );
};

export default PrivateRoute;
