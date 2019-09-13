import React from 'react';
import logo from '../images/logo.png';
import arrow from '../images/arrow.svg';
import '../css-components/Header.css';

function Header() {
    return (
        <header className="App-header">
            <div className="Nav-bar">
                <img className="github-logo" src={logo} alt="Logo" />
                <a className="Nav-link" href="#">
                    <p>Why Github? </p><img src={arrow}></img>
                </a>
                <a className="Nav-link" href="#">
                    <p>Enterprise</p>
                </a>
                <a className="Nav-link" href="#">
                    <p>Explore </p>
                    <img src={arrow}></img>
                </a>
                <a className="Nav-link" href="#">
                    <p>Marketplace </p>
                </a>
                <a className="Nav-link" href="#">
                    <p>Pricing </p>
                    <img src={arrow}></img>
                </a>
            </div>
            <div className="account-info">
                <input className="Search-input " placeholder="Search GitHub"></input>
                <a className="ai">Sign in</a>
                <button className="Sign-up ai">Sign up</button>
            </div>
        </header>
    );
}
export default Header;