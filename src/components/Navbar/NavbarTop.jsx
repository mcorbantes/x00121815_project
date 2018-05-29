//All our imports that we need
import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';

export class NavbarTop extends Component {
  render() {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="">Client Analytics</a>
              <img src={logo} alt="logo" height="50" width="60"/>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavbarTop;
