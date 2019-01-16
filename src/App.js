import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/argon.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends Component {



  render() {
    return (
      <div className="App">
      <Homepage/>
      </div>
    );
  }
}

export default App;
