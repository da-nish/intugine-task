// import logo from './logo.svg';
import './menu.css';
import React from 'react';

import logo_img from './img/logo.svg'
import profile_img from './img/profile.svg'

function App() {
  
  return (
    <React.Fragment>
    <div className="ui stackable menu">
      <div className="item"><img src={logo_img} alt="logo" style={{marginLeft:'6em'}}/>Intugine</div>
    
      <div className="right menu">
        <a className="item" href="/#home">Home</a>
        <a className="item" href="/#brands">Brands</a>
        <a className="item" href="/#transporters">Transporters</a>
        <div className="item">
          <div className="ui simple dropdown item">
            <img src={profile_img} height='24px' alt="logo" /><i className="chevron down icon"></i>            
            <div className="menu">
              <div className="item">
                <a href="/#profile">Profile</a>
              </div>
            </div>
          </div>
          </div>

      </div>
    </div>
    </React.Fragment>
  );


}

export default App;
