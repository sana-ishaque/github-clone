import React from 'react';

function Community() {
    return (
        <section className="Community">
            <div className="Section-detail">
                <code>Community</code>
                <h1>Welcome home, developers</h1>
                <p>GitHub is home to the world’s largest community of developers and their projects...</p>
            </div>
            <div>
                <a href="https://github.com/customer-stories/freakboy3742">
                    <figure>
                        <img className="Russel"></img>
                        <figcaption>
                            <p className="Community-name">Russel Keith-Magee</p>
                            <p>Russel Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform</p>
                            <div>
                                <p>Read more</p>
                                <p> →</p>
                            </div>
                        </figcaption>

                    </figure>
                </a>
                <a href="https://github.com/customer-stories/kris-nova">
                    <figure>
                        <img className="Kris"></img>
                        <figcaption>
                            <p className="Community-name">Kris Nova</p>
                            <p>Kris Nova quicky developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops)</p>
                            <div>
                                <p>Read more</p>
                                <p> →</p>
                            </div>
                        </figcaption>
                    </figure>
                </a>
                <a href="https://github.com/customer-stories/yyx990803">
                    <figure>
                        <img className="Evan"></img>
                        <figcaption>
                            <p className="Community-name">Evan You</p>
                            <p>In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads.</p>
                            <div>
                                <p>Read more</p>
                                <p> →</p>
                            </div>
                        </figcaption>
                    </figure>
                </a>
                <a href="https://github.com/customer-stories/jessfraz">
                    <figure>
                        <img className="Jess"></img>
                        <figcaption>
                            <p className="Community-name">Jess Frazelle</p>
                            <p>Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams.</p>
                            <div>
                                <p>Read more</p>
                                <p> →</p>
                            </div>
                        </figcaption>
                    </figure>
                </a>
            </div>
        </section>
    );
}

export default Community;