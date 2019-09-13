import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css-components/Integrations.css';

function Integrations() {
    return (
        <section className="Integrations">
            <div className="Section-detail">
                <code>Integrations</code>
                <h1>Build on Github</h1>
                <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
                <Button className="git-btn" variant="outline-primary">Learn about integrations →</Button>
            </div>
            <div className="Integration-icons">
                <div className="Ic Slack"><img src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png" alt="Slack"></img></div>
                <div className="Ic Zenhub" ><img src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png" alt="Zenhub"></img></div>
                <div className="Ic Trevis"><img src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png" alt="Travis"></img></div>
                <div className="Ic Atom"><img src="https://github.githubassets.com/images/modules/site/integrators/atom.png" alt="Atom"></img></div>
                <div className="Ic Circle"><img src="https://github.githubassets.com/images/modules/site/integrators/circleci.png" alt="Circle Ci"></img></div>
                <div className="Ic Google"><img src="https://github.githubassets.com/images/modules/site/integrators/google.png" alt="Google"></img></div>
                <div className="Ic Code Climate"><img src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png" alt="Code Climate"></img></div>
            </div>
            <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>
            <a href="https://github.com/marketplace">Browse GitHub Marketplace →</a>
        </section>
    );
}

export default Integrations;