import React from "react";

interface ContainerProps {
    className?: string;
}

const Container: React.FC<ContainerProps> = (props): React.ReactElement => {
    const { className = undefined } = props;

    return (
        <section className={className}>
            <div className="section">--- CONTAINER ---</div>
        </section>
    );
};

export default Container;
