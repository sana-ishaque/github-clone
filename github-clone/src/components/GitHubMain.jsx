import React from 'react';
import '../css-components/GithubMain.css';

function GitHubMain() {
    return (
        <section className="Gihub-main">
            <div>
                <div className="Github-about">
                    <h1>Built for developers</h1>
                    <p>Github is a development platform inspired by the way you work. From <a href="https://github.com/open-source">open source</a> to <a href="https://github.com/enterprise">business</a>, you can host and review code, manage projects, and build software alongside 40 million developers.</p>
                </div>

                <div className="Github-signin">
                    <form>
                        <label for="User-name">Username</label>
                        <input className="form" id="User-name" type="text"></input>
                        <label for="password">Email</label>
                        <input className="form" id="password" type="email"></input>
                        <label for="password">Password</label>
                        <input className="form" id="password" type="password"></input>
                        <p>Make sure it's <span>at least 15 characters</span> OR at least 8 characters including a number and a lowercase letter.<a href="https://help.github.com/en/articles/creating-a-strong-password">Learn more</a>.</p>
                        <button className="signup-btn"> Sign up for Github </button>
                        <p > By clicking “Sign up for GitHub”, you agree to our <a href="https://help.github.com/en/articles/github-terms-of-service"> Terms of Service</a> and <a href="https://help.github.com/en/articles/github-privacy-statement">Privacy Statement</a>. We’ll occasionally send you account related emails.</p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default GitHubMain;