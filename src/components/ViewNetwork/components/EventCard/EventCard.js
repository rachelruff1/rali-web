import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

class EventCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return(

    <div className="event-card container">
      <Link to={`/network/${this.props.events.networkid}/event/${this.props.events.eventid}`}>
        <button>{this.props.events.name}</button>
      </Link>
    </div>)
  }
}
export default withRouter(EventCard);
