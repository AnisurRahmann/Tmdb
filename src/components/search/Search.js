import React from "react";
import "./Search.css";

class Search extends React.Component {
  handeChange = e => {
    let value = this.search.value;
    this.props.handleInputChange(value);
  };
  render() {
    return (
      <div className="Search-box">
        <input
          ref={input => (this.search = input)}
          onChange={this.handeChange}
          className="serach-input"
          type="text"
          placeholder="Search the Movie"
        />
      </div>
    );
  }
}
export default Search;
