import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import "./SearchNetwork.css";
import Header from "../../../Header/AppHeader/AppHeader";
import {
  updateNetworkSearch,
  performSearch,
  clearNetworkSearch
} from "../../../../ducks/reducer";

class SearchNetwork extends Component {
  componentDidMount() {
    this.props.clearNetworkSearch();
  }
  render() {
    const {
      updateNetworkSearch,
      performSearch,
      networkSearch,
      networkSearchResults
    } = this.props;
    // console.log(networkSearchResults);
    const searchResults =
      networkSearchResults &&
      networkSearchResults.map((c, i) => <SearchCard key={i} network={c} />);
    return (
      <div className='search-container'>
        <Header />
        <div className="network-search-container">
        <h1>Search for a Network</h1>
        <TextField
              floatingLabelText="Network name"
            onChange={e => updateNetworkSearch(e.target.value)}
          />
          <button onClick={() => performSearch(networkSearch)}>Search</button>
          <Link to="/network-selector">
            <button>Back</button>
          </Link>
        </div>
        <div className="search-results-container">
          {networkSearchResults ? searchResults : "No networks found"}
        </div>
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
  performSearch,
  clearNetworkSearch
})(SearchNetwork);
