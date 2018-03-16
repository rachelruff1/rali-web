import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvent,
  adminDeleteEvent,
  editEvent,
  joinEvent,
  leaveEvent
} from "../../../../ducks/reducer";
import { withRouter, Link } from "react-router-dom";
import swal from 'sweetalert';
import EditEvent from "./EditEvent/EditEvent";
import Header from "../../../Header/AppHeader/AppHeader";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import UserContact from './UserContact/UserContact';

class ExpandEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      currentEdit: false,
      eventDetail: this.props.eventDetail,
      contactHost: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateEventDetailState = this.updateEventDetailState.bind(this);
    this.saveEventDetail = this.saveEventDetail.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
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
    return this.setState({ eventDetail: eventDetail, currentEdit: true });
  }
  saveEventDetail(e) {
    e.preventDefault();
    this.props.editEvent(this.state.eventDetail);
  }

  toggleContact(){
    this.setState({ contactHost: !this.state.contactHost})
  }

  render() {
    const {
      date,
      time,
      location,
      glocation,
      description,
      creatorid,
      eventid,
      firstname, 
      lastname,
      email,
      cell
    } = this.props.eventDetail;
    console.log(this);

    return this.state.isEditing ? (
      <div>
        <Header />
        <h1>Edit Event</h1>
        <EditEvent
          name={
            this.state.currentEdit
              ? this.state.eventDetail.name
              : this.props.eventDetail.name
          }
          date={
            this.state.currentEdit
              ? this.state.eventDetail.date
              : this.props.eventDetail.date
          }
          time={
            this.state.currentEdit
              ? this.state.eventDetail.time
              : this.props.eventDetail.time
          }
          location={
            this.state.currentEdit
              ? this.state.eventDetail.location
              : this.props.eventDetail.location
          }
          description={
            this.state.currentEdit
              ? this.state.eventDetail.description
              : this.props.eventDetail.description
          }
          onSave={this.saveEventDetail}
          onChange={this.updateEventDetailState}
          toggle={this.toggleEdit}
        />
      </div>
    ) : (
      <div>
        <Header />
        <Link to={`/network/${this.props.match.params.netId}`}>
          <button>Back</button>
        </Link>
        <h1>{this.props.eventDetail.name}</h1>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location: {location === '' ? (glocation) : location}</p>
        <p>Description: {description}</p>
        <button onClick={this.toggleContact}>Contact host</button>
    
        {(creatorid === this.props.user.id) ? (
        <div>
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={() => this.props.adminDeleteEvent(eventid).then(swal(`Event deleted.`)).then(this.props.history.push(`/network/${this.props.match.params.netId}`))}>
            Delete
          </button>
        </div>
        ) :
        (this.props.match.params.status === "joined") ? (
        <div>
          <div>{(this.state.contactHost === true) ? <UserContact first={firstname} last={lastname} email={email} cell={cell}/> : null }</div>
          <button onClick={() => this.props.leaveEvent(eventid).then(swal(`Event left.`)).then(this.props.history.push(`/network/${this.props.match.params.netId}`))}>Leave</button>
        </div>
        ):(
        <div>
          <div>{(this.state.contactHost === true) ? <UserContact first={firstname} last={lastname} email={email} cell={cell}/> : null }</div>
          <button onClick={() => this.props.joinEvent(eventid).then(swal('Event Joined!')).then(this.props.history.push(`/network/${this.props.match.params.netId}`))}>Join</button>
        </div>
        )}
        {/* <GoogleMaps /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventDetail: state.eventDetail,
    user: state.user
  };
}

export default withRouter(
  connect(mapStateToProps, {
    getEvent,
    adminDeleteEvent,
    editEvent,
    joinEvent,
    leaveEvent
  })(ExpandEvent)
);





    // let monthsArr = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December"
    // ];

    // let displayDate = date;
    // let month = Number(displayDate.slice(5,7));
    // let day = Number(displayDate.slice(8, 11));
    // console.log( month, day)
    // let date = this.props.events.date;
    // let month = Number(date.slice(5, 7));
    // let day = Number(date.slice(8, 11));
    // let time = this.props.events.time;
    // let monthDisplay = monthsArr[month - 1];
    // let hourCheck = () => {
    //   let hour = Number(time.slice(0, 2));
    //   let minutes = time.slice(3, 6);
    //   console.log("hour:", hour, "minutes:", minutes);
    //   if (hour > 12) {
    //     return `${hour - 12}:${minutes} pm`;
    //   } else {
    //     return `${hour}:${minutes} am`;
    //   }
    // };