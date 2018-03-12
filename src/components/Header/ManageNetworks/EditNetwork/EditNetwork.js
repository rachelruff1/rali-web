import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { editNetwork } from "../../../../ducks/reducer";

class EditNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      network: this.props.network,
      verifyNetworkPassword: ""
    };
    this.updateNetworkState = this.updateNetworkState.bind(this);
    this.saveNetwork = this.saveNetwork.bind(this);
  }
  // componentDidMount() {
  //   this.props.getNetwork(this.props.match.params.id);
  // }

  updateNetworkState(e) {
    const field = e.target.name;
    const network = this.state.network;
    network[field] = e.target.value;
    return this.setState({ network: network });
  }

  updateNewPassword(e) {
    return this.setState({
      verifyNetworkPassword: this.state.verifyNetworkPassword
    });
  }

  saveNetwork(e) {
    e.preventDefault();
    this.props.editNetwork(this.state.network);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.network.id !== nextProps.network.id) {
      this.setState({ network: nextProps.network });
    }
  }

  render() {
    console.log(this.props);
    const check = () => {
      this.state.verifyNetworkPassword === this.props.network.password
        ? this.state.saveNetwork(this.state.network)
        : swal(`Passwords don't match`);
    };

    console.log("this on edit", this);
    return (
      <div>
        <form>
          <input
            name="networkname"
            label="networkname"
            value={this.props.network.name}
            onChange={this.props.updateNetworkState}
          />

          <input
            name="networkpassword"
            label="networkpassword"
            value={this.props.password}
            onChange={this.props.updateNetworkState}
          />

          <input
            name="newpassword"
            placeholder="New Password"
            label="newpassword"
            // value={this.props.password}
            onChange={this.props.updateNewPassword}
          />
          <input
            name="verifyNewpassword"
            placeholder="Confirm New Password"
            label="verifynewpassword"
            onChange={this.state.updateVerifyNewPassword}
          />

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? "Saving..." : "Save"}
            className="btn btn-primary"
            onClick={check}
          />
        </form>
        <Link to="/manage-networks">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(
  connect(mapStateToProps, { editNetwork })(EditNetwork)
);
