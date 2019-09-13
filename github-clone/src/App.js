import React from 'react';
import './App.css';
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
import Infographics from './components/Infographics';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';



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
      <Infographics />
      <GetStarted />
      <Footer />
    </div>

  );
}

export default App;
