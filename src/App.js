import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Available from './components/Available';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Available />
      </div>
    );
  }
}

export default App;
