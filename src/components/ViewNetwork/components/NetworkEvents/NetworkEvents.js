import React, { Component } from "react";
import {connect} from 'react-redux';
import EventCard from '../EventCard/EventCard';
import {getAllNetworkEvents} from '../../../../ducks/reducer';

class NetworkEvents extends Component {
  componentDidMount() {
    this.props.getAllNetworkEvents(this.props.match.params.id);
  }
  render() {
    // const myNetworkEventsMap =
    //   this.props.myNetworkEvents.length > 0 &&
    //   this.props.myNetworkEvents.map((c, i) => <EventCard key={i} event={c} />);
    return (
      <div className="network-events container">
        <h3>Network Events</h3>
        {/* <div>{myNetworkEventsMap}</div> */}
      </div>
    );
  }
}

let mapStateToProps = state => state;

export default connect(mapStateToProps, { getAllNetworkEvents })(
  NetworkEvents
);
