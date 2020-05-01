import React from "react";

function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        className="searchTextbox"
        autoFocus
        placeholder="Enter the Episode name to search"
        onChange={props.handleInputChange}
      />
    </div>
  );
}

export default SearchBox;
