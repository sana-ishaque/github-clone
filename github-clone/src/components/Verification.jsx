import React from 'react';
import '../css-components/BusinessNeeds.css';

function Verification(props) {
    return (
            <div className="verification-div">
                <h5>{props.heading}</h5>
                <p>{props.paraText}</p>
            </div>
    );
}

export default Verification;