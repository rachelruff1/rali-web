import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  updateOptionJoinNetwork,
  verifyNetwork,
  updateVerifyNetwork
} from "../../../../ducks/reducer";

class SearchCard extends Component {
  render() {
    const {
      updateOptionJoinNetwork,
      verifyNetwork,
      updateVerifyNetwork,
      networkVerifyPassword
    } = this.props;

    return (
      <div className="search-result container">
        {this.props.optionJoinNetwork === false ? (
          <div
            className="clickable-search-result"
            onClick={() => updateOptionJoinNetwork()}
          >
            {this.props.network.name}
          </div>
        ) : (
          <div className="hidden-network-password container">
            <div className="nonclickable-search-result">
              {this.props.network.name}
            </div>
            <input
              type="password"
              placeholder="Enter network password.."
              onChange={e => updateVerifyNetwork(e.target.value)}
            />
            <button
              onClick={
                () =>
                  verifyNetwork(
                    networkVerifyPassword,
                    this.props.network.name
                  ).then(resp => {
                    console.log(resp);
                    // if (resp.action.payload.data) {
                    //   swal("Network Joined!");
                    // } else {
                    //   swal("Incorrect Password");
                    // }
                  })
                // .then(resp => this.props.history.push("/network-selector")).alert('Added to network!')
              }
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    networkVerifyPassword: state.networkVerifyPassword,
    optionJoinNetwork: state.optionJoinNetwork
  };
}
export default connect(mapStateToProps, {
  updateOptionJoinNetwork,
  updateVerifyNetwork,
  verifyNetwork
})(SearchCard);
