import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Dogs from './components/Dogs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Dogs />
      </div>
    );
  }
}

export default App;
