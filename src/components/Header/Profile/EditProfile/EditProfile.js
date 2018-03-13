import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../AppHeader/AppHeader";
import "../Profile.css";

class EditProfile extends Component {
  render() {
    console.log("this on edit", this);
    return (
      <div className="edit-profile">
        {/* <Header/> */}
        <div className="edit-profile-input">
          <form>
            <input
              name="firstname"
              placeholder="First name"
              label="firstname"
              value={this.props.firstname}
              onChange={this.props.onChange}
            />

            <input
              name="lastname"
              placeholder="Last name"
              label="LastName"
              value={this.props.lastname}
              onChange={this.props.onChange}
            />

            <input
              name="email"
              placeholder="Email"
              label="Email"
              value={this.props.email}
              onChange={this.props.onChange}
            />

            <input
              name="cell"
              placeholder="Cell"
              label="Cell"
              value={this.props.cell}
              onChange={this.props.onChange}
            />

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
        <button
          // type="submit"
          // disabled={this.props.saving}
          // value={this.props.saving ? "Saving..." : "Save"}
          // className="btn btn-primary"
          onClick={this.props.onSave}
        >
          Save
        </button>
        <Link to="/network-selector">
          <button onClick={this.props.toggle}>Back</button>
        </Link>
      </div>
    );
  }
}

export default EditProfile;
