import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getNetworks } from "../../ducks/reducer";
import Header from "../Header/Header";
import NetworkCard from "./components/NetworkCard/NetworkCard";

class NetworkSelector extends Component {
  componentDidMount() {
    this.props.getNetworks();
    this.props.getUser();
  }
  render() {
      console.log(this.props.networks);
    const networksMap =
      this.props.networks.length>0 &&
      this.props.networks.map((c, i) => <NetworkCard key={i} network={c} />);
    return (
      <div>
        <Header />

        <div>
          <h1>
            {this.props.user ? this.props.user.firstname : "Blank"}'s Networks
           
          </h1>
          <div className="networks grid">{networksMap}</div>
          <Link to="/create-network">
            <button>+ Create</button>
          </Link>
          <button>Search</button>
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
