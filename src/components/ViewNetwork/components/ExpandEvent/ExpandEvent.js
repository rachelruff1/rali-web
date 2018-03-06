import React, { Component } from "react";
import { connect } from "react-redux";
import { getEvent, adminDeleteEvent } from "../../../../ducks/reducer";
import { withRouter, Link } from "react-router-dom";

class ExpandEvent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.evId);
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
    console.log("this.props:", this.props);

    return (
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
              <button>Edit</button>
              <button onClick={()=>adminDeleteEvent(eventid)}>Delete</button>
            </div>
          ) : null}
        </div>
        {/* <p>Attendees: </p> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventDetail: state.eventDetail
  };
}

export default withRouter(connect(mapStateToProps, { getEvent, adminDeleteEvent })(ExpandEvent));
