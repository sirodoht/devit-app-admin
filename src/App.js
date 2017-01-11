import React, { Component } from 'react';
// import * as firebase from 'firebase';

import Attendees from './Attendees';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <nav>
            <ul className="nav nav-pills pull-right">
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Attendees</a></li>
              <li><a href="#">Sponsors</a></li>
              <li><a href="#">Workshops</a></li>
              <li><a href="#">Talks</a></li>
            </ul>
          </nav>
          <h3 className="text-muted">DEVit Mobile Admin</h3>
        </div>

        <Attendees />

      </div>

    );
  }
}

export default App;
