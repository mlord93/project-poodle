import React, { Component } from 'react';
import '../styles/App.css';

import About from './About';
import Dogs from './Dogs';

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
