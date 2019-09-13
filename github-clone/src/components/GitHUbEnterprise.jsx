import React, { Component } from 'react';
import cloud from '../images/cloud.svg';
import server from '../images/server.svg';
import support from '../images/support.svg';
import Button from 'react-bootstrap/Button';
import '../css-components/GitHunEnterprise.css';


function GitHUbEnterprise() {
    return (
        <section className="Github-Enterprise">
            <div className="ghe-heading">
                <h2>Get started with GitHub Enterprise</h2>
                <p>Take collaboration to the next level with security and administrative features built for teams.</p>
            </div>
            <div className="ghe-options">
                <div className="ghe-getstarted">
                    <img src={cloud}></img>
                    <h6>Enterprise Cloud</h6>
                    <p>Leave the hosting to us.</p>
                    <Button className="getstarted-btn" variant="primary">Try Cloud for free</Button>
                </div>
                <div className="ghe-getstarted">
                    <img src={server}></img>
                    <h6>Enterprise Server</h6>
                    <p>Deploy to your environment.</p>
                    <Button className="getstarted-btn" variant="primary">Try Server for free</Button>
                </div>
                <div className="ghe-getstarted">
                    <img src={support}></img>
                    <h6>Talk to us</h6>
                    <p>Want to use both?</p>
                    <Button className="getstarted-btn" variant="outline-primary">Contact Sales →</Button>
                </div>
            </div>
        </section>
    );
}

export default GitHUbEnterprise;