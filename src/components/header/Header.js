import React from "react";
import "./Header.css";
import logo from "../../img/tmdb.svg";

//import searchBox

import Search from "../search/Search";
import Suggest from "../suggest/Suggest";

function Header({ handleInputChange, query, results, getId, showSuggestion }) {
  return (
    <>
      <div className="header">
        <div className="brand-logo">
          <img className="logo" src={logo} />
        </div>

        <Search handleInputChange={handleInputChange} query={query} />
        {showSuggestion && <Suggest results={results} getId={getId} />}
      </div>
    </>
  );
}
export default Header;
