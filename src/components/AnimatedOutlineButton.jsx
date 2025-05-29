import React from "react";
import "./AnimatedOutlineButton.css";

const AnimatedOutlineButton = ({ children, onClick }) => {
    return (
        <button className="animated-outline-button" onClick={onClick}>
            <span className="content">{children}</span>
            <span className="border top" />
            <span className="border left" />
            <span className="border bottom" />
            <span className="border right" />
        </button>
    );
};

export default AnimatedOutlineButton;
