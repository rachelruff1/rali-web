import React from "react";
import { Link } from "react-router-dom";

const EventCard = props => (
  <div className="event-card container">
    <Link to={`/event/${props.events.eventid}`}>
      <button>{props.events.name}</button>
    </Link>
  </div>
);

export default EventCard;
