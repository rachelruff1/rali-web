import React from "react";
import "./NetworkCard.css";
import { Link } from "react-router-dom";

const NetworkCard = props => (
  <div className="network-container">
    <Link to='/network-selector'>
      <button>{props.network.name}</button>
    </Link>
  </div>
);

export default NetworkCard;
