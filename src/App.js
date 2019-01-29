import React, { Component } from 'react';
import './App.css';
import './assets/css/argon.css';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreateLink from './components/CreateLink';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/reset-password' component={ResetPassword} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route path='/dashboard' component={Homepage} />
      <Route path='/create-link' component={CreateLink} />
      <Redirect to='/login'/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
