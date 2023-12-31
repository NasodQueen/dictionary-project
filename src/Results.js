import React from "react";

import Meaning from "./Meaning";
import PhoneticAudio from "./PhoneticAudio";
import PhoneticText from "./PhoneticText";

import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h3>basics</h3>
        <div className="Results">
          <div className="spacer-div"></div>
          <h2>{props.results.word}</h2>
          <ul className="basics-grid">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <li key={index} className="phonetics-grid">
                  <PhoneticText phonetics={phonetic} />
                  <PhoneticAudio phonetics={phonetic} />
                </li>
              );
            })}
          </ul>
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
