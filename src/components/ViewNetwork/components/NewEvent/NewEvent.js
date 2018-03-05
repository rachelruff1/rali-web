import react, { Component } from "react";

class NewEvent extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div>
        <input placeholder="Event Name" type='text'/>
        <input placeholder="Date" type="date" />
        <input placeholder="Time" type="time" />
        <input placeholder="Location" type='text'/>
        <input placeholder="Description" type='text'/>
      </div>
    );
  }
}
