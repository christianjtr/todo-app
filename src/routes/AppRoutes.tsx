import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Home, Login, NotFound } from "../pages";

const AppRoutes: React.FC = (): React.ReactElement => {
    return (
        <Switch>
            <Redirect exact from="/" to="/login" />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default AppRoutes;
