import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getNetworks } from "../../ducks/reducer";
import Header from "../Header/AppHeader/AppHeader";
import "./NetworkSelector.css";
import NetworkCard from "./components/NetworkCard/NetworkCard";

class NetworkSelector extends Component {
  componentDidMount() {
    this.props.getNetworks();
    this.props.getUser();
  }
  render() {
    console.log(this);
    const networksMap =
      this.props.networks.length > 0 &&
      this.props.networks.map((c, i) => <NetworkCard key={i} network={c} />);
    return (
      <div>
        <Header />
        <div className='network-big-container'>
        <div className="network-selector-container">
          {/* <h1>
            {this.props.user ? this.props.user.firstname : "Blank"}'s Networks
           
          </h1> */}
          <h1> Click to open Network </h1>
          <div className="create-search-buttons">
            <Link to="/create-network">
              <button>+ Create</button>
            </Link>
            <Link to="/search-networks">
              <button>Search</button>
            </Link>
          </div>
          <div className="networks-grid">{networksMap}</div>
        </div>
      </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const { user, networks } = state;
  return {
    user,
    networks
  };
};

export default connect(mapStateToProps, { getUser, getNetworks })(
  NetworkSelector
);
