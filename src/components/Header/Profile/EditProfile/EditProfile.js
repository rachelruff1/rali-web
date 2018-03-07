import React, { Component } from "react";

class EditProfile extends Component {
  render() {
    console.log("this on edit", this);
    return (
      <div>
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

          <input
            name="picture"
            placeholder="Upload Image"
            type='fileupload'
            label="Picture"
            value={this.props.picture}
            onChange={this.props.onChange}
          />
          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? "Saving..." : "Save"}
            className="btn btn-primary"
            onClick={this.props.onSave} />
        </form>
        <button onClick={this.props.toggle}>Back</button>
      </div>
    );
  }
}

export default EditProfile;
