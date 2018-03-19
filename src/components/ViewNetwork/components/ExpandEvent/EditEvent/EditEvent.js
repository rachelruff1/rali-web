import React, { Component } from "react";
import TextField from "material-ui/TextField";

class EditEvent extends Component {
  render() {
    console.log("this on edit", this);
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

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? "Saving..." : "Save"}
            className="btn btn-primary"
            onClick={this.props.onSave}
            // onClick={this.props.toggle}
          />
        </form>
        <button onClick={this.props.toggle}>Back</button>
      </div>
    );
  }
}

export default EditEvent;
