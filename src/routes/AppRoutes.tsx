import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Home, Login } from "../pages";

const AppRoutes: React.FC = (): React.ReactElement => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Redirect exact from={path} to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="*" />
        </Switch>
    );
};

export default AppRoutes;
