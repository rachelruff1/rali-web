import React, { Component } from "react";
import { connect } from "react-redux";
import { getNetworks } from "../../../ducks/reducer";
import NetworkManagerCard from './NetworkManagerCard/NetworkManagerCard';
import Header from '../../Header/AppHeader/AppHeader';
import './ManageNetworks.css';

class ManageNetworks extends Component {
 

  componentDidMount() {
    this.props.getNetworks();
  }
  render() {
    // console.log('this.props');
    const manageNetworksMap = this.props.networks.length>0 &&
    this.props.networks.map((c, i) => <NetworkManagerCard key={i} network={c} />);

    // console.log(this.props);
    return (<div>
      <Header/>
      <div className='manage-networks-map'>
        {manageNetworksMap}
        </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, { getNetworks })(ManageNetworks);
