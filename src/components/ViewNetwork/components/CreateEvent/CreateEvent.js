import React, { Component } from "react";
import { createEvent } from "../../../../ducks/reducer";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import swal from "sweetalert";
import TextField from "material-ui/TextField";
// import TimePicker from "material-ui/TimePicker";
// import DatePicker from 'material-ui/DatePicker';
import Header from "../../../Header/AppHeader/AppHeader";
import GoogleMaps from "../ExpandEvent/GoogleMaps/GoogleMaps";
import './CreateEvent.css';

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: true,
      map: false,
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      eventDescription: ""
    };
    this.displayCustom = this.displayCustom.bind(this);
    this.displayMap = this.displayMap.bind(this);
    this.updateEventName = this.updateEventName.bind(this);
    this.updateEventDate = this.updateEventDate.bind(this);
    this.updateEventTime = this.updateEventTime.bind(this);
    this.updateEventLocation = this.updateEventLocation.bind(this);
    this.updateEventDescription = this.updateEventDescription.bind(this);
    this.checkAllFields = this.checkAllFields.bind(this);
  }

  displayCustom() {
    this.setState({
      custom: true,
      map: false
    });
  }

  displayMap() {
    this.setState({
      custom: false,
      map: true
    });
  }

  updateEventName(e) {
    return this.setState({
      eventName: e
    });
  }
  updateEventDate(e) {
    return this.setState({
      eventDate: e
    });
  }
  updateEventTime(e) {
    return this.setState({
      eventTime: e
    });
  }
  updateEventLocation(e) {
    return this.setState({
      eventLocation: e
    });
  }
  updateEventDescription(e) {
    return this.setState({
      eventDescription: e
    });
  }

  checkAllFields() {
    this.state.eventName !== "" &&
    this.state.eventDate !== "" &&
    this.state.eventTime !== "" &&
    this.state.eventDescription !== ""
      ? this.props
          .createEvent(
            this.props.match.params.id,
            this.state.eventName,
            this.state.eventDate,
            this.state.eventTime,
            this.state.eventLocation,
            this.props.googleAddress,
            this.state.eventDescription
          )
          .then(swal("Event created!"))
          .then(response =>
            this.props.history.push(`/network/${this.props.match.params.id}`)
          )
      : swal("Please complete all fields.");
  }

  render() {
    console.log(this);

    const { googleAddress } = this.props;

    const {
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription
    } = this.state;
    const {
      checkAllFields,
      displayCustom,
      displayMap,
      updateEventName,
      updateEventDate,
      updateEventTime,
      updateEventLocation,
      updateEventDescription
    } = this;

    const networkid = this.props.match.params.id;
    console.log(this.props.user);
    return (
      <div className = 'create-event-container'>
        <Header />
        <h1>Create New Event</h1>
        <div className="create-event-input">
          <TextField
            hintText="Event name"
            onChange={e => updateEventName(e.target.value)}
          />
        </div>
        
        <div className="create-event-input">
        <h3>Date</h3>
        <input
          type="date"
          onChange={e => updateEventDate(e.target.value)}
        />
      </div>
      <div className="create-event-input">
        <h3>Time</h3>
        <input
          type="time"
          onChange={e => updateEventTime(e.target.value)}
        />
      </div>
        
        <div className="location">
        <h3>Location</h3>
          <label className="container">
            <input
              type="radio"
              defaultChecked="checked"
              name="radio"
              onClick={displayCustom}
            />
            <span className="checkmark" />
          </label>
          {this.state.custom === true ? (
            <div className = 'create-event-input'>
            <TextField
              hintText="Custom"
              onChange={e => updateEventLocation(e.target.value)}
            /></div>
          ) : <p>Custom location</p>}

          <label className="container">
            
            <input type="radio" name="radio" onClick={displayMap} />
            <span className="checkmark" />Find on map
          </label>
          {this.state.map === true ? <GoogleMaps /> : null}
        </div>
        
        <div className="create-event-input">
          <TextField
          hintText="Event description"
            onChange={e => updateEventDescription(e.target.value)}
          />
          
        </div>
        <div className = 'create-event-buttons'>
        <button onClick={() => checkAllFields()}>Create New Event</button>
        <Link to={`/network/${networkid}`}>
          <button>Back</button>
        </Link></div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  const { googleAddress, user } = state;
  return {
    googleAddress,
    user
  };
};

export default withRouter(
  connect(mapStateToProps, {
    createEvent
  })(NewEvent)
);
