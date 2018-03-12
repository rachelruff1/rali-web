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

class NewEvent extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }
  render() {
    const {
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
        <input
          placeholder="Event Name"
          type="text"
          onChange={e => updateEventName(e.target.value)}
        />
        <input
          placeholder="Date"
          type="date"
          onChange={e => updateEventDate(e.target.value)}
        />
        <input
          placeholder="Time"
          type="time"
          onChange={e => updateEventTime(e.target.value)}
        />
        <input
          placeholder="Location"
          type="text"
          onChange={e => updateEventLocation(e.target.value)}
        />
        <input
          placeholder="Description"
          type="text"
          onChange={e => updateEventDescription(e.target.value)}
        />
        <button
          onClick={() =>
            createEvent(
              networkid,
              eventName,
              eventDate,
              eventTime,
              eventLocation,
              eventDescription
            )
            .then(response => this.props.history.push(`/network/${networkid}`))
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
    eventDescription
  } = state;
  return {
    eventName,
    eventDate,
    eventTime,
    eventLocation,
    eventDescription
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
