import React from "react";
import logo from "../logo.png";
import "./AppHeader.css";

export default function AppHeader() {
  return (
    <header className="ahp-header">
      <img className="logo" src={logo} alt="logo" />

      <div className="navbar">
        <div className="dropdown">
          <button>
            <div className='hamburger-menu'/>
            <div className='hamburger-menu'/>
            <div className='hamburger-menu'/>
          </button>
          <div className="dropdown-content">
            <a href="/profile">Edit Profile</a>
            <a href="/manage-networks">Manage Networks</a>
          </div>
        </div>
      </div>
    </header>
  );
}
