import React, { Component } from "react";

class UserContact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          Host: {this.props.first} {this.props.last}
        </div>
        <div>Email: {this.props.email}</div>
        <div>Cell: {this.props.cell}</div>
      </div>
    );
  }
}

export default UserContact;
