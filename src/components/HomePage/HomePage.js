import React, { Component } from "react";
import logo from "../Header/logo.png";
import "./HomePage.css";
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    console.log(this)
    return (
      <div className="hp-container">
        <div className="hp-page-container">
          <div className="hp-content-container">
            <img src={logo} alt='logo'/>
            <p>Where connection happens.</p>
            <a href="http://localhost:3001/login">
              <button>Login/Register</button>
              <Link to='/map-test'><button>Map</button></Link>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
