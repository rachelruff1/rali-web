import React from "react";
import logo from "../logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <Link to="/profile">
          <p>Profile</p>
        </Link>
        <Link to="/manage-networks">
          {" "}
          <p>Manage Networks</p>
        </Link>
        <Link to="/network-selector">
          <p>Home</p>
        </Link>
      </div>
    </header>
  );
}

{
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
}

{
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
}
