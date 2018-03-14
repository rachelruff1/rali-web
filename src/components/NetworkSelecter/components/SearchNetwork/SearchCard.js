import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import "./SearchNetwork.css";
import { joinNetwork } from "../../../../ducks/reducer";

class SearchCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: ""
    };
    this.updateConfirmPassword = this.updateConfirmPassword.bind(this);
    this.verifyPasswordMatch = this.verifyPasswordMatch.bind(this);
  }

  updateConfirmPassword(e) {
    this.setState({
      confirmPassword: e
    });
  }

  verifyPasswordMatch() {
    if (this.state.confirmPassword !== this.props.network.password) {
      swal(`Oops. Looks like that's not the right password`);
    } else joinNetwork(this.props.network.networkid) && swal("Network joined!");
  }
  render() {
    console.log(this);

    return (
      <div className="search-result-container">
        <div>{this.props.network.name}</div>
        <input
          type="password"
          placeholder="Enter network password.."
          onChange={e => this.updateConfirmPassword(e.target.value)}
        />
        <button onClick={() => this.verifyPasswordMatch()}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, {
  joinNetwork
})(SearchCard);

//verifyNetwork === false ? swal(`Oops. Looks like that's not the right password`) :

//(() => {console.log(joinedNetwork);joinedNetwork === false ? swal(`Oops. Looks like that's not the right password`) :swal('Network joined!')})
