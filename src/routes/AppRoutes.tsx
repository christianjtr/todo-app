import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Login, NotFound } from "../pages";

const AppRoutes: React.FC = (): React.ReactElement => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="*" component={NotFound} />
            <Redirect from="/" to="/login" />
        </Switch>
    );
};

export default AppRoutes;
