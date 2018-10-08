import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/scss/bootstrap-grid.scss'

import ActivitiesList from './views/activities/activities-list'
import ActivitiesEditor from './views/activities/activities-editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ActivitiesEditor />
        <ActivitiesList />
      </div>
    );
  }
}

export default App;
