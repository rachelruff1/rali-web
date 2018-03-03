import React, { Component } from "react";
import EventCard from '../EventCard/EventCard';
import {getMyNetworkEvents} from '../../../../ducks/reducer';
import {connect} from 'react-redux';

class MyEvents extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getMyNetworkEvents(this.props.match.params.id);
  }
  render() {
    // const myJoinedEventsMap =
    //   this.props.myJoinedEvents.length > 0 &&
    //   this.props.myJoinedEvents.map((c, i) => (
    //     <EventCard key={i} event={c} />
    //   ));
    return (
      <div className="My-Events container">
        <h3>My Joined Events</h3>
        {/* <div>{myJoinedEventsMap}</div> */}
      
      </div>
    );
  }
}

let mapStateToProps = state => state;

export default connect(mapStateToProps, { getMyNetworkEvents })(
  MyEvents
);