import React, { Component } from "react";
import { connect } from "react-redux";
import { getNetworks } from "../../../ducks/reducer";
import NetworkManagerCard from './NetworkManagerCard/NetworkManagerCard';

class ManageNetworks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNetworks();
  }
  render() {
    const manageNetworksMap = this.props.networks.length>0 &&
    this.props.networks.map((c, i) => <NetworkManagerCard key={i} network={c} />);

    console.log(this.props);
    return (<div>
        {manageNetworksMap}
    </div>)
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getNetworks })(ManageNetworks);
