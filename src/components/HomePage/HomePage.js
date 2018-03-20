import React, { Component } from "react";
import logo from "../Header/logo.png";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    console.log(this)
    return (
      <div className="hp-container">
        <div className="hp-page-container">
          <div className="hp-content-container">
            <img src={logo} alt='logo'/>
            <p>Where connection happens.</p>
            <a href="/login">
              <button>Login/Register</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
