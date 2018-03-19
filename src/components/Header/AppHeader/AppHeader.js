import React from "react";
import logo from "../logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import globe from "./globe.png";
import home from "./home.png";
import profile from "./profile.png";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="navbar-options">
        <li>
            <Link to="/network-selector" style={{ textDecoration: 'none' }}>
              <img className="header-icon" src={home} alt="home" />
              <p>Home</p>
            </Link>
          </li>
          
          <li>
            <Link to="/manage-networks" style={{ textDecoration: 'none' }}>
              <img className="header-icon" src={globe} alt="globe" />
              <p>Manage Networks</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <img className="header-icon" src={profile} alt="profile" />
              <p>Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

/* <header className="ahp-header">
<div className="navbar">
  <img className="logo" src={logo} alt="logo" />
  <ul className="navbar-content">
      <Link to="/network-selector">
        <li>Home</li>
      </Link>
      <Link to="/profile">
        <li>Edit Profile</li>
      </Link>
      <Link to="/manage-networks">
        {" "}
        <li>Manage Networks</li>
      </Link>
    </ul>
  
</div>
</header> */

/* <header className="ahp-header">
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <div className="dropdown">
          <button>
            <div className="hamburger-menu" />
            <div className="hamburger-menu" />
            <div className="hamburger-menu" />
          </button>
          <div className="dropdown-content">
            <Link to="/network-selector">
              <p>Home</p>
            </Link>
            <Link to="/profile">
              <p>Edit Profile</p>
            </Link>
            <Link to="/manage-networks">
              {" "}
              <p>Manage Networks</p>
            </Link>
          </div>
        </div>
      </div>
    </header> */
