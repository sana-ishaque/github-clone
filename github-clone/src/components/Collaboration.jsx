import React from 'react';
import illustration from '../images/img-02.PNG';
import playbtn from '../images/play-button.svg';
import '../css-components/Collaboration.css';
import Verification from './Verification';

function Collaboration() {
    return (
        <section className="Collaboration">
            <div><img src={illustration}></img></div>
            <div className="collab-div">
                <div>
                    <Verification
                    heading="Write Better Code"
                    paraText="Collaboration makes perfect. The conversation and code reviews that happen in pull requests help your team share the weight of your work and improve teh software you build."
                    />
                </div>
                <div>
                    <Verification 
                    heading="Manage your chaos"
                    paraText="Take a deep breath. on GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved."
                    />
                </div>
                <div>
                    <Verification 
                    heading="Find the right tools"
                    paraText="Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites-- then start using them in minutes."
                    />
                </div>
            </div>
        </section>
    );
}

export default Collaboration;