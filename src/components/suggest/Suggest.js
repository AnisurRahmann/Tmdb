import React from "react";
import "./Suggest.css";

function Suggest({ results, getId }) {
  const result = results.slice(0, 5);

  const options = result.map(result => (
    <li key={result.id}>
      <a href="#" onClick={() => getId(result.id)}>
        {result.original_title}
      </a>
    </li>
  ));

  return <ul className="sugestion"> {options} </ul>;
}
export default Suggest;
