import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateNetworkName,
  updateNetworkPassword,
  createNetwork
} from "../../../../ducks/reducer";

class CreateNetwork extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="network-creator-container">
        <input
          type="text"
          placeholder="Enter network name.."
          onChange={e => this.props.updateNetworkName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter network password.."
          onChange={e => this.props.updateNetworkPassword(e.target.value)}
        />
        <button
          onClick={() =>
            this.props
              .createNetwork(this.props.networkName, this.props.networkPassword)
              .then(response => this.props.history.push("/network-selector"))
          }
        >
          Submit
        </button>
        <Link to="/network-selector">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    networkName: state.networkName,
    networkPassword: state.networkPassword
  };
}
export default connect(mapStateToProps, {
  updateNetworkName,
  updateNetworkPassword,
  createNetwork
})(CreateNetwork);
