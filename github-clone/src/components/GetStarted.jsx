import React from 'react';
import '../css-components/GetStarted.css';

function GetStarted() {
    return (
        <section className="Get-started">
            <p>Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.</p>
            <form>
                <div>
                    <label for="username-gs">Username</label>
                    <input className="form" id="username-gs" type="text" placeholder="Pick a username"></input>
                </div>
                <div>
                    <label for="email-gs">Email</label>
                    <input className="form" id="email-gs" type="email" placeholder="Your email address"></input>
                </div>
                <div>
                    <label for="password-gs">Password</label>
                    <input className="form" id="password-gs" type="password" placeholder="Create a password"></input>
                </div>
                <div>
                    <button >Sign up for Github</button>
                </div>
            </form>
            <p className="gs-p">By clicking “Sign up for GitHub”, you agree to our <span>terms of service</span> and <span>privacy statement</span>. We’ll occasionally send you account related emails.</p>
        </section>
    );
}

export default GetStarted;