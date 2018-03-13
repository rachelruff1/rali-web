import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../../ViewNetwork.css";

class EventCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let monthsArr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    let date = this.props.events.date;
    let month = Number(date.slice(5, 7));
    let day = Number(date.slice(8, 11));
    let time = this.props.events.time;
    let monthDisplay = monthsArr[month - 1];
    let hourCheck = () => {
      let hour = Number(time.slice(0, 2));
      let minutes = time.slice(3, 6);
      console.log("hour:", hour, "minutes:", minutes);
      if (hour > 12) {
        return `${hour - 12}:${minutes} pm`;
      } else {
        return `${hour}:${minutes} am`;
      }
    };

    return (
      <div className="event-card-container">
        <Link
          to={`/network/${this.props.events.networkid}/event/${
            this.props.events.eventid
          }`}
          style={{ textDecoration: "none" }}
        >
          <p>{this.props.events.name}</p>
          <p>
            {monthDisplay} {day}
          </p>
          <p>
            {hourCheck()} · {this.props.events.location}
          </p>
        </Link>
      </div>
    );
  }
}
export default withRouter(EventCard);
