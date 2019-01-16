import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/argon.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CreateLink from './CreateLink';

class App extends Component {
  constructor(){
    super();
    this.state = {
        display1:'none',
        display2:'none',
        display3:'none',
        display4:'none'
    }
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Route path='/create-link'  component={CreateLink}/>
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="card-header border-0">
              <h3 style={{color:'#5e72e4', fontWeight:'bold', fontSize:'22px'}} className="mb-0">Brand Name</h3>
            </div>
            <button className="btn btn-icon btn-3 btn-primary" type="button" style={{marginLeft: '20px', width: '200px'}}>
              <span className="btn-inner--icon"><i className="ni ni-circle-08"></i></span>
              <span className="btn-inner--text" ><Link to='/create-link' style={{color:'#ffffff'}}>Create Bio Link</Link></span>
            </button>
            <div className="table-responsive" style={{marginTop:"50px"}}>
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Link</th>
                    <th scope="col">Status</th>
                    <th scope="col">Completion</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={()=>{this.state.display1=='none'?this.setState({display1:'block'}):this.setState({display1:'none'})}}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="insta.jpeg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Instagram</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-warning"></i> pending
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <button className="btn btn-primary" type="button" >Edit</button>
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <div style={{height:'200px', display:this.state.display1}}>
                    <div className="link-item__body"><div className="link-body-info">
                      <div className="hidden-wrap">
                        <div className="link-info-url small line-clamp">
                        <a target="_blank"></a>
                        </div>
                        <div className="link-info-date small">created on January 10, 2019</div>
                        </div>
                        <div className="link-pixel-sets mt1"><span className="small">Tracking Pixels:</span>&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                  <tr onClick={()=>{this.state.display2=='none'?this.setState({display2:'block'}):this.setState({display2:'none'})}}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="fb.png"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Facebook</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-success"></i> completed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <button className="btn btn-primary" type="button">Edit</button>
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <div style={{height:'200px', display:this.state.display2}}>
                  <div className="link-item__body"><div className="link-body-info">
                    <div className="hidden-wrap">
                      <div className="link-info-url small line-clamp">
                      <a target="_blank"></a>
                      </div>
                      <div className="link-info-date small">created on January 10, 2019</div>
                      </div>
                      <div className="link-pixel-sets mt1"><span className="small">Tracking Pixels:</span>&nbsp;
                      </div>
                    </div>
                  </div>
                  </div>
                  <tr onClick={()=>{this.state.display3=='none'?this.setState({display3:'block'}):this.setState({display3:'none'})}}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="whatsapp.jpeg"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Whatsapp</span>
                        </div>
                      </div>
                    </th>
                    <td>
                      <span className="badge badge-dot mr-4">
                        <i className="bg-danger"></i> delayed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{width: '72%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                    <button className="btn btn-primary" type="button">Edit</button>
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <div style={{height:'200px', display:this.state.display3}}>
                  <div className="link-item__body"><div className="link-body-info">
                    <div className="hidden-wrap">
                      <div className="link-info-url small line-clamp">
                      <a target="_blank"></a>
                      </div>
                      <div className="link-info-date small">created on January 10, 2019</div>
                      </div>
                      <div className="link-pixel-sets mt1"><span className="small">Tracking Pixels:</span>&nbsp;
                      </div>
                    </div>
                  </div>
                  </div>
                  <tr onClick={()=>{this.state.display4=='none'?this.setState({display4:'block'}):this.setState({display4:'none'})}}>
                    <th scope="row">
                      <div className="media align-items-center">
                        <a href="#" className="avatar rounded-circle mr-3">
                          <img alt="Image placeholder" src="telegram.png"/>
                        </a>
                        <div className="media-body">
                          <span className="mb-0 text-sm">Telegram</span>
                        </div>
                      </div>
                    </th>

                    <td>
                      <span className="badge badge-dot">
                        <i className="bg-info"></i> on schedule
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <button className="btn btn-primary" type="button">Edit</button>
                      <div className="dropdown">
                        <a className="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <div style={{height:'200px', display:this.state.display4}}>
                  <div className="link-item__body"><div className="link-body-info">
                    <div className="hidden-wrap">
                      <div className="link-info-url small line-clamp">
                      <a target="_blank"></a>
                      </div>
                      <div className="link-info-date small">created on January 10, 2019</div>
                      </div>
                      <div className="link-pixel-sets mt1"><span className="small">Tracking Pixels:</span>&nbsp;
                      </div>
                    </div>
                  </div>
                  </div>
                </tbody>
              </table>
            </div>
            <div className="card-footer py-4">
              <nav aria-label="...">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">
                      <i className="fas fa-angle-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
