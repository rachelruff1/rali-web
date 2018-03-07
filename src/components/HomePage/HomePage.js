import React, { Component } from "react";
import Header from "../Header/Header";
import mainPic from "./old-lady-music.jpg";
import "./HomePage.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="hp-container">
        <div className="header-box">
          {/* <Header /> */}
        </div>
        <div className="hp-page-container">
          <div className="hp-img-container">
            <img className="mainPic" src={mainPic} alt="This is a good time." />
          </div>
          <div className="hp-content-container">
            <p className="hp-text">It's time to Ralī.</p>
            <a href="http://localhost:3001/login">
              <button className="hp-login">Login/Register</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
