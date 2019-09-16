import React from 'react';
import '../css-components/GitHUbUses.css';
import TempleteCard from './TempleteCard';
function GitHubUses() {
    return (
        <section className="Leading-co-git-ent">
            <p>See how the world's leading companies use GitHub Enterprise</p>
            <div>
                <TempleteCard
                    link=""
                    imgURL="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg"
                    heading="MGM Resort International"
                    text="Hospitality"
                />
                <TempleteCard
                    link=""
                    imgURL="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg"
                    heading="Nationwide"
                    text="Insurance"
                />
                <TempleteCard
                    link=""
                    imgURL="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg"
                    heading="SAP"
                    text="Business Software"
                />
                <TempleteCard
                    link=""
                    imgURL="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg"
                    heading="Spotify"
                    text="Technology / Streaming"
                />
            </div>
        </section>
    );
}

export default GitHubUses;