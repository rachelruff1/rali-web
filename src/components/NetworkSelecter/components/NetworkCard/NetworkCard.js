import React from "react";
import "./NetworkCard.css";
import { Link } from "react-router-dom";
import './NetworkCard.css';

const NetworkCard = props => (
  
  <div className="network-card-container">
    <Link to={`/network/${props.network.networkid}`} style={{ textDecoration: 'none' }}>
    <div className="network-card">
      <p>{props.network.name}</p>
      </div>
    </Link>
  </div>
);

export default NetworkCard;
