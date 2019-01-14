import React, { Component } from 'react';
import './App.css';
import './assets/css/argon.css';
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
        <div style={{background:'#883a75', height:'1029px', width:this.state.layoutWidth, borderRadius:'10px'}}>
        <div className="container">
        <header>
        <h1 align="center" style={{color:'white'}}>Test</h1>
        </header>
        <div className="row">
        <div className= "col" style={{background:'#ffffff', borderRadius:'50px'}}><img src ="insta.jpeg" width="50px"/></div>
        <div  className= "col" style={{background:'#ffffff', borderRadius:'50px'}}><img src ="whatsapp.jpeg" width="50px"/></div>
        </div>
        <div  className= "row" style={{marginTop:'20px', background:'#ffffff', borderRadius:'50px'}}><h2 style={{marginLeft:'200px',color:'#883a75'}}>Blog</h2></div>
        <div  className= "row" style={{marginTop:'20px', background:'#ffffff', borderRadius:'50px'}}><h2 style={{marginLeft:'200px',color:'#883a75'}}>Resume</h2></div>
        </div>
        <button className="btn btn-primary" onClick={()=>{this.setState({layoutWidth:''})}}> Casual</button>
        <button className="btn btn-info" onClick={()=>{this.setState({layoutWidth:'500px'})}}>Professional</button>
        </div>
      );
    }
}
