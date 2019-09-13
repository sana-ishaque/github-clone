import React from 'react';
import twitter from './images/social-media/twitter.svg';
import fb from './images/social-media/youtube.svg';
import youtube from './images/social-media/facebook.svg';
import instagram from './images/social-media/instagram.svg';
import github from './images/social-media/github.svg';

import Button from 'react-bootstrap/Button';
import playbtn from './images/play-button.svg';


import Header from './components/Header';
import GitHubMain from './components/GitHubMain';
import GitHUbEnterprise from './components/GitHUbEnterprise';
import GitHubActions from './components/GitHubActions';
import GitHubOrg from './components/GitHubOrg';
import GitHubTeams from './components/GitHubTeams';
import Collaboration from './components/Collaboration';
import GitHubUses from './components/GitHubUses';
import Integrations from './components/Integrations';
import Community from './components/Community';



import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <GitHubMain />
      <GitHUbEnterprise />
      <GitHubActions />
      <GitHubOrg />
      <GitHubTeams />
      <Collaboration />
      <GitHubUses />
      <Integrations />
      <Community />





      <main>














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

        <section className="Get-started">
          <p>Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.</p>
          <form>
            <div>
              <label for="username-gs">Username</label>
              <input className="form" id="username-gs" type="text" placeholder="Pick a username"></input>
            </div>
            <div>
              <label for="email-gs">Email</label>
              <input className="form" id="email-gs" type="email" placeholder="Your email address"></input>
            </div>
            <div>
              <label for="password-gs">Password</label>
              <input className="form" id="password-gs" type="password" placeholder="Create a password"></input>
            </div>
            <div>
              <button >Sign up for Github</button>
            </div>
          </form>
          <p className="gs-p">By clicking “Sign up for GitHub”, you agree to our <span>terms of service</span> and <span>privacy statement</span>. We’ll occasionally send you account related emails.</p>
        </section>
      </main>
      <footer>
        <div>
          <div>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"></img>
          </div>
          <div>
            <div>
              <ul>
                <li>Product</li>
                <li><a href="">Features</a></li>
                <li><a href="">Security</a></li>
                <li><a href="">Enterprise</a></li>
                <li><a href="">Customer stories</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Resources</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Platform</li>
                <li><a href="">Developer API</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">Atom</a></li>
                <li><a href="">Electron stories</a></li>
                <li><a href="">GitHub Desktop</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Support</li>
                <li><a href="">Help</a></li>
                <li><a href="">Community Forum</a></li>
                <li><a href="">Training</a></li>
                <li><a href="">Status</a></li>
                <li><a href="">Contact GitHub</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Company</li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Shop</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Bottom-Last">
          <div>
            <div>
              <ul>
                <p>© 2019 GitHub, Inc.</p>
                <p><a href="">Terms</a></p>
                <p><a href="">Privacy</a></p>
              </ul>
            </div>
            <div className="Social">
              <ul>
                <img src={twitter}></img>
                <img src={fb}></img>
                <img src={youtube}></img>
                <img src={instagram}></img>
                <img src={github}></img>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
