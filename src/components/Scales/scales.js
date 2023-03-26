import React from "react";
import svg from "./src/scale.svg"
import './style.css';

const Scales = () => {
    return (
        <div className="Main-content">
            <div className="content">
                <img src={svg}/>
                <h1>Expertise, commitment, and value. It's our mission to consistently provide these to our clients.</h1>
                <p>Wendy Strat ford, CEO</p>
            </div>
        </div>
    );
}

export default Scales;