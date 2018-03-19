import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { leaveNetwork, adminDeleteNetwork } from "../../../../ducks/reducer";
import "../ManageNetworks.css";

class NetworkManagerCard extends Component {
  render() {
    
    // console.log('this.props', this.props.network.userid,
    // this.props.network.networkid);
    return this.props.network.creatorid === this.props.network.userid ? (
      <div className="network-manager-card">
      <div className='network-manager-box' >
        <h3>{this.props.network.name}</h3>
        </div>
        <div className='network-manager-card-buttons'>
        <Link
          to={`/edit-network/${this.props.network.networkid}`}
          network={this.props.network}
        >
          <button>Edit</button> 
        </Link>
        <button
          onClick={
            () =>
              this.props
                .adminDeleteNetwork(this.props.network.networkid)
                .then(swal("Network Deleted"))
            .then(window.location.reload())
          }
        >Delete</button></div>
      </div>
    ) : (
      <div className="network-manager-card">
      <div className='network-manager-box' >
        <h3>{this.props.network.name}</h3>
        </div>
        <button
        
          onClick={() =>
            this.props
              .leaveNetwork(
                this.props.network.userid,
                this.props.network.networkid
              )
              .then(swal("Network removed."))
              .then(window.location.reload())
          }
        >Leave Network</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { leaveNetwork, adminDeleteNetwork })(
  NetworkManagerCard
);
