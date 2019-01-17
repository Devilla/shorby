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
      backgroundImage: 'linear-gradient(111.7deg, #fbc606 2.4%, #e0525f 28.3%, #c24e9a 46.2%, #20adbe 79.4%, #169e5f 100.2%)',
      pageTitle:'Test'
    }
  }
    render(){
      return (
        <div className="row" style={{marginBottom:'1000px'}}>
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
                        <div onClick={()=>{this.setState({backgroundColor:'#6a3093', backgroundImage: 'linear-gradient(to bottom, #a044ff, #6a3093)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage: 'linear-gradient(to bottom, #a044ff, #6a3093)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#c24e9a', backgroundImage: 'linear-gradient(111.7deg, #fbc606 2.4%, #e0525f 28.3%, #c24e9a 46.2%, #20adbe 79.4%, #169e5f 100.2%)'})} } className="col m-1 p-2" style={{background:'#c24e9a', backgroundImage: 'linear-gradient(111.7deg, #fbc606 2.4%, #e0525f 28.3%, #c24e9a 46.2%, #20adbe 79.4%, #169e5f 100.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#4a626e', backgroundImage:'radial-gradient(circle farthest-corner at -4% -12.9%, #4a626e 0.3%, #1e2130 90.2%)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage:'radial-gradient(circle farthest-corner at -4% -12.9%, #4a626e 0.3%, #1e2130 90.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#68afa9', backgroundImage:'linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage:'linear-gradient(135deg, #79F1A4 10%, #0E5CAD 100%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'#a529b9', backgroundImage: 'linear-gradient(111.7deg, #a529b9 19.9%, #50b1e1 95%)'})} } className="col m-1 p-2" style={{backgroundColor:'#a529b9', backgroundImage: 'linear-gradient(111.7deg, #a529b9 19.9%, #50b1e1 95%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor: '#3466ae', backgroundImage: 'linear-gradient(#3466ae 0%, #5390f1 100%)'})} } className="col m-1 p-2" style={{backgroundColor: '#3466ae', backgroundImage: 'linear-gradient(#3466ae 0%, #5390f1 100%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:' #0e48de', backgroundImage: 'radial-gradient(circle farthest-corner at 85.4% 50.8%, #0e48de 0%, #031641 74.2%)'})} } className="col m-1 p-2" style={{background:'black', backgroundImage: 'radial-gradient(circle farthest-corner at 85.4% 50.8%, #0e48de 0%, #031641 74.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({background:'rgba(6, 0, 255, 0.61)', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(6, 0, 255, 0.61) 0%, #bf00ff 100.7%)'})} } className="col m-1 p-2" style={{background:'rgba(6, 0, 255, 0.61)', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, rgba(6, 0, 255, 0.61) 0%, #bf00ff 100.7%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#3355ff', backgroundImage: 'linear-gradient(292.2deg, #3355ff 33.7%, #0088ff 93.7%)'})} } className="col m-1 p-2" style={{backgroundColor:'#3355ff', backgroundImage: 'linear-gradient(292.2deg, #3355ff 33.7%, #0088ff 93.7%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                      </div>
                      <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'#eb7c40', backgroundImage: 'linear-gradient(109.6deg, #ffb418 11.2%, #f73131 91.1%)'})} } className="col m-1 p-2" style={{backgroundColor:'#eb7c40', backgroundImage: 'linear-gradient(109.6deg, #ffb418 11.2%, #f73131 91.1%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#15b4bd', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #15b4bd 3.1%, #019fa8 90%)'})} } className="col m-1 p-2" style={{backgroundColor:'#15b4bd', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #15b4bd 3.1%, #019fa8 90%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({background:'#85a33c', backgroundImage: 'linear-gradient(111.8deg, #97c02f 0.6%, #658e15 107.2%)'})} } className="col m-1 p-2" style={{background:'#85a33c', backgroundImage: 'linear-gradient(111.8deg, #97c02f 0.6%, #658e15 107.2%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#00cc82', backgroundImage: 'linear-gradient(109.6deg, #00cc82 11.2%, #3ab52e 91.7%)'})} } className="col m-1 p-2" style={{backgroundColor:'#00cc82', backgroundImage: 'linear-gradient(109.6deg, #00cc82 11.2%, #3ab52e 91.7%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#f8d800', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #fdeb71 0%, #f8d800 90%)'})} } className="col m-1 p-2" style={{backgroundColor:'#f8d800', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #fdeb71 0%, #f8d800 90%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'#970a82', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #970a82 0%, #212121 100.2%)'})} } className="col m-1 p-2" style={{backgroundColor:'#970a82', backgroundImage: 'radial-gradient(circle farthest-corner at 10% 20%, #970a82 0%, #212121 100.2%)', borderRadius:'5px', border: '1px solid black'}}>
                        <div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#a6c1ee', backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)'})} } className="col m-1 p-2" style={{backgroundColor:'#a6c1ee', backgroundImage: 'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#f30202', backgroundImage: 'radial-gradient(circle 951px at 1.2% 52.7%, #f30202 0%, #390404 99%)'})} } className="col m-1 p-2" style={{backgroundColor:'#f30202', backgroundImage: 'radial-gradient(circle 951px at 1.2% 52.7%, #f30202 0%, #390404 99%)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#2193b0', backgroundImage: 'linear-gradient(to bottom, #2193b0, #6dd5ed)'})} } className="col m-1 p-2" style={{backgroundColor:'#2193b0', backgroundImage: 'linear-gradient(to bottom, #2193b0, #6dd5ed)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#42275a', backgroundImage: 'linear-gradient(to bottom, #42275a, #734b6d)'})} } className="col m-1 p-2" style={{backgroundColor:'#42275a', backgroundImage: 'linear-gradient(to bottom, #42275a, #734b6d)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        </div>
                        <div className="row mt-2">
                        <div onClick={()=>{this.setState({backgroundColor:'#7b4397', backgroundImage: 'linear-gradient(to bottom, #7b4397, #dc2430)'})} } className="col m-1 p-2" style={{backgroundColor:'#7b4397', backgroundImage: 'linear-gradient(to bottom, #7b4397, #dc2430)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#ff758c', backgroundImage: 'linear-gradient(to bottom, #ff758c, #ff7eb3)'})} } className="col m-1 p-2" style={{backgroundColor:'#ff758c', backgroundImage: 'linear-gradient(to bottom, #ff758c, #ff7eb3)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#868f96', backgroundImage: 'linear-gradient(to bottom, #868f96, #596164)'})} } className="col m-1 p-2" style={{backgroundColor:'#868f96', backgroundImage: 'linear-gradient(to bottom, #868f96, #596164)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#c79081', backgroundImage:'linear-gradient(to bottom, #c79081, #dfa579)'})} } className="col m-1 p-2" style={{backgroundColor:'#c79081', backgroundImage:'linear-gradient(to bottom, #c79081, #dfa579)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
                        <div onClick={()=>{this.setState({backgroundColor:'#0575e6', backgroundImage:'linear-gradient(to bottom, #0575e6, #021b79)'})} } className="col m-1 p-2" style={{backgroundColor:'#0575e6', backgroundImage:'linear-gradient(to bottom, #0575e6, #021b79)', borderRadius:'5px', border: '1px solid black'}}><div className="theme-back">A</div> </div>
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
        <h1 align="center" style={{color:this.state.backgroundColor!='white'?'#ffffff':'black'}}>{this.state.pageTitle}</h1>
        </header>
        <div className="row">
        <div className= "col" style={{background:this.state.backgroundColor!='white'?'#ffffff':'black', borderRadius:'50px', margin:'auto'}}>
        <svg xmlns="http://www.w3.org/2000/svg" height="25pt" viewBox="0 0 512 512.00006" width="25pt">
        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="255.99013" x2="255.99013" y1=".000061" y2="512.000261">
        <stop offset="0" stop-color={this.state.backgroundColor}/>
        <stop offset="1" stop-color={this.state.backgroundColor}/>
        </linearGradient>
        <path d="m261.039062 512c-1.695312 0-3.390624 0-5.097656-.007812-40.132812.097656-77.214844-.921876-113.277344-3.117188-33.0625-2.011719-63.242187-13.4375-87.28125-33.039062-23.195312-18.914063-39.035156-44.488282-47.078124-76.003907-7-27.4375-7.371094-54.371093-7.726563-80.421875-.257813-18.691406-.5234375-40.839844-.578125-63.363281.0546875-22.617187.320312-44.765625.578125-63.457031.355469-26.046875.726563-52.980469 7.726563-80.421875 8.042968-31.515625 23.882812-57.089844 47.078124-76.003907 24.039063-19.601562 54.21875-31.027343 87.285157-33.039062 36.0625-2.191406 73.152343-3.2148438 113.371093-3.1171875 40.144532-.0859375 77.214844.9257815 113.277344 3.1171875 33.0625 2.011719 63.242188 13.4375 87.28125 33.039062 23.199219 18.914063 39.035156 44.488282 47.078125 76.003907 7 27.4375 7.371094 54.375 7.726563 80.421875.257812 18.691406.527344 40.839844.578125 63.363281v.09375c-.050781 22.523437-.320313 44.671875-.578125 63.363281-.355469 26.046875-.722656 52.980469-7.726563 80.421875-8.042969 31.515625-23.878906 57.089844-47.078125 76.003907-24.039062 19.601562-54.21875 31.027343-87.28125 33.039062-34.535156 2.101562-70.011718 3.125-108.277344 3.125zm-5.097656-40.007812c39.480469.09375 75.730469-.902344 110.945313-3.042969 25-1.519531 46.675781-9.632813 64.433593-24.113281 16.414063-13.386719 27.71875-31.855469 33.597657-54.894532 5.828125-22.839844 6.164062-47.363281 6.488281-71.078125.253906-18.566406.519531-40.558593.574219-62.863281-.054688-22.308594-.320313-44.296875-.574219-62.863281-.324219-23.714844-.660156-48.238281-6.488281-71.082031-5.878907-23.039063-17.183594-41.507813-33.597657-54.894532-17.757812-14.476562-39.433593-22.589844-64.433593-24.109375-35.214844-2.144531-71.464844-3.132812-110.851563-3.046875-39.472656-.09375-75.726562.902344-110.941406 3.046875-25 1.519531-46.675781 9.632813-64.433594 24.109375-16.414062 13.386719-27.71875 31.855469-33.597656 54.894532-5.828125 22.84375-6.164062 47.363281-6.488281 71.082031-.253907 18.582031-.519531 40.585937-.574219 62.910156.054688 22.226563.320312 44.234375.574219 62.816406.324219 23.714844.660156 48.238281 6.488281 71.078125 5.878906 23.039063 17.183594 41.507813 33.597656 54.894532 17.757813 14.476562 39.433594 22.589843 64.433594 24.109374 35.214844 2.144532 71.476562 3.144532 110.847656 3.046876zm-.953125-90.992188c-68.921875 0-125-56.074219-125-125s56.078125-125 125-125c68.925781 0 125 56.074219 125 125s-56.074219 125-125 125zm0-210c-46.867187 0-85 38.132812-85 85s38.132813 85 85 85c46.871094 0 85-38.132812 85-85s-38.128906-85-85-85zm139-80c-16.566406 0-30 13.429688-30 30s13.433594 30 30 30c16.570313 0 30-13.429688 30-30s-13.429687-30-30-30zm0 0" fill="url(#a)"/>
        </svg>
        </div>
        <div  className= "col" style={{background:this.state.backgroundColor!='white'?'#ffffff':'black', borderRadius:'50px', margin:'auto'}}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" height="25pt" viewBox="0 0 512 512" width="25pt">
        <linearGradient id="a">
        <stop offset="0" stop-color="#2af598"/>
        <stop offset="1" stop-color="#009efd"/>
        </linearGradient>
        <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="255.7523048184" x2="255.7523048184" href="#a" y1="0" y2="512.0000297334"/>
        <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="257.750272915" x2="257.750272915" href="#a" y1="141.862828" y2="361.650308"/>
        <path d="m435.921875 74.351562c-48.097656-47.917968-112.082031-74.3242182-180.179687-74.351562-67.945313 0-132.03125 26.382812-180.445313 74.289062-48.5 47.988282-75.234375 111.761719-75.296875 179.339844v.078125.046875c.0078125 40.902344 10.753906 82.164063 31.152344 119.828125l-30.453125 138.417969 140.011719-31.847656c35.460937 17.871094 75.027343 27.292968 114.933593 27.308594h.101563c67.933594 0 132.019531-26.386719 180.441406-74.296876 48.542969-48.027343 75.289062-111.71875 75.320312-179.339843.019532-67.144531-26.820312-130.882813-75.585937-179.472657zm-180.179687 393.148438h-.089844c-35.832032-.015625-71.335938-9.011719-102.667969-26.023438l-6.621094-3.59375-93.101562 21.175782 20.222656-91.90625-3.898437-6.722656c-19.382813-33.425782-29.625-70.324219-29.625-106.71875.074218-117.800782 96.863281-213.75 215.773437-213.75 57.445313.023437 111.421875 22.292968 151.984375 62.699218 41.175781 41.03125 63.84375 94.710938 63.824219 151.152344-.046875 117.828125-96.855469 213.6875-215.800781 213.6875zm0 0" fill="url(#b)"/>
        <path d="m186.152344 141.863281h-11.210938c-3.902344 0-10.238281 1.460938-15.597656 7.292969-5.363281 5.835938-20.476562 19.941406-20.476562 48.628906s20.964843 56.40625 23.886718 60.300782c2.925782 3.890624 40.46875 64.640624 99.929688 88.011718 49.417968 19.421875 59.476562 15.558594 70.199218 14.585938 10.726563-.96875 34.613282-14.101563 39.488282-27.714844s4.875-25.285156 3.414062-27.722656c-1.464844-2.429688-5.367187-3.886719-11.214844-6.800782-5.851562-2.917968-34.523437-17.261718-39.886718-19.210937-5.363282-1.941406-9.261719-2.914063-13.164063 2.925781-3.902343 5.828125-15.390625 19.3125-18.804687 23.203125-3.410156 3.894531-6.824219 4.382813-12.675782 1.464844-5.851562-2.925781-24.5-9.191406-46.847656-29.050781-17.394531-15.457032-29.464844-35.167969-32.878906-41.003906-3.410156-5.832032-.363281-8.988282 2.570312-11.898438 2.628907-2.609375 6.179688-6.179688 9.105469-9.582031 2.921875-3.40625 3.753907-5.835938 5.707031-9.726563 1.949219-3.890625.972657-7.296875-.488281-10.210937-1.464843-2.917969-12.691406-31.75-17.894531-43.28125h.003906c-4.382812-9.710938-8.996094-10.039063-13.164062-10.210938zm0 0" fill="url(#c)"/>
        </svg></div>
        </div>
        <div  className= "row" style={{marginTop:'20px', background:this.state.backgroundColor!='white'?'#ffffff':'black', borderRadius:'50px'}}><h2 style={{margin:'auto',color:this.state.backgroundColor}}>Blog</h2></div>
        <div  className= "row" style={{marginTop:'20px', background:this.state.backgroundColor!='white'?'#ffffff':'black', borderRadius:'50px'}}><h2 style={{margin:'auto',color:this.state.backgroundColor}}>Resume</h2></div>
        </div>
        </div>
        </div>
      );
    }
}
