import React from "react";

import "./Dictionary.css";

export default function PhoneticsText(props) {
  if (props.phonetics.text) {
    return (
      <div className="phonetics-text">
        <h4>{props.phonetics.text}</h4>
      </div>
    );
  } else {
    return (
      <div className="phonetics-text">
        <h4>n/a</h4>
      </div>
    );
  }
}
