import React, { Component } from "react";
import Header from "../../AppHeader/AppHeader";
import "../Profile.css";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class EditProfile extends Component {
  render() {
    const style = {
      margin: 12
    };
    // console.log("this on edit", this);
    return (
      <div className="edit-profile">
        <div className="edit-profile-input">
          <div className="profile-input-value">
            <TextField
              floatingLabelText="First name"
              value={this.props.firstname}
              onChange={this.props.onChange}
            />
          </div>

          <div className="profile-input-value">
            <TextField
              floatingLabelText="Last name"
              value={this.props.lastname}
              onChange={this.props.onChange}
            />
          </div>

          <div className="profile-input-value">
            <TextField
              floatingLabelText="Email"
              value={this.props.email}
              onChange={this.props.onChange}
            />
          </div>

          <div className="profile-input-value">
            <TextField
              name="cell"
              floatingLabelText="Cell"
              label="Cell"
              value={this.props.cell}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <RaisedButton label="Save" style={style} onClick={this.props.onSave} />
        <RaisedButton
          label="Back"
          style={style}
          onClick={() => this.props.toggle.then(window.location.reload())}
        />
      </div>
    );
  }
}

export default EditProfile;
