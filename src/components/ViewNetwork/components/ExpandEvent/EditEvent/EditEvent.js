import React, { Component } from "react";

class EditEvent extends Component {
  render() {
    console.log("this on edit", this);
    return (
      <div>
        <form>
          <input
            name="name"
            placeholder="Name"
            label="name"
            value={this.props.name}
            onChange={this.props.onChange}
          />

          <input
            name="date"
            placeholder="Date"
            label="Date"
            type='date'
            value={this.props.date}
            onChange={this.props.onChange}
          />

          <input
            name="time"
            placeholder="Time"
            type='time'
            label="Time"
            value={this.props.time}
            onChange={this.props.onChange}
          />

          <input
            name="location"
            placeholder="Location"
            label="Location"
            value={this.props.location}
            onChange={this.props.onChange}
          />

          <input
            name="description"
            placeholder="Description"
            label="Description"
            value={this.props.description}
            onChange={this.props.onChange}
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
