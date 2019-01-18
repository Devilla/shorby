import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/argon.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreateLink from './components/CreateLink';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route path='/dashboard' component={Homepage} />
      <Route path='/create-link' component={CreateLink} />
      <Redirect to='/dashboard'/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
