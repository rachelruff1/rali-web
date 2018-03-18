import React, { Component } from "react";

class EditEvent extends Component {
  render() {
    console.log("this on edit", this);
    return (
      <div>
      
        <form>
          <input
            name="name"
            label="name"
            value={this.props.name}
            onChange={this.props.nameUpdate}
          />

          <input
            name="date"
            label="Date"
            type='date'
            value={this.props.date}
            onChange={this.props.dateUpdate}
          />

          <input
            name="time"
            type='time'
            label="Time"
            value={this.props.time}
            onChange={this.props.timeUpdate}
          />

          <input
            name="location"
            placeholder="Location"
            label="Location"
            value={this.props.location}
            onChange={this.props.locationUpdate}
          />

          <input
            name="description"
            placeholder="Description"
            label="Description"
            value={this.props.description}
            onChange={this.props.descriptionUpdate}
          />
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
