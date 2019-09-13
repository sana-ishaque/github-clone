import React from 'react';
import '../css-components/GitHUbUses.css';
function GitHubUses() {
    return (
        <section className="Leading-co-git-ent">
            <p>See how the world's leading companies use GitHub Enterprise</p>
            <div className="GitEntImages">
                <a href="">
                    <figure>
                        <img className="mgm-resort Gitenterprise-img"></img>
                        <figcaption>
                            <div>
                                <p>MGM Resort International</p>
                                <p>Hospitality</p>
                            </div>
                            <p>Read More</p>
                        </figcaption>
                    </figure>
                </a>
                <a href="">
                    <figure>
                        <img className="Nationwide Gitenterprise-img"></img>
                        <figcaption>
                            <div>
                                <p>Nationwide</p>
                                <p>Insurance</p>
                            </div>
                            <p>Read More</p>
                        </figcaption>
                    </figure>
                </a>
                <a href="">
                    <figure>
                        <img className="Sap Gitenterprise-img"></img>
                        <figcaption>
                            <div>
                                <p>SAP</p>
                                <p>Business Software</p>
                            </div>
                            <p>Read More</p>
                        </figcaption>
                    </figure>
                </a>
                <a href="">
                    <figure>
                        <img className="Spotify Gitenterprise-img"></img>
                        <figcaption>
                            <div>
                                <p>Spotify</p>
                                <p>Technology / Streaming</p>
                            </div>
                            <p>Read More</p>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </section>
    );
}

export default GitHubUses;