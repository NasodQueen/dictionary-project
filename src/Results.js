import React from "react";

import Meaning from "./Meaning";

import "./Dictionary.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3>basics</h3>
        <div className="Results">
          <h2>{props.results.word}</h2>
          <h4>{props.results.phonetic}</h4>
          <button className="button">Listen</button>
        </div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
