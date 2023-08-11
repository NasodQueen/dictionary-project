import React from "react";

import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

import "./Dictionary.css";

// Audio player to input:
// https://www.npmjs.com/package/react-audio-player

export default function PhoneticAudio(props) {
  if (props.phonetics.audio) {
    return (
      <div>
        <button className="sound-button">
          {/* <a href={props.phonetics.audio} rel="noreferrer" target="_blank"> */}
          <IconVolume size={24} />
          {/* </a> */}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="sound-button-disabled">
          <IconVolumeOff size={24} />
        </button>
      </div>
    );
  }
}
