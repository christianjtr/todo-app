import React from "react";
import { Header, Container, Footer } from "../components/AppLayout";

const Home: React.FC = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Container className="hero is-fullheight has-background-success-light" />
            <Footer className="footer" />
        </>
    );
};

export default Home;
