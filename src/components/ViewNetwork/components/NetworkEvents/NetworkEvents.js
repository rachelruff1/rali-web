import React, { Component } from "react";
import { connect } from "react-redux";
import EventCard from "../EventCard/EventCard";
import { getAllNetworkEvents } from "../../../../ducks/reducer";
import { withRouter } from "react-router-dom";

class NetworkEvents extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllNetworkEvents(this.props.networkid);
  }
  render() {
    const { allNetworkEvents } = this.props;
    const allNetworkEventsMap =
      allNetworkEvents.length > 0 &&
      allNetworkEvents.map((c, i) => <EventCard key={i} events={c} />);
    return (
      <div className="network-events container">
        <h3>Network Events</h3>
        <button>Create New Event</button>
        <div>{allNetworkEventsMap}</div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const { allNetworkEvents } = state;
  return {
    allNetworkEvents
  };
};
export default withRouter(
  connect(mapStateToProps, { getAllNetworkEvents })(NetworkEvents)
);
