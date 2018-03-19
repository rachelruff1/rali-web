import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {
  editNetworkName,
  editNetworkPassword,
  getNetwork
} from "../../../../ducks/reducer";
import AppHeader from "../../AppHeader/AppHeader";
import "../ManageNetworks.css";

class EditNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      networkName: "",
      editName: false
    };
    // this.updateNetworkState = this.updateNetworkState.bind(this);
    this.saveNetworkName = this.saveNetworkName.bind(this);
    this.saveNetworkPassword = this.saveNetworkPassword.bind(this);
    this.updateCurrentPassword = this.updateCurrentPassword.bind(this);
    this.updateNewPassword = this.updateNewPassword.bind(this);
    this.updateConfirmNewPassword = this.updateConfirmNewPassword.bind(this);
    this.updateNetworkName = this.updateNetworkName.bind(this);
  }

  componentDidMount() {
    this.props.getNetwork(this.props.match.params.id).then(resp =>
      this.setState({
        networkName: this.props.activeNetwork.name
      })
    );
  }

  updateCurrentPassword(e) {
    return this.setState({
      currentPassword: e
    });
  }
  updateNewPassword(e) {
    return this.setState({
      newPassword: e
    });
  }

  updateConfirmNewPassword(e) {
    return this.setState({
      confirmNewPassword: e
    });
  }

  updateNetworkName(e) {
    return this.setState({ networkName: e, editName: true });
  }

  saveNetworkName(e) {
    this.props.editNetworkName(
      this.props.activeNetwork.networkid,
      this.state.networkName
    );
    console.log("clicked");
    swal("Name updated!");
  }

  saveNetworkPassword(e) {
    if (this.state.currentPassword !== this.props.activeNetwork.password) {
      swal(`Uh oh. Looks like your password isn't correct.`);
    } else if (this.state.newPassword !== this.state.confirmNewPassword) {
      swal(`Hmm. Looks like your passwords don't match.`);
    } else if (
      this.state.currentPassword === this.props.activeNetwork.password &&
      this.state.newPassword === this.state.confirmNewPassword
    ) {
      this.props.editNetworkPassword(
        this.props.activeNetwork.networkid,
        this.state.confirmNewPassword
      ) && swal("Password updated!");
    } else swal(`Sorry, something isn't working right now.`);
  }

  render() {
    const style = {
      margin: 12
    };

    return (
      <div className="edit-network-container">
        <AppHeader />
        <h1>Edit Profile</h1>
        <div className="edit-network-content">
          <h3>Change Network Name</h3>
          <div className="edit-network-box">
            <TextField
              floatingLabelText="Network name"
              value={
                this.state.editName
                  ? this.state.networkName
                  : this.props.activeNetwork.name
              }
              onChange={e => this.updateNetworkName(e.target.value)}
            />
          </div>
          <br />

          <RaisedButton
            label="Save"
            style={style}
            onClick={() => {
              console.log("clicked");
              this.saveNetworkName(this.state.networkName);
            }}
          />
          <h3>Change Password</h3>
          <div className="edit-network-box">
            <TextField
              floatingLabelText="Old password"
              onChange={e => this.updateCurrentPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="edit-network-box">
            <TextField
              floatingLabelText="New password"
              onChange={e => this.updateNewPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="edit-network-box">
            <TextField
              floatingLabelText="Confirm new password"
              onChange={e => this.updateConfirmNewPassword(e.target.value)}
              type="password"
            />
          </div>
          <br />

          <RaisedButton
            label="Save"
            style={style}
            onClick={
              () => this.saveNetworkPassword(this.state.confirmNewPassword)
              // .then(this.props.history.push("/manage-networks"))
            }
          />

          <Link to="/manage-networks">
            <RaisedButton label="Back" style={style} />
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeNetwork: state.activeNetwork
  };
}

export default withRouter(
  connect(mapStateToProps, {
    editNetworkName,
    editNetworkPassword,
    getNetwork
  })(EditNetwork)
);
