import React from 'react';
import airbnb from '../images/corporate-icons/airbnb-logo.png';
import sap from '../images/corporate-icons/sap-logo.png';
import ibm from '../images/corporate-icons/ibm-logo.png';
import google from '../images/corporate-icons/google-logo.png';
import paypal from '../images/corporate-icons/paypal-logo.png';
import bloomberg from '../images/corporate-icons/bloomberg-logo.png';
import spotify from '../images/corporate-icons/spotify-logo.png';
import swift from '../images/corporate-icons/swift-logo.png';
import facebook from '../images/corporate-icons/facebook-logo.png';
import node from '../images/corporate-icons/node-logo.png';
import nasa from '../images/corporate-icons/nasa-logo.png';
import walmart from '../images/corporate-icons/walmart-logo.png';
import '../css-components/GitHubOrg.css'


function GitHubOrg() {
    return (
        <section className="Business-and-organization">
            <p>More than 2.1 million businesses and organizations use GitHub</p>
            <ul>
                <li><img className="org-logo" src={airbnb}></img></li>
                <li><img className="org-logo" src={sap}></img></li>
                <li><img className="org-logo" src={ibm}></img></li>
                <li><img className="org-logo" src={google}></img></li>
                <li><img className="org-logo" src={paypal}></img></li>
                <li><img className="org-logo" src={bloomberg}></img></li>
                <li><img className="org-logo" src={spotify}></img></li>
                <li><img className="org-logo" src={swift}></img></li>
                <li><img className="org-logo" src={facebook}></img></li>
                <li><img className="org-logo" src={node}></img></li>
                <li><img className="org-logo" src={nasa}></img></li>
                <li><img className="org-logo" src={walmart}></img></li>
            </ul>
        </section>
    );
}

export default GitHubOrg;