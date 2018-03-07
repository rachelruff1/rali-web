import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { leaveNetwork} from '../../../../ducks/reducer';

class NetworkManagerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      console.log('this.props', this.props);
    return this.props.network.creatorid === this.props.network.userid ? (
      <div>
        <button>{this.props.network.name}</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    ) : (
      <div className="network-container">
        <button>{this.props.network.name}</button>
        <button onClick={()=>this.props.leaveNetwork(this.props.network.userid, this.props.network.networkid)}>Leave Network</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { leaveNetwork })(NetworkManagerCard);
