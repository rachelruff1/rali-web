import React from "react";
import AppDrawer from "./Drawer.js";
import logo from "../logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

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
                <p>Home</p>
              </Link>
            </li>

            <li className="app-networks">
              <Link to="/manage-networks" style={{ textDecoration: "none" }}>
                <p>Manage Networks</p>
              </Link>
            </li>
            <li className="app-profile">
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
