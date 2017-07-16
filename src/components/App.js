import React, { Component } from 'react';
import '../styles/App.css';

import Header from './components/Header';
import About from './components/About';
import Dogs from './components/Dogs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Dogs />
      </div>
    );
  }
}

export default App;
