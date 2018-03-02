import React, { Component } from "react";
import EventCard from '../EventCard/EventCard';

export default class MyEvents extends Component {
  componentDidMount() {
    this.props.getMyEvents();
  }
  render() {
    const myJoinedEventsMap =
      this.props.myJoinedEvents.length > 0 &&
      this.props.myJoinedEvents.map((c, i) => (
        <EventCard key={i} event={c} />
      ));
    return (
      <div className="My-Events container">
        <h3>My Joined Events</h3>
        <div>{myJoinedEventsMap}</div>
      
      </div>
    );
  }
}
