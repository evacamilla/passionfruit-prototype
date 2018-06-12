import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Passionfruit</h1>
        </header>
        <div>
          <p>Search for a track or producer</p>
          <input type="text" />
          <button>OK</button>
        </div>
        
        <div>
          <h2>Results</h2>
        </div>
      </div>
    );
  }
}

export default App;
