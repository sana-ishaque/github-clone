import React from 'react';
import Button from 'react-bootstrap/Button';

function GitHubTeams() {
    return (
        <section className="Github-teams">
            <div className="Section-detail">
                <code>GitHub for teams</code>
                <h1>A better way to work together</h1>
                <p>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</p>
                <Button className="git-btn" variant="outline-primary">Sign up your team →</Button>
            </div>
        </section>
    );
}

export default GitHubTeams;