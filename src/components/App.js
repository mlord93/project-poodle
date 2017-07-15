import React, { Component } from 'react';
import '../styles/App.css';

import About from './About';
import Available from './Available';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Available />
      </div>
    );
  }
}

export default App;
