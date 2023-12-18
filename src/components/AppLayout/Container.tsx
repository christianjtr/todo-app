import React from "react";

interface ContainerProps {
    className?: string;
}

const Container: React.FC<ContainerProps> = (props): React.ReactElement => {
    const { className = undefined } = props;

    return <section className={className}>--- CONTAINER ---</section>;
};

export default Container;
