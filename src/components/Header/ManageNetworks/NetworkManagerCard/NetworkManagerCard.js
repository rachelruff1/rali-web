import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { leaveNetwork, adminDeleteNetwork } from "../../../../ducks/reducer";
import RaisedButton from 'material-ui/RaisedButton';
import "../ManageNetworks.css";

class NetworkManagerCard extends Component {
  render() {
    const style = {
      margin: 12,
    };
    // console.log('this.props', this.props.network.userid,
    // this.props.network.networkid);
    return this.props.network.creatorid === this.props.network.userid ? (
      <div className="network-manager-card">
        <p>{this.props.network.name}</p>
        <Link
          to={`/edit-network/${this.props.network.networkid}`}
          network={this.props.network}
        >
          <RaisedButton label="Edit" style={style} />
        </Link>
        <RaisedButton label="Delete" style={style}
          onClick={
            () =>
              this.props
                .adminDeleteNetwork(this.props.network.networkid)
                .then(swal("Network Deleted"))
            .then(window.location.reload())
          }
        />
      </div>
    ) : (
      <div className="network-manager-card">
        <p>{this.props.network.name}</p>
        <RaisedButton label="Leave Network" style={style}
          onClick={() =>
            this.props
              .leaveNetwork(
                this.props.network.userid,
                this.props.network.networkid
              )
              .then(swal("Network removed."))
              .then(window.location.reload())
          }
        />
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
