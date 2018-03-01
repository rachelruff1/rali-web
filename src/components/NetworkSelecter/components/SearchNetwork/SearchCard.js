import React from "react";

const SearchCard = props => (
  <div className="search-container">
      <button>{props.network.name}</button>
  </div>
);

export default SearchCard;
