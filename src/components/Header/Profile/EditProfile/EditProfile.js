import React, { Component } from "react";
import Header from "../../AppHeader/AppHeader";
import "../Profile.css";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';

class EditProfile extends Component {
  render() {
    const style = {
      margin: 12,
    };
    // console.log("this on edit", this);
    return (
      <div className="edit-profile">
        {/* <Header/> */}
        <div className="edit-profile-input">
          <form>
            <TextField
              floatingLabelText="First name"
              value={this.props.firstname}
              onChange={this.props.onChange}
            />
            <br />
            <TextField
              floatingLabelText="Last name"
              value={this.props.lastname}
              onChange={this.props.onChange}
            />
            <br />
            <TextField
              floatingLabelText="Email"
              value={this.props.email}
              onChange={this.props.onChange}
            />
            <br />
            <TextField
              name="cell"
              floatingLabelText="Cell"
              label="Cell"
              value={this.props.cell}
              onChange={this.props.onChange}
            />
            <br />
            <br />
            <br />
            {/* <input
            name="picture"
            placeholder="Upload Image"
            type='fileupload'
            label="Picture"
            value={this.props.picture}
            onChange={this.props.onChange}
          /> */}
          </form>
        </div>
        <RaisedButton label="Save" style={style}
          // type="submit"
          // disabled={this.props.saving}
          // value={this.props.saving ? "Saving..." : "Save"}
          // className="btn btn-primary"
          onClick={this.props.onSave}
        />
        {/* <Link to="/network-selector"> */}
        <RaisedButton label="Back" style={style}
          onClick={() => this.props.toggle.then(window.location.reload())}
       />
        {/* </Link> */}
      </div>
    );
  }
}

export default EditProfile;
