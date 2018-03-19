import React, { Component } from "react";
import MyEvents from "./components/MyEvents/MyEvents";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNetwork, getUserCount } from "../../ducks/reducer";
import NetworkEvents from "./components/NetworkEvents/NetworkEvents";
import Header from "../Header/AppHeader/AppHeader";
import "./ViewNetwork.css";

class ViewNetwork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleView: false
    };
    this.showMy = this.showMy.bind(this);
    this.showNetwork = this.showNetwork.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getNetwork(this.props.match.params.id);
    this.props.getUserCount(this.props.match.params.id);
  }
  showMy() {
    this.setState({
      toggleView: false
    });
  }

  showNetwork() {
    this.setState({
      toggleView: true
    });
  }
  render() {
    const { userCount } = this.props;
    console.log(userCount);
    console.log(this.state.toggleView);
    const networkid = this.props.match.params.id;

    return (
      <div className="view-network-container-big">
        <Header />
        <div className="view-network-container">
          <h1>{this.props.activeNetwork.name}</h1>
          <p>
            {userCount} {userCount > 1 ? "active members" : "active member"}
          </p>
          <Link to={`/network/${networkid}/create-event/`}> <button>Create New Event</button></Link>
          <div className="conditional-events-container">
            <button onClick={()=>this.showMy()}>My events</button>
            <button onClick={()=>this.showNetwork()}>Network Events</button>
            <div className="events-container">
              {this.state.toggleView === false ? (
                <div className="my-events-container">
                  <MyEvents networkid={networkid} />
                </div>
              ) : (
                <div className="network-events-container">
                  <NetworkEvents networkid={networkid} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  const { activeNetwork, userCount } = state;
  return {
    activeNetwork,
    userCount
  };
};
export default withRouter(
  connect(mapStatetoProps, { getNetwork, getUserCount })(ViewNetwork)
);
