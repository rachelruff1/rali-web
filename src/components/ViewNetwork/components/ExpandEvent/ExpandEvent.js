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
import swal from "sweetalert";
import EditEvent from "./EditEvent/EditEvent";
import Header from "../../../Header/AppHeader/AppHeader";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import UserContact from "./UserContact/UserContact";

class ExpandEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      currentEdit: false,
      contactHost: false,
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventGLocation: '',
      eventDescription: "", 
      userId: {}
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.saveEventDetail = this.saveEventDetail.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.evId).then(resp => {
      console.log(this.props.eventDetail, resp, "PROPS HERE");
      this.setState({
        eventName: this.props.eventDetail.name,
        eventDate: this.props.eventDetail.date,
        eventTime: this.props.eventDetail.time,
        eventLocation: this.props.eventDetail.location,
        eventGLocation: this.props.eventDetail.glocation,
        eventDescription: this.props.eventDetail.description,
        userId: this.props.user.id
      });
    });
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  saveEventDetail(e) {
    e.preventDefault();
    this.props.editEvent(
      this.props.eventDetail.eventid,
      this.state.eventName,
      this.state.eventDate,
      this.state.eventTime,
      this.state.eventLocation,
      this.state.eventDescription
    );
    swal('Event updated!');
  }

  toggleContact() {
    this.setState({ contactHost: !this.state.contactHost });
  }

  updateName(e) {
    this.setState({ eventName: e });
  }
  updateDate(e) {
    this.setState({ eventDate: e });
  }
  updateTime(e) {
    this.setState({ eventTime: e });
  }
  updateLocation(e) {
    this.setState({ eventLocation: e });
  }
  updateDescription(e) {
    this.setState({ eventDescription: e });
  }

  render() {
    const {
      name,
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

    const {
      eventName,
      eventDate,
      eventTime,
      eventDescription,
      eventLocation,
      eventGLocation,
      userId
    } = this.state;
    console.log(this);
    console.log(creatorid, "id", this.props.user.id);

    return this.state.isEditing ? (
      <div>
        <Header />
        <h1>Edit Event</h1>

        <EditEvent
          name={eventName}
          nameUpdate={e => this.updateName(e.target.value)}
          date={eventDate}
          dateUpdate={e => this.updateDate(e.target.value)}
          time={eventTime}
          timeUpdate={e => this.updateTime(e.target.value)}
          location={eventLocation === "" ? eventGLocation : eventLocation}
          locationUpdate={e => this.updateLocation(e.target.value)}
          description={eventDescription}
          descriptionUpdate={e => this.updateDescription(e.target.value)}
          onSave={this.saveEventDetail}
          toggle={this.toggleEdit}
        />
      </div>
    ) : (
      <div>
        <Header />
        <Link to={`/network/${this.props.match.params.netId}`}>
          <button>Back</button>
        </Link>
        <h1>{eventName === "" ? name : this.state.eventName}</h1>
        <p>Date: {eventDate}</p>
        <p>Time: {eventTime}</p>
        <p>Location: {eventLocation === "" ? eventGLocation : eventLocation}</p>
        <p>Description: {eventDescription}</p>
        <button onClick={this.toggleContact}>Contact host</button>

        {creatorid === userId ? (
          <div>
            <button onClick={this.toggleEdit}>Edit</button>
            <button
              onClick={() =>
                this.props
                  .adminDeleteEvent(eventid)
                  .then(swal(`Event deleted.`))
                  .then(
                    this.props.history.push(
                      `/network/${this.props.match.params.netId}`
                    )
                  )
              }
            >
              Delete
            </button>
          </div>
        ) : this.props.match.params.status === "joined" ? (
          <div>
            <div>
              {this.state.contactHost === true ? (
                <UserContact
                  first={firstname}
                  last={lastname}
                  email={email}
                  cell={cell}
                />
              ) : 'hi'}
            </div>
            <button
              onClick={() =>
                this.props
                  .leaveEvent(eventid)
                  .then(swal(`Event left.`))
                  .then(
                    this.props.history.push(
                      `/network/${this.props.match.params.netId}`
                    )
                  )
              }
            >
              Leave
            </button>
          </div>
        ) : (
          <div>
            <div>
              {this.state.contactHost === true ? (
                <div>
                <UserContact
                  first={firstname}
                  last={lastname}
                  email={email}
                  cell={cell}
                /></div> 
              ): null}
            </div>
            <button
              onClick={() =>
                this.props
                  .joinEvent(eventid)
                  .then(swal("Event Joined!"))
                  .then(
                    this.props.history.push(
                      `/network/${this.props.match.params.netId}`
                    )
                  )
              }
            >
              Join
            </button>
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
    eventName: state.eventDetail.name,
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

// componentWillReceiveProps(nextProps) {
//   if (this.props.eventDetail.eventid != nextProps.eventDetail.eventid) {
//     this.setState({ eventDetail: nextProps.eventDetail });
//   }
// }
