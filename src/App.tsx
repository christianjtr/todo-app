import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = (): React.ReactElement => {
    return (
        <Router basename="/todo-app">
            <AppRoutes />
        </Router>
    );
};

export default App;
