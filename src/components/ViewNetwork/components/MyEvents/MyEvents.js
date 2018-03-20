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
    // console.log(this);
    const {myNetworkEvents} = this.props;
    const myJoinedEventsMap =
      myNetworkEvents.length > 0 &&
      myNetworkEvents.map((c, i) => 
        <EventCard key={i} events={c} status={this.state.status}/>
      );

    return (
      <div className="my-events-map-container">
      <h3>My Events</h3>
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
