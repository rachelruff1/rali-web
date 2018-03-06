import React, { Component } from "react";

class EditEvent extends Component {
  render() {
      console.log('this on edit', this)
    return (
      <div>
        <form>
          <input
            name="name"
            label="name"
            value={this.props.name}
            onChange={this.props.onChange}
          />

          <input
            name="date"
            label="Date"
            value={this.props.date}
            onChange={this.props.onChange}
          />

          <input
            name="time"
            label="Time"
            value={this.props.time}
            onChange={this.props.onChange}
          />

          <input
            name="location"
            label="Location"
            value={this.props.location}
            onChange={this.props.onChange}
          />

          <input
            name="description"
            label="Description"
            value={this.props.description}
            onChange={this.props.onChange}
          />
          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
    );
  }
}

export default EditEvent;
