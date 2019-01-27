import React , {Component} from 'react';
import axios from 'axios';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email : '',
      password : ''
    }
  }

  handleLogin = () => {

    // Request API.
    axios
      .post('http://localhost:1337/auth/local', {
          identifier: this.state.email,
          password: this.state.password
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);

        // // Request API.
        // axios
        //   .get('http://localhost:1337/posts', {
        //     headers: {
        //       Authorization: `Bearer ${response.data.jwt}`
        //     }
        //   })
        //   .then(response => {
        //     // Handle success.
        //     console.log('=================================>Data: ', response.data);
        //   })
        //   .catch(error => {
        //     // Handle error.
        //     // console.log('An error occurred:', error);
        //   });


      })
      .catch(error => {
        // Handle error.
        // console.log('An error occurred:', error);
      });

  }
    render (){
    return(
      <div className="main-content">
    <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
      <div className="container">
        <div className="header-body text-center mb-7">
      <div className="container mt--8 pb-5">
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-7">
          <div className="card bg-secondary border-0 mb-0">
            <div className="card-header bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
              <div className="btn-wrapper text-center">
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="/assets/img/icons/common/github.svg"/></span>
                  <span className="btn-inner--text">Github</span>
                </a>
                <a href="#" className="btn btn-neutral btn-icon">
                  <span className="btn-inner--icon"><img src="/assets/img/icons/common/google.svg"/></span>
                  <span className="btn-inner--text">Google</span>
                </a>
              </div>
            </div>
            <div className="card-body px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <form role="form">
                <div className="form-group mb-3">
                  <div className="input-group input-group-merge input-group-alternative">
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
                    <input className="form-control" placeholder="Password" type="password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/>
                  </div>
                </div>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                  <label className="custom-control-label" for=" customCheckLogin">
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary my-4" onClick={this.handleLogin}>Sign in</button>
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
