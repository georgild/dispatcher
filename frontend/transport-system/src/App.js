import React, { Component } from 'react';
import logo from './logo5.png';
import './App.css';

import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Transport System</h2>
        </div>
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <Main/>
      </div>
    );
  }
}

export default App;
