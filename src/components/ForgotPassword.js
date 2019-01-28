import React, { Component } from 'react';
import axios from 'axios';

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    }
  }

handleForgotPassword = () => {
  // Request API.
  axios
    .post('http://localhost:1337/auth/forgot-password', {
      email: this.state.email,
      url: 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password'
    })
    .then(response => {
      // Handle success.
      console.log('Your user received an email');
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error);
    });
}

render(){
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
                  <small>Forgot Password</small>
                </div>
                <form role="form">
                  <div className="form-group mb-3">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                      </div>
                      <input className="form-control" placeholder="Email" type="code" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
                    </div>
                  </div>


                  <div className="text-center">
                    <button type="button" className="btn btn-primary my-4" onClick={this.handleForgotPassword}>Send mail</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">
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
