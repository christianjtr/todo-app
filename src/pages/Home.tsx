import React from "react";
import { Header, Container } from "../components/AppLayout";
import Todo from "./Todo/Todo";

const Home: React.FC = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Container className="hero is-fullheight">
                <Todo />
            </Container>
        </>
    );
};

export default Home;
