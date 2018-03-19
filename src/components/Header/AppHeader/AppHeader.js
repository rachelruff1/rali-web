import React from "react";
import AppDrawer from "./Drawer.js";
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
        <Link to="/network-selector" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="logo" />{" "}
        </Link>
        <div className="responsive-nav">
          <AppDrawer />
        </div>
        <div className="dropdown">
          <ul className="navbar-options">
            <li className="app-home">
              <Link to="/network-selector" style={{ textDecoration: "none" }}>
                {/* <img className="header-icon" src={home} alt="home" /> */}
                <p>Home</p>
              </Link>
            </li>

            <li className="app-networks">
              <Link to="/manage-networks" style={{ textDecoration: "none" }}>
                {/* <img className="header-icon" src={globe} alt="globe" /> */}
                <p>Manage Networks</p>
              </Link>
            </li>
            <li className="app-profile">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                {/* <img className="header-icon" src={profile} alt="profile" /> */}
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
