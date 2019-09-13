import React from 'react';
import illustration from '../images/img-02.PNG';
import playbtn from '../images/play-button.svg';


function Collaboration() {
    return (
        <section className="Collaboration">
            <div><img src={illustration}></img></div>
            <div className="collab-div">
                <div>
                    <div>
                        <h5>Write Better Code</h5>
                        <p>Collaboration makes perfect. The conversation and code reviews that happen in pull requests help your team share the weight of your work and improve teh software you build. <a href="https://github.com/features/code-review">Learn about code review</a></p>
                    </div>
                    <div>
                        <img src={playbtn}></img>
                    </div>
                </div>
                <div>
                    <div>
                        <h5>Manage your chaos</h5>
                        <p>Take a deep breath. on GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved.<a href="https://github.com/features/project-management">Learn about project management.</a></p>
                    </div>
                    <img src={playbtn}></img>
                    <div></div>
                </div>
                <div>
                    <div>
                        <h5>Find the right tools</h5>
                        <p>Browsw and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites-- then start using them in minutes.<a href="https://github.com/features/integrations">Learn about integrations</a></p>
                    </div>
                    <img src={playbtn}></img>
                    <div></div>
                </div>
            </div>
        </section>
    );
}

export default Collaboration;