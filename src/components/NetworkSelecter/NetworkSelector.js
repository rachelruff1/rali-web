import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getNetworks } from "../../ducks/reducer";
import Header from "../Header/Header";
import NetworkCard from "./components/NetworkCard/NetworkCard";
import AppHeader from '../Header/AppHeader/AppHeader';

class NetworkSelector extends Component {
  componentDidMount() {
    this.props.getNetworks();
    this.props.getUser();
  }
  render() {
      console.log(this.props.user);
    const networksMap =
      this.props.networks.length>0 &&
      this.props.networks.map((c, i) => <NetworkCard key={i} network={c} />);
    return (
      <div>
        <AppHeader />

        <div>
          <h1>
            {this.props.user ? this.props.user.firstname : "Blank"}'s Networks
           
          </h1>
          <p> Click to view Network </p>
          <div className="networks grid">{networksMap}</div>
          <Link to="/create-network">
            <button>+ Create</button>
          </Link>
          <Link to="/search-networks">
            <button>Search</button>
          </Link>
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
