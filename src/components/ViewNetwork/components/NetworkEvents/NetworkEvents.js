import React, { Component } from "react";
import EventCard from '../EventCard/EventCard';

export default class NetworkEvents extends Component {
  componentDidMount() {
    this.props.getNetworkEvents();
  }
  render() {
    const myNetworkEventsMap =
      this.props.myNetworkEvents.length > 0 &&
      this.props.myNetworkEvents.map((c, i) => <EventCard key={i} event={c} />);
    return (
      <div className="network-events container">
        <h3>Network Events</h3>
        <div>{myNetworkEventsMap}</div>
      </div>
    );
  }
}
