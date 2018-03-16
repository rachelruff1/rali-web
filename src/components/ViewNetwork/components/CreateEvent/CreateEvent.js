import React, { Component } from "react";
import { createEvent } from "../../../../ducks/reducer";
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
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventDescription: ""
    };
    this.displayCustom = this.displayCustom.bind(this);
    this.displayMap = this.displayMap.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateEventName = this.updateEventName.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateEventTime = this.updateEventTime.bind(this);
    this.updateEventLocation = this.updateEventLocation.bind(this);
    this.updateEventDescription = this.updateEventDescription.bind(this);
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

  updateEventName(e) {
    return this.setState({
      eventName: e
    });
  }
  updateEventDate(e) {
    return this.setState({
      eventDate: e
    });
  }
  updateEventTime(e) {
    return this.setState({
      eventTime: e
    });
  }
  updateEventLocation(e) {
    return this.setState({
      eventLocation: e
    });
  }
  updateEventDescription(e) {
    return this.setState({
      eventDescription: e
    });
  }

  render() {
    console.log(this);

    const { googleAddress, createEvent } = this.props;

    const {
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription
    } = this.state;
    const {
      displayCustom,
      displayMap,
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateEventLocation,
      updateEventDescription
    } = this;

    const networkid = this.props.match.params.id;

    return (
      <div>
        <Header />
        <div className="event-name">
          <p>Event Name</p>
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
              onClick={displayCustom}
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
            <input type="radio" name="radio" onClick={displayMap} />
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
              createEvent(
                networkid,
                eventName,
                eventDate,
                eventTime,
                eventLocation,
                googleAddress,
                eventDescription
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
  const { googleAddress } = state;
  return {
    googleAddress
  };
};

export default withRouter(
  connect(mapStateToProps, {
    createEvent
  })(NewEvent)
);
