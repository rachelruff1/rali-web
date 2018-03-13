import React, { Component } from "react";
import EventCard from "../EventCard/EventCard";
import { getMyNetworkEvents } from "../../../../ducks/reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../../ViewNetwork.css';

class MyEvents extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getMyNetworkEvents(this.props.networkid);
  }
  render() {
    const {myNetworkEvents} = this.props;
    const myJoinedEventsMap =
      myNetworkEvents.length > 0 &&
      myNetworkEvents.map((c, i) => 
        <EventCard key={i} events={c} />
      );

    return (
      <div className="my-events-map container">
        <h3>My Joined Events</h3>
        <div>{myJoinedEventsMap}</div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const { myNetworkEvents } = state;
  return {
    myNetworkEvents
  };
};

export default withRouter(
  connect(mapStateToProps, { getMyNetworkEvents })(MyEvents)
);
