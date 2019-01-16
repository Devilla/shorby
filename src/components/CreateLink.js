import React, { Component } from 'react';
import '../assets/css/argon.css';
import './CreateLink.css';
import { BrowserRouter, Route } from 'react-router-dom';

export default class CreateLink extends Component {
  constructor() {
    super();
    this.state = {
      layoutWidth:'500px'
    }
  }
    render(){
      return (
        <div className="row">
        <div className="col-md-4" >

          <div className="card card-pricing bg-gradient-success border-0 text-center mb-4">
            <div className="card-header bg-transparent">
              <h4 className="text-uppercase ls-1 text-white py-3 mb-0">Create Your Link</h4>
            </div>
            <div className="card-body px-lg-7">
              <button className="btn btn-info" onClick={()=>{this.setState({layoutWidth:''})}}> Casual</button>
              <button className="btn btn-primary" onClick={()=>{this.setState({layoutWidth:'500px'})}}>Professional</button>
              <ul className="list-unstyled my-4">
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-terminal"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white"><strong>Buttons</strong></span>
                      <input type="text" name="settings.messengers[0].handle" value="majeem" placeholder="Messenger/Facebook username" className="form-control"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white"><strong>Links</strong></span>
                      <input type="text" name="" value="majeem.com" placeholder="Rediff/Blog" className="form-control"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-hdd"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white"><strong>Social Networks</strong></span>
                      <input type="text" name="" value="fb.com/majeem" placeholder="facebook/Instagram" className="form-control"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i className="fas fa-pen-fancy"></i>
                      </div>
                    </div>
                    <div>
                      <span className="pl-2 text-sm text-white"><strong>Page Title</strong></span>
                      <input type="text" name="" value="Test" placeholder="Rediff/Blog" className="form-control"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <span className="mt-3 mb-3 pl-2 text-sm text-white"><strong>Themes</strong></span>

                      <div className="row">
                        <div className="col m-1 p-2" style={{background:'white', borderRadius:'5px'}}><div className="theme-back" style={{background:'black', color:'white'}}>A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                          <div className="col m-1 p-2" style={{background:'black', borderRadius:'5px'}}><div className="theme-back">A</div> </div>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="btn btn-primary mt-5">Save</button>
            </div>
            <div className="card-footer bg-transparent">
              <a href="#!" className=" text-white"></a>
            </div>
          </div>

        </div>
        <div  className="col" style={{background:'#883a75', height:'1029px', maxWidth:this.state.layoutWidth, borderRadius:'10px'}}>
        <div className="container">
        <header>
        <h1 align="center" style={{color:'white'}}>Test</h1>
        </header>
        <div className="row">
        <div className= "col" style={{background:'#ffffff', borderRadius:'50px', margin:'auto'}}><img src ="insta.jpeg" width="30px"/></div>
        <div  className= "col" style={{background:'#ffffff', borderRadius:'50px', margin:'auto'}}><img src ="whatsapp.jpeg" width="30px"/></div>
        </div>
        <div  className= "row" style={{marginTop:'20px', background:'#ffffff', borderRadius:'50px'}}><h2 style={{margin:'auto',color:'#883a75'}}>Blog</h2></div>
        <div  className= "row" style={{marginTop:'20px', background:'#ffffff', borderRadius:'50px'}}><h2 style={{margin:'auto',color:'#883a75'}}>Resume</h2></div>
        </div>
        </div>
        </div>
      );
    }
}
