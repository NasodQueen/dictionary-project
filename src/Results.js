import React from "react";

import Meaning from "./Meaning";
import PhoneticAudio from "./PhoneticAudio";

import "./Dictionary.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3>basics</h3>
        <div className="Results">
          <div className="basics-grid">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <PhoneticAudio phonetics={phonetic} />
                </div>
              );
            })}
            <span>
              <h2>{props.results.word}</h2>
              <h4>{props.results.phonetic}</h4>
            </span>
          </div>
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
