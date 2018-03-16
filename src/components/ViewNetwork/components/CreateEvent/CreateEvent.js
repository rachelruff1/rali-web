import React, { Component } from "react";
import {
  createEvent,
  updateEventName,
  updateEventDate,
  updateEventTime,
  updateEventLocation,
  updateEventDescription
} from "../../../../ducks/reducer";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import swal from "sweetalert";
import Header from "../../../Header/AppHeader/AppHeader";
import GoogleMaps from "../ExpandEvent/GoogleMaps/GoogleMaps";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: true,
      map: false,
      address: ""
    };
    this.displayCustom = this.displayCustom.bind(this);
    this.displayMap = this.displayMap.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }

  displayCustom() {
    this.setState({
      custom: true,
      map: false
    });
  }

  displayMap() {
    this.setState({
      custom: false,
      map: true
    });
  }

  updateAddress() {
    this.props.eventLocation === ""
      ? this.setState({ address: this.props.googleAddress })
      : this.setState({ address: this.props.eventLocation });
  }

  render() {
    console.log(this);

    const {
      googleAddress,
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription,
      createEvent,
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateEventLocation,
      updateEventDescription
    } = this.props;
    const networkid = this.props.match.params.id;

    return (
      <div>
        <Header />
        <div className="event-name">
          <p>Location</p>
          <input
            // placeholder="Event Name"
            type="text"
            onChange={e => updateEventName(e.target.value)}
          />
        </div>
        <div className="event-date">
          <p>Date</p>
          <input
            // placeholder="Date"
            type="date"
            onChange={e => updateEventDate(e.target.value)}
          />
        </div>
        <div className="event-time">
          <p>Time</p>
          <input
            // placeholder="Time"
            type="time"
            onChange={e => updateEventTime(e.target.value)}
          />
        </div>

        <div className="location">
          <p>Location</p>
          <label className="container">
            Enter custom location:
            <input
              type="radio"
              defaultChecked="checked"
              name="radio"
              onClick={this.displayCustom}
            />
            <span className="checkmark" />
          </label>
          {this.state.custom === true ? (
            <input
              placeholder="Location"
              type="text"
              onChange={e => updateEventLocation(e.target.value)}
            />
          ) : null}

          <label className="container">
            Find on map
            <input type="radio" name="radio" onClick={this.displayMap} />
            <span className="checkmark" />
          </label>
          {this.state.map === true ? <GoogleMaps /> : null}
        </div>
        <div className="event-description">
          <p>Description</p>
          <input
            placeholder="Description"
            type="text"
            onChange={e => updateEventDescription(e.target.value)}
          />
        </div>
        <button
          onClick={
            () =>
              this.updateAddress()
                .then(
                  createEvent(
                    networkid,
                    eventName,
                    eventDate,
                    eventTime,
                    this.state.address,
                    eventDescription
                  )
                )
                .then(swal("Event created!"))
                .then(response =>
                  this.props.history.push(`/network/${networkid}`)
                )
            // .then(response => this.props.history.push(`/network/${networkid}`))
          }
        >
          Create New Event
        </button>
        <Link to={`/network/${networkid}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const {
    eventName,
    eventDate,
    eventTime,
    eventLocation,
    eventDescription,
    googleAddress
  } = state;
  return {
    eventName,
    eventDate,
    eventTime,
    eventLocation,
    eventDescription,
    googleAddress
  };
};

export default withRouter(
  connect(mapStateToProps, {
    createEvent,
    updateEventName,
    updateEventDate,
    updateEventTime,
    updateEventLocation,
    updateEventDescription
  })(NewEvent)
);
