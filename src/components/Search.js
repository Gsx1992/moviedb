import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
  }

  render() {
    return (
      <SearchBar
        style={{minWidth: '30%'}}
        placeholder="Movie, TV Show or an Actor"
        value={this.state.searchValue}
        onChange={(newValue) => this.setState({ searchValue: newValue })}
        onRequestSearch={() => console.log(this.state.searchValue)}
      />
    );
  }
}

export default Search;
