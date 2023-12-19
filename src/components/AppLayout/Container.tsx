import React from "react";
interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({
    children,
    ...props
}): React.ReactElement => {
    const { className = undefined } = props;

    return (
        <section className={className}>
            <div className="section mt-6">{children}</div>
        </section>
    );
};

export default Container;
