import React from "react";
import logo from "../logo.png";
import "./AppHeader.css";

export default function AppHeader() {
  return (
    <header className="ahp-header">
      

      <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
        <div className="dropdown">
          <button>
            <div className='hamburger-menu'/>
            <div className='hamburger-menu'/>
            <div className='hamburger-menu'/>
          </button>
          <div className="dropdown-content">
          <a href="/network-selector">Home</a>
            <a href="/profile">Edit Profile</a>
            <a href="/manage-networks">Manage Networks</a>
          </div>
        </div>
      </div>
    </header>
  );
}
