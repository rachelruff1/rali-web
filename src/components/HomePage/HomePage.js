import React, { Component } from "react";
import Header from "../Header/Header";
import mainPic from "./eating-pic.jpg";
import logo from "../Header/logo.png";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="hp-container">
        <div className="hp-page-container">
          <div className="hp-content-container">
            <img src={logo} />
            <p>Where connection happens.</p>
            <a href="http://localhost:3001/login">
              <button>Login/Register</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
