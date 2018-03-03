import React, { Component } from "react";
import MyEvents from "./components/MyEvents/MyEvents";
import NetworkEvents from "./components/NetworkEvents/NetworkEvents";

export default class ViewNetwork extends Component {
  render() {
    return (
      <div className="view-network container">
        <h1>Network Name</h1>
        <MyEvents />
        <NetworkEvents />
      </div>
    );
  }
}
