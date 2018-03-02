import React from "react";
import { Link } from "react-router-dom";

const NetworkCard = props => (
  <div className="event-card container">
    <Link to={`/event/${props.event.eventid}`}>
      <button>{props.event.name}</button>
    </Link>
  </div>
);

export default NetworkCard;
