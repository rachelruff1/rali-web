import React, { Component } from "react";
import "./GoogleMaps.css";

class GoogleMaps extends Component {
  componentDidMount() {
      console.log(window.google);
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { 
          
        lat: 32.7791, lng: -96.8003 },
      zoom: 13,
      mapTypeId: "roadmap"
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Map</h1>
        <div id="map" />
      </div>
    );
  }
}

export default GoogleMaps;
