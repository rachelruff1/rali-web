import React from "react";
import { Link } from "react-router-dom";
import '../../NetworkSelector.css';

const NetworkCard = props => (
  
  <div className="network-card-container">
    <Link to={`/network/${props.network.networkid}`} style={{ textDecoration: 'none' }}>
    <div className="network-card">
      <h3>{props.network.name}</h3>
      </div>
    </Link>
  </div>
);

export default NetworkCard;
