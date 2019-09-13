import React from 'react';
import cloud from '../images/cloud.svg';
import varified from '../images/img-03.PNG';
import Button from 'react-bootstrap/Button';
import '../css-components/BusinessNeeds.css';


function BusinessNeeds() {
    return (
        <section className="Your-Business-Needs">
            <div className="Section-detail">
                <code>Security and administration</code>
                <h1>Your business needs, met</h1>
                <p>From flexible hosting to granular access controls, we’ve got your security requirements covered.</p>
                <Button className="git-btn" variant="outline-primary">Learn how GitHub Enterprise works →</Button>
            </div>
            <div className="Verification">
                <img src={varified}></img>
                <div>
                    <div className="verification-div">
                        <h5>Code security</h5>
                        <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code</p>
                    </div>
                    <div className="verification-div">
                        <h5>Access controlled</h5>
                        <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>
                    </div>
                </div>
            </div>

            <div className="Hosted">
                <div>
                    <img src={cloud}></img>
                </div>
                <div>
                    <p>Hosted where you need it</p>
                    <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub Enterprise Server in your own data centers or in a private cloud using Amazon Web Services, Azure, or Google Cloud Platform.</p>
                    <a>Compare plans →</a>
                    <a>Contact Sales for more information →</a>
                </div>
            </div>
        </section>
    );
}

export default BusinessNeeds;