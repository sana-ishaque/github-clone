import React from 'react';
import GithubActions from './images/img-01.PNG';
import airbnb from './images/corporate-icons/airbnb-logo.png';
import sap from './images/corporate-icons/sap-logo.png';
import ibm from './images/corporate-icons/ibm-logo.png';
import google from './images/corporate-icons/google-logo.png';
import paypal from './images/corporate-icons/paypal-logo.png';
import bloomberg from './images/corporate-icons/bloomberg-logo.png';
import spotify from './images/corporate-icons/spotify-logo.png';
import swift from './images/corporate-icons/swift-logo.png';
import facebook from './images/corporate-icons/facebook-logo.png';
import node from './images/corporate-icons/node-logo.png';
import nasa from './images/corporate-icons/nasa-logo.png';
import walmart from './images/corporate-icons/walmart-logo.png';
import illustration from './images/img-02.PNG';
import varified from './images/img-03.PNG';
import twitter from './images/social-media/twitter.svg';
import fb from './images/social-media/youtube.svg';
import youtube from './images/social-media/facebook.svg';
import instagram from './images/social-media/instagram.svg';
import github from './images/social-media/github.svg';
import Button from 'react-bootstrap/Button';
import cloud from './images/cloud.svg';


import playbtn from './images/play-button.svg';
import Header from './components/Header';
import GitHubMain from './components/GitHubMain';




import abc from './images/simple-codelines.svg';
import './App.css';
import GitHUbEnterprise from './components/GitHUbEnterprise';

function App() {
  return (
    <div className="App">
      <Header />
      <GitHubMain />
      <GitHUbEnterprise/>
      <main>


        <div className="Github-actions">
          <img src={GithubActions}></img>
        </div>
        <section className="Business-and-organization">
          <p>More than 2.1 million businesses and organizations use GitHub</p>
          <ul>
            <li><img className="org-logo" src={airbnb}></img></li>
            <li><img className="org-logo" src={sap}></img></li>
            <li><img className="org-logo" src={ibm}></img></li>
            <li><img className="org-logo" src={google}></img></li>
            <li><img className="org-logo" src={paypal}></img></li>
            <li><img className="org-logo" src={bloomberg}></img></li>
            <li><img className="org-logo" src={spotify}></img></li>
            <li><img className="org-logo" src={swift}></img></li>
            <li><img className="org-logo" src={facebook}></img></li>
            <li><img className="org-logo" src={node}></img></li>
            <li><img className="org-logo" src={nasa}></img></li>
            <li><img className="org-logo" src={walmart}></img></li>
          </ul>
        </section>
        <section className="Github-teams">
          <div className="Section-detail">
            <code>GitHub for teams</code>
            <h1>A better way to work together</h1>
            <p>GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</p>
            <Button className="git-btn" variant="outline-primary">Sign up your team →</Button>
          </div>

        </section>

        <section className="Collaboration">
          <div><img src={illustration}></img></div>
          <div className="collab-div">
            <div>
              <div>
                <h5>Write Better Code</h5>
                <p>Collaboration makes perfect. The conversation and code reviews that happen in pull requests help your team share the weight of your work and improve teh software you build. <a href="https://github.com/features/code-review">Learn about code review</a></p>
              </div>
              <div>
                <img src={playbtn}></img>
              </div>
            </div>
            <div>
              <div>
                <h5>Manage your chaos</h5>
                <p>Take a deep breath. on GitHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved.<a href="https://github.com/features/project-management">Learn about project management.</a></p>
              </div>
              <img src={playbtn}></img>
              <div></div>
            </div>
            <div>
              <div>
                <h5>Find the right tools</h5>
                <p>Browsw and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites-- then start using them in minutes.<a href="https://github.com/features/integrations">Learn about integrations</a></p>
              </div>
              <img src={playbtn}></img>
              <div></div>
            </div>
          </div>
        </section>

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

        <section className="Your-Business-Needs">
          <div className="Section-detail">
            <code>Security and administration</code>
            <h1>Your business needs, met</h1>
            <p>From flexible hosting to granular access controls, we’ve got your security requirements covered.</p>
            <Button className="git-btn" variant="outline-primary">Learn how GitHub Enterprise works →</Button>
          </div>
          <div className="Verification">
            <img src={varified}></img>
            <div>
              <div className="verification-div">
                <h5>Code security</h5>
                <p>Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code</p>
              </div>
              <div className="verification-div">
                <h5>Access controlled</h5>
                <p>Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP.</p>
              </div>
            </div>
          </div>

          <div className="Hosted">
            <div>
              <img src={cloud}></img>
            </div>
            <div>
              <p>Hosted where you need it</p>
              <p>Securely and reliably host your work on GitHub using GitHub Enterprise Cloud. Or deploy GitHub Enterprise Server in your own data centers or in a private cloud using Amazon Web Services, Azure, or Google Cloud Platform.</p>
              <a>Compare plans →</a>
              <a>Contact Sales for more information →</a>
            </div>
          </div>
        </section>

        <section className="Integrations">
          <div className="Section-detail">
            <code>Integrations</code>
            <h1>Build on Github</h1>
            <p>Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.</p>
            <Button className="git-btn" variant="outline-primary">Learn about integrations →</Button>
          </div>
          <div className="Integration-icons">
            <div className="Ic Slack"><img src="https://github.githubassets.com/images/modules/site/integrators/slackhq.png" alt="Slack"></img></div>
            <div className="Ic Zenhub" ><img src="https://github.githubassets.com/images/modules/site/integrators/zenhubio.png" alt="Zenhub"></img></div>
            <div className="Ic Trevis"><img src="https://github.githubassets.com/images/modules/site/integrators/travis-ci.png" alt="Travis"></img></div>
            <div className="Ic Atom"><img src="https://github.githubassets.com/images/modules/site/integrators/atom.png" alt="Atom"></img></div>
            <div className="Ic Circle"><img src="https://github.githubassets.com/images/modules/site/integrators/circleci.png" alt="Circle Ci"></img></div>
            <div className="Ic Google"><img src="https://github.githubassets.com/images/modules/site/integrators/google.png" alt="Google"></img></div>
            <div className="Ic Code Climate"><img src="https://github.githubassets.com/images/modules/site/integrators/codeclimate.png" alt="Code Climate"></img></div>
          </div>
          <p>Sometimes, there’s more than one tool for the job. Why not try something new?</p>
          <a href="https://github.com/marketplace">Browse GitHub Marketplace →</a>
        </section>

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
