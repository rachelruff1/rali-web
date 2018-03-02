import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { connect } from "react-redux";
import { updateNetworkSearch, performSearch } from "../../../../ducks/reducer";

class SearchNetwork extends Component {
    // componentDidMount(){
    //     performSearch();
    // }
  render() {
    const { updateNetworkSearch, performSearch, networkSearch, networkSearchResults } = this.props;
    // console.log(networkSearchResults);
    const searchResults =
      networkSearchResults &&
      networkSearchResults.map((c, i) => (
        <SearchCard key={i} network={c} />
      ));
    return (
      <div className="network-search container">
        <input
          type="text"
          placeholder="Enter network name.."
          onChange={e => updateNetworkSearch(e.target.value)}
        />
        <button onClick={() => performSearch(networkSearch)}>Search</button>
        <Link to="/network-selector">
          <button>Back</button>
        </Link>
        <div className="search-results container" />
        {(networkSearchResults) ? searchResults : 'No networks found'}
      </div>
    );
  }
}
//on navigate away - set search
function mapStateToProps(state) {
  return {
    networkSearch: state.networkSearch,
    networkSearchResults: state.networkSearchResults
  };
}
export default connect(mapStateToProps, {
  updateNetworkSearch,
  performSearch
})(SearchNetwork);
