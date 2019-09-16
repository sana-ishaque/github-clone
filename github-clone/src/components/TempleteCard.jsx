import React from 'react';
import '../css-components/GitHUbUses.css';


function TempleteCard (props) {
    return (
        <div className="GitEntImages">
            <a href={props.link}>
                <figure>
                    <img className="mgm-resort Gitenterprise-img" src={props.imgURL}></img>
                    <figcaption>
                        <div>
                            <p>{props.heading}</p>
                            <p>{props.text}</p>
                        </div>
                        <p>Read More</p>
                    </figcaption>
                </figure>
            </a>
        </div>
    );
}

export default TempleteCard;

