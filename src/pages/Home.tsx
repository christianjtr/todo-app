import React from "react";
import { Header, Container, Footer } from "../components/AppLayout";
import Todo from "./Todo/Todo";

const Home: React.FC = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Container className="hero is-fullheight">
                <Todo />
            </Container>
            <Footer className="footer" />
        </>
    );
};

export default Home;
