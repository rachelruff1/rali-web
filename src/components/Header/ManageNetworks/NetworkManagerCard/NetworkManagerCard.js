import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { leaveNetwork} from '../../../../ducks/reducer';
import '../ManageNetworks.css';

class NetworkManagerCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      // console.log('this.props', this.props);
    return this.props.network.creatorid === this.props.network.userid ? (
      <div className='network-manager-card'>
        <p>{this.props.network.name}</p>
        <Link to={`/edit-network/${this.props.network.networkid}`} network={this.props.network}><button>Edit</button></Link>
        <button onClick={this.props.deleteNetwork}>Delete</button>
      </div>
    ) : (
      <div className="network-manager-card">
        <p>{this.props.network.name}</p>
        <button onClick={()=>this.props.leaveNetwork(this.props.network.userid, this.props.network.networkid)}>Leave Network</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { leaveNetwork })(NetworkManagerCard);
