import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getEvent,
  adminDeleteEvent,
  editEvent,
  joinEvent
} from "../../../../ducks/reducer";
import { withRouter, Link } from "react-router-dom";
import EditEvent from "./EditEvent/EditEvent";
import Header from '../../../Header/AppHeader/AppHeader';

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
    console.log("this", date);
    
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

    
    return this.state.isEditing ? (
      <div>
        <Header />
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
        <Header/>
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
              <button onClick={() => this.props.adminDeleteEvent(eventid)}>Delete</button>
            </div>
          ) : <button onClick={()=>this.props.joinEvent(eventid)}>Join</button>}
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
  connect(mapStateToProps, { getEvent, adminDeleteEvent, editEvent, joinEvent })(
    ExpandEvent
  )
);
