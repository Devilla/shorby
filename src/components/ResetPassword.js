import React, { Component } from 'react';
import axios from 'axios';

export default class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      code : '',
      password : '',
      confirmPassword : ''
    }
  }

  handleResetPassword = () => {
    // Request API.
    axios
      .post('http://localhost:1337/auth/reset-password', {
        code: this.state.code,
        password: this.state.password,
        passwordConfirmation: this.state.confirmPassword
      })
      .then(response => {
        // Handle success.
        console.log('Your user\'s password has been changed.');
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error);
      });
  }

  render() {
    return (
  <div className="main-content">
    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div className="container">
        <div className="header-body text-center mb-7">
      <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary border-0 mb-0">
            <div className="card-header bg-transparent pb-5">
              <div className="btn-wrapper text-center">
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Reset Password</small>
              </div>
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                    </div>
                    <input className="form-control" placeholder="code" type="code" value={this.state.code} onChange={(e)=>{this.setState({code:e.target.value})}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Password" type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-merge input-group-alternative">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input className="form-control" placeholder="Confirm Password" type="password" value={this.state.confirmPassword} onChange={(e)=>{this.setState({confirmPassword:e.target.value})}}/>
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label className="custom-control-label" for=" customCheckLogin">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4" onClick={this.handleLogin}>Reset Password</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <a href="#" className="text-light"><small>Forgot password?</small></a>
            </div>
            <div className="col-6 text-right">
              <a href="#" className="text-light"><small>Create new account</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  </div>
    );
  }
}
