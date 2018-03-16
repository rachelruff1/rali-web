import React, { Component } from "react";
import "./GoogleMaps.css";
import { updateGoogleAddress } from "../../../../../ducks/reducer";
import {connect} from 'react-redux';

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 13,
      maptype: "roadmap",
      place_formatted: "",
      place_id: "",
      place_location: "",
      place_name: ''
    };
  }

  componentDidMount() {
    console.log(window.google.maps.ControlPosition);
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 32.7791,
        lng: -96.8003
      },
      zoom: 13,
      mapTypeId: "roadmap"
    });
    let marker = new window.google.maps.Marker({
      map: map,
      position: { lat: -33.8688, lng: 151.2195 }
    });
    console.log(map);
    // initialize the autocomplete functionality using the #pac-input input box
    let inputNode = document.getElementById("pac-input");
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(inputNode);
    let autoComplete = new window.google.maps.places.Autocomplete(inputNode);

    autoComplete.addListener("place_changed", () => {
      let place = autoComplete.getPlace();
      let location = place.geometry.location;
console.log(place);
      this.setState({
        place_formatted: place.formatted_address,
        place_id: place.place_id,
        place_location: location.toString(),
        place_name: place.name
      });
      this.props.updateGoogleAddress(`${this.state.place_name} ${this.state.place_formatted}`)

      // bring the selected place in view on the map
      map.fitBounds(place.geometry.viewport);
      map.setCenter(location);

      marker.setPlace({
        placeId: place.place_id,
        location: location
      });
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props.googleAddress);
    return (
      <div id="app">
        {/* <h1>Map</h1>
        <p>Place: {this.state.place_formatted}</p>
        <p>Place ID: {this.state.place_id}</p>
        <p>Location: {this.state.place_location}</p> */}
        <div id="pac-container">
          <input
            id="pac-input"
            type="text"
            placeholder="Enter a location"
            // onChange={() => this.props.updateGoogleAddress(this.state.place_formatted)}
          />
        </div>
        <div id="map" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {googleAddress : state.googleAddress}
}
export default connect(mapStateToProps, {
  updateGoogleAddress
})(GoogleMaps);