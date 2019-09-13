import React from 'react';
import twitter from '../images/social-media/twitter.svg';
import fb from '../images/social-media/youtube.svg';
import youtube from '../images/social-media/facebook.svg';
import instagram from '../images/social-media/instagram.svg';
import github from '../images/social-media/github.svg';
import '../css-components/Footer.css';

function Footer  () {
        return (
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
        );
    }
export default Footer;