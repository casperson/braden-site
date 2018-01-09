import React, { Component } from 'react';
import profilePhoto from './images/website-photo-me-2.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="App-pic-container">
            <img src={profilePhoto} alt="Braden Casperson" className="App-pic"></img>
          </div>
          <div className="App-section-separator"></div>
          <div className="App-text-container">
            <h1 className="App-title">Braden Casperson</h1>
            <p className="App-intro">
              I'm an engineer who does iOS work @GapInc. Check out my blog on Medium below. Feel free to contact me.
            </p>
            <p className="App-links">
              <a href="https://www.linkedin.com/in/bradencasperson/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
              <a href="https://github.com/casperson" target="_blank"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
              <a href="https://twitter.com/bradencasperson" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
              <a href="https://medium.com/@casperson" target="_blank"><i className="fa fa-medium fa-2x" aria-hidden="true"></i></a>
              <a href="https://open.spotify.com/user/1246323348" target="_blank"><i className="fa fa-spotify fa-2x" aria-hidden="true"></i></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
