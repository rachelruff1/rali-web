import React, { Component } from "react";
import MyEvents from "./components/MyEvents/MyEvents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNetwork } from "../../ducks/reducer";
import NetworkEvents from "./components/NetworkEvents/NetworkEvents";
import Header from "../Header/AppHeader/AppHeader";
import "./ViewNetwork.css";

class ViewNetwork extends Component {

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.getNetwork(this.props.match.params.id);
  }

  render() {
    // console.log(this.props);
    const networkid = this.props.match.params.id;

    return (
      <div>
        <Header />
        <div className="view-network-container">
          <h1>{this.props.activeNetwork.name}</h1>
          {/* <Link to  ='/network-selector'><button>Go back</button></Link> */}
          <div className="events-containers">
            <div className="my-events-container">
              <MyEvents networkid={networkid} />
              </div>
              <div className="network-events-container">
                <NetworkEvents networkid={networkid} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  const { activeNetwork } = state;
  return {
    activeNetwork
  };
};
export default withRouter(
  connect(mapStatetoProps, { getNetwork })(ViewNetwork)
);
