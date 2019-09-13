import React from 'react';
import playbtn from '../images/play-button.svg';
import '../css-components/Infographics.css';

function Infographics() {
    return (
        <section className="Infographics">
            <div className="Section-detail">
                <p >...whether you’re making your first commit or sending a Rover to Mars, there’s room for you here, too.</p>
            </div>
            <div className="Sub-Detail">
                <div className="Github-infograohics">
                    <div className="rep-dev">
                        <div className="Repositories">
                            <p>100M*</p>
                            <p>repositories worldwide</p>
                        </div>
                        <div className="Developers">
                            <p>40M*</p>
                            <p>developers worldwide</p>
                        </div>
                    </div>
                    <div className="biz-org">
                        <p>2.1M*</p>
                        <p>businesses &</p>
                        <p>organizations</p>
                        <p>worldwide</p>
                    </div>
                </div>
                <div className="Github-details">
                    <a href="https://github.com/open-source">
                        <p>GitHub's users create and maintain influential technologies alongside the world's largest <span>open source community.</span></p>
                        <img src={playbtn}></img>
                    </a>
                    <a href="https://github.com/personal">
                        <p><span>Developers</span> use GitHub for personal projects, from experimenting with new programming languages to hosting their life's work.</p>
                        <img src={playbtn}></img>
                    </a>
                    <a href="https://github.com/personal">
                        <p><span>Business</span> of all sizes use GitHub to support their development process and Securely build software.</p>
                        <img src={playbtn}></img>
                    </a>
                    <span>*As of April 2019</span>

                </div>
            </div>
        </section>
    );
}

export default Infographics;