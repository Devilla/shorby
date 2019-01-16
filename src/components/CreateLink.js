import React, { Component } from 'react';
import '../assets/css/argon.css';
import './CreateLink.css';
import { BrowserRouter, Route } from 'react-router-dom';

export default class CreateLink extends Component {
  constructor() {
    super();
    this.state = {
      layoutWidth:'500px',
      backgroundColor:'#883a75',
      pageTitle:'Test'
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
                      <input type="text" name="" value={this.state.pageTitle} onChange={(e)=>{this.setState({pageTitle:e.target.value});
                    console.log(this.state.pageTitle);}} placeholder="Rediff/Blog" className="form-control"/>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <div>
                      <span className="mt-3 mb-3 pl-2 text-sm text-white"><strong>Themes</strong></span>
                      <div className="row">
                        <div onClick={()=>{this.setState({backgroundColor:'white'})} }  className="col m-1 p-2" style={{cursor:'pointer',background:'white', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back" style={{background:'black', color:'white'}}>A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#597af6'})} } className="col m-1 p-2" style={{background:'#597af6', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#bb3d43', backgroundImage:'linear-gradient(to bottom, #bb3d43, #dd5444)'})} } className="col m-1 p-2" style={{background:'#bb3d43',backgroundImage:'linear-gradient(to bottom, #bb3d43, #dd5444)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#50c9c3', backgroundImage: 'linear-gradient(to bottom, #50c9c3, #96deda)'})} } className="col m-1 p-2" style={{background:'#50c9c3', backgroundImage: 'linear-gradient(to bottom, #50c9c3, #96deda)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'#ff0084', backgroundImage: 'linear-gradient(to bottom, #ff0084, #33001b)'})} } className="col m-1 p-2" style={{background:'#ff0084',backgroundImage: 'linear-gradient(to bottom, #ff0084, #33001b)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black', backgroundImage: 'linear-gradient(to bottom, #a044ff, #6a3093)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage: 'linear-gradient(to bottom, #a044ff, #6a3093)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#c24e9a', backgroundImage: 'linear-gradient(111.7deg, #fbc606 2.4%, #e0525f 28.3%, #c24e9a 46.2%, #20adbe 79.4%, #169e5f 100.2%)'})} } className="col m-1 p-2" style={{background:'#c24e9a', backgroundImage: 'linear-gradient(111.7deg, #fbc606 2.4%, #e0525f 28.3%, #c24e9a 46.2%, #20adbe 79.4%, #169e5f 100.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black', backgroundImage:'radial-gradient(circle farthest-corner at -4% -12.9%, #4a626e 0.3%, #1e2130 90.2%)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage:'radial-gradient(circle farthest-corner at -4% -12.9%, #4a626e 0.3%, #1e2130 90.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black', backgroundImage:'linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage:'linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'black'})} } className="col m-1 p-2" style={{background:'black', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>

        </div>
        <div  className="col" style={{ border:'1px solid black', background:this.state.backgroundColor, backgroundImage:this.state.backgroundImage, height:'1009px', maxWidth:this.state.layoutWidth, borderRadius:'10px'}}>
        <div className="container">
        <header>
        <h1 align="center" style={{color:'white'}}>{this.state.pageTitle}</h1>
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
