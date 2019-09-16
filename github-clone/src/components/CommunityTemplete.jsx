import React from 'react';
import '../css-components/Community.css';

function CommunityTemplete  (props) {
        return (
            <a href={props.link}>
                <figure>
                    <img className="Russel" src={props.imgURL}></img>
                    <figcaption>
                        <p className="Community-name">{props.name}</p>
                        <p>{props.paraText}</p>
                        <div>
                            <p>Read more</p>
                            <p> →</p>
                        </div>
                    </figcaption>

                </figure>
            </a>
        );
    }

export default CommunityTemplete;