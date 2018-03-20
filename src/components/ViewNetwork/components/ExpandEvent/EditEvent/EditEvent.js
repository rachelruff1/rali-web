import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class EditEvent extends Component {
  render() {
    console.log("this on edit", this);
    const style = {
      margin: 12
    };
    return (
      <div>
        <form>
          <TextField
            defaultValue={this.props.name}
            floatingLabelText="Event name"
            onChange={this.props.nameUpdate}
          />
          <br />
          <label>
            <h3>Date</h3>
          </label>

          <input
            name="date"
            label="Date"
            type="date"
            value={this.props.date}
            onChange={this.props.dateUpdate}
          />
          <br />
          <label>
            <h3>Time</h3>
          </label>
          <input
            name="time"
            type="time"
            label="Time"
            value={this.props.time}
            onChange={this.props.timeUpdate}
          />
          <br />

          <TextField
            defaultValue={this.props.location}
            floatingLabelText="Event location"
            onChange={this.props.locationUpdate}
          />
          <br />

          <TextField
            defaultValue={this.props.description}
            floatingLabelText="Event description"
            onChange={this.props.descriptionUpdate}
          />
          <br />

          <RaisedButton label="Save" style={style}
            onClick={this.props.onSave}
            // onClick={this.props.toggle}
          />
        </form>
        <RaisedButton label="Back" style={style}onClick={this.props.toggle}/>
      </div>
    );
  }
}

export default EditEvent;
