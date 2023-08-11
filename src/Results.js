import React from "react";

import Meaning from "./Meaning";
import PhoneticAudio from "./PhoneticAudio";
import PhoneticText from "./PhoneticText";

import "./Dictionary.css";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div>
        <h3>basics</h3>
        <div className="Results">
          <h2>{props.results.word}</h2>
          <div className="basics-grid">
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index} className="phonetics-grid">
                  <PhoneticAudio phonetics={phonetic} />
                  <PhoneticText phonetics={phonetic} />
                </div>
              );
            })}
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
