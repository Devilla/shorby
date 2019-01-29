import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  handleRegisterClick =  () => {
    axios
      .post('http://localhost:1337/auth/local/register', {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        history.push('/dashboard');
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }
  render(){
    return(
      <BrowserRouter>
      <div className="main-content">
    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div className="container">
        <div className="header-body text-center mb-7">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 className="text-white">Create an account</h1>
              <p className="text-lead text-white">Use the below form to login or create new account.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card bg-secondary border-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
              <div className="text-center">
                <a href="#" className="btn btn-neutral btn-icon mr-4">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/github.svg"/></span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="../assets/img/icons/common/google.svg"/></span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <form role="form">
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                    </div>
                    <input className="form-control" placeholder="Name" type="text" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value})}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="Email" type="email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} type="password"/>
                  </div>
                </div>
                <div className="text-muted font-italic">
                <small>password strength: <span className="text-success font-weight-700">strong</span>
                </small>
                </div>
                <div className="row my-4">
                  <div className="col-12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                      <label className="custom-control-label" for="customCheckRegister">
                        <span className="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                <Link to='/dashboard'>
                  <button type="button" className="btn btn-primary mt-4" onClick={this.handleRegisterClick}>Create account</button>
                </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </BrowserRouter>
    );
  }
}
