import React, { Component } from "react";
import EventCard from "../EventCard/EventCard";
import { getMyNetworkEvents } from "../../../../ducks/reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../../ViewNetwork.css';

class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      status: 'joined'
    })
  }
  componentDidMount() {
    this.props.getMyNetworkEvents(this.props.networkid);
  }
  render() {
    const {myNetworkEvents} = this.props;
    console.log(this.props);
    const myJoinedEventsMap =
      myNetworkEvents.length > 0 &&
      myNetworkEvents.map((c, i) => 
        <EventCard key={i} events={c} status={this.state.status}/>
      );

    return myNetworkEvents.length !== 0 ? (
      <div className="my-events-map-container">
      <h3>My Events</h3>
        <div>{myJoinedEventsMap}</div>
      </div>
    ) : (<div><h3>My Events</h3><br /><p>No joined events .. go join or make one!</p></div>)
  };
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
