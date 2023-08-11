import React from "react";

import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import useSound from "use-sound";

import "./Dictionary.css";

// Audio player to input:
// https://www.npmjs.com/package/react-audio-player

export default function PhoneticAudio(props) {
  let soundUrl = props.phonetics.audio;
  const [play] = useSound(soundUrl, { volume: 0.25 });

  function handledClick() {
    play();
  }

  if (props.phonetics.audio) {
    return (
      <div className="phonetics-audio">
        <button className="sound-button" onClick={handledClick}>
          {/* <a href={props.phonetics.audio} rel="noreferrer" target="_blank"> */}
          <IconVolume size={24} />
          {/* </a> */}
        </button>
      </div>
    );
  } else {
    return (
      <div className="phonetics-audio">
        <button className="sound-button-disabled">
          <IconVolumeOff size={24} />
        </button>
      </div>
    );
  }
}
