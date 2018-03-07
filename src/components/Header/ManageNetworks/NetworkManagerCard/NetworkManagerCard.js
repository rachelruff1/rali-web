import React from "react";
import { Link } from "react-router-dom";

const NetworkManagerCard = props => (
  <div className="network-container">
    <Link to={`/network/${props.network.networkid}`}>
      <button>{props.network.name}</button>
    </Link>
  </div>
);

export default NetworkManagerCard;
