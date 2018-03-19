import React, { Component } from "react";
import { connect } from "react-redux";
import EventCard from "../EventCard/EventCard";
import { getAllNetworkEvents } from "../../../../ducks/reducer";
import { withRouter } from "react-router-dom";
import '../../ViewNetwork.css';

class NetworkEvents extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      status: 'all-networks'
    })
  }
  componentDidMount() {
    this.props.getAllNetworkEvents(this.props.networkid);
  }
  render() {
    const { allNetworkEvents } = this.props;
    const allNetworkEventsMap =
      allNetworkEvents.length > 0 &&
      allNetworkEvents.map((c, i) => <EventCard key={i} events={c} status={this.state.status}/>);
    return (
      <div className="network-events-map-container">
        <h3>Network Events</h3>
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
