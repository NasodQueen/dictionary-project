import React from "react";

import { IconVolume } from "@tabler/icons-react";

import "./Dictionary.css";

export default function PhoneticAudio(props) {
  return (
    <div className="sound-button">
      <a href={props.phonetics.audio} rel="noreferrer" target="_blank">
        <IconVolume size={24} />
      </a>
    </div>
  );
}
