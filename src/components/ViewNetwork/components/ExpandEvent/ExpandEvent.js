import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvent,
  adminDeleteEvent,
  editEvent
} from "../../../../ducks/reducer";
import { withRouter, Link } from "react-router-dom";
import EditEvent from "./EditEvent/EditEvent";

class ExpandEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      eventDetail: this.props.eventDetail
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateEventDetailState = this.updateEventDetailState.bind(this);
    this.saveEventDetail = this.saveEventDetail.bind(this);
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.evId);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  updateEventDetailState(e) {
    const field = e.target.name;
    const eventDetail = this.state.eventDetail;
    eventDetail[field] = e.target.value;
    return this.setState({ eventDetail: eventDetail });
  }
  saveEventDetail(e) {
    e.preventDefault();
    this.props.editEvent(this.state.eventDetail);
  }
  //this.state.eventDetail.eventid, this.state.eventDetail.name, this.state.eventDetail.date, this.state.eventDetail.time, this.state.eventDetail.location, this.state.eventDetail.description
  componentWillReceiveProps(nextProps) {
    if (this.props.eventDetail.eventid !== nextProps.eventDetail.eventid) {
      this.setState({ eventDetail: nextProps.eventDetail });
    }
  }

  render() {
    const {
      date,
      time,
      location,
      description,
      creatorid,
      userid,
      eventid
    } = this.props.eventDetail;
    console.log("this", this);

    return this.state.isEditing ? (
      <div>
        <h1>Edit Event</h1>
        <EditEvent
          name={this.state.eventDetail.name}
          date={this.state.eventDetail.date}
          time={this.state.eventDetail.time}
          location={this.state.eventDetail.location}
          description={this.state.eventDetail.description}
          onSave={this.saveEventDetail}
          onChange={this.updateEventDetailState}
          toggle={this.toggleEdit}
        />
      </div>
    ) : (
      <div>
        <Link to={`/network/${this.props.match.params.netId}`}>
          <button>Back</button>
        </Link>
        <h1>{this.props.eventDetail.name}</h1>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <div>
          {creatorid === userid ? (
            <div>
              <button onClick={this.toggleEdit}>Edit</button>
              <button onClick={() => adminDeleteEvent(eventid)}>Delete</button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventDetail: state.eventDetail
  };
}

export default withRouter(
  connect(mapStateToProps, { getEvent, adminDeleteEvent, editEvent })(
    ExpandEvent
  )
);
