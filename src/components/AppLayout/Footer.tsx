import React from "react";

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = (props): React.ReactElement => {
    const { className = undefined } = props;

    return <footer className={className}>--- FOOTER ---</footer>;
};

export default Footer;
