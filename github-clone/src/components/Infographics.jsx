import React from 'react';
import playbtn from '../images/play-button.svg';
import '../css-components/Infographics.css';
import InfographicTemplete from './InfographicTemplete';

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
                    <InfographicTemplete/>
                    <InfographicTemplete/>
                    <InfographicTemplete/>

                    <span>*As of April 2019</span>

                </div>
            </div>
        </section>
    );
}

export default Infographics;