import React from "react";
import { Link } from "react-router-dom";
import NotFoundStateImage from "../assets/not-found.jpg";

const NotFound: React.FC = (): React.ReactElement => {
    return (
        <div className="is-flex is-flex-direction-column">
            <img
                src={NotFoundStateImage}
                alt="Not found state image"
                width="40%"
                className="is-align-self-center"
            />
            <Link to="/home" title="Return to home">
                Return to home
            </Link>
        </div>
    );
};

export default NotFound;
