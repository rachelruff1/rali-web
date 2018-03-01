import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import {connect} from 'react-redux';
import {
    searchNetworkName
} from '../../../../ducks/reducer';

class SearchNetwork extends Component {

  render() {
    const seachResults =
      this.props.savedNetworks &&
      this.props.savedNetworks.map((c, i) => (
        <SearchCard key={i} network={c} />
      ));
    return (
      <div className="network-search container">
         <input
          type="text"
          placeholder="Enter network name.."
          onChange={e => this.props.searchNetworkName(e.target.value)}
        />
        <button>Search</button>
        <Link to="/network-selector">
          <button>Back</button>
        </Link>
        <div className="search-results container" />
        {/* {searchResults} */}
      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
      searchNetworkName: state.searchNetworkName
    };
  }
  export default connect(mapStateToProps, {
    searchNetworkName
  })(SearchNetwork);
