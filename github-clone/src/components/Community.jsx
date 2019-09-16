import React from 'react';
import '../css-components/Community.css';
import CommunityTemplete from './CommunityTemplete';
function Community() {
    return (
        <section className="Community">
            <div className="Section-detail">
                <code>Community</code>
                <h1>Welcome home, developers</h1>
                <p>GitHub is home to the world’s largest community of developers and their projects...</p>
            </div>
            <div>
                <CommunityTemplete 
                link="https://github.com/customer-stories/freakboy3742"
                imgURL="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg"
                name="Russel Keith-Magee"
                paraText="Russel Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform"
                />
                <CommunityTemplete 
                link=""
                imgURL="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg"
                name="Kris Nova"
                paraText="Kris Nova quicky developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops)"
                />
                <CommunityTemplete 
                link=""
                imgURL="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg"
                name="Evan You"
                paraText="In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads."
                />
                <CommunityTemplete 
                link="https://github.com/customer-stories/jessfraz"
                imgURL="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg"
                name="Jess Frazell"
                paraText="Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams."
                />

            </div>
        </section>
    );
}

export default Community;