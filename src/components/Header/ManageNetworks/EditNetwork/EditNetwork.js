import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { editNetworkName, editNetworkPassword, getNetwork } from "../../../../ducks/reducer";
import AppHeader from "../../AppHeader/AppHeader";

class EditNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword:'',
      confirmNewPassword:'',
      networkName: '',
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
    this.props.getNetwork(this.props.match.params.id);
    this.setState({
      networkName: this.props.activeNetwork
    });
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
      return this.setState({ networkName: e , editName: true});
    }


  saveNetworkName(e) {

    this.props.editNetworkName(this.props.activeNetwork.networkid, this.state.networkName);
    swal('Name updated!');
  }

  saveNetworkPassword(e) {
    if (this.state.currentPassword !== this.props.activeNetwork.password) {
      swal(`Uh oh. Looks like your password isn't correct.`)
    } else if (this.state.newPassword !== this.state.confirmNewPassword) {
      swal(`Hmm. Looks like your passwords don't match.`)
    } else if (this.state.currentPassword === this.props.activeNetwork.password && this.state.newPassword === this.state.confirmNewPassword) {
     this.props.editNetworkPassword(this.props.activeNetwork.networkid, this.state.confirmNewPassword) && swal('Password updated!')
  } else swal(`Sorry, something isn't working right now.`)}


  render() {
    console.log("this on edit", this);
    return (
      <div>
        <AppHeader />

        <h1>Change Network Name</h1>

        <input
          value={(this.state.editName) ? this.state.networkName : this.props.activeNetwork.name }
          onChange={e => this.updateNetworkName(e.target.value)}
        />
        <button onClick={() => this.saveNetworkName(this.state.networkName)}>
          Save
        </button>
        <h1>Change Password</h1>
        <p>Old password</p>
        <input type="password" onChange={e => this.updateCurrentPassword(e.target.value)} />
        <p>New Password</p>
        <input type="password" onChange={e => this.updateNewPassword(e.target.value)} />
        <p>Confirm New Password</p>
        <input type="password" 
         onChange={e => this.updateConfirmNewPassword(e.target.value)} />

        <button
          onClick={() => this.saveNetworkPassword(this.state.confirmNewPassword)
            // .then(this.props.history.push("/manage-networks"))
          }
        >
          Save
        </button>
        <Link to="/manage-networks">
          <button>Back</button>
        </Link>
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
  connect(mapStateToProps, { editNetworkName, editNetworkPassword, getNetwork })(EditNetwork)
);
