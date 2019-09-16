import React from 'react';
import playbtn from '../images/play-button.svg';
import '../css-components/Infographics.css';

function InfographicTemplete() {
    return (
        <a href="https://github.com/open-source">
            <p>GitHub's users create and maintain influential technologies alongside the world's largest <span>open source community.</span></p>
            <img src={playbtn}></img>
        </a>
    );
}

export default InfographicTemplete;