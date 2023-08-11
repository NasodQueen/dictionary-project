import React from "react";

export default function Definitions(props) {
  if (props.definitions) {
    return <div className="Definitions">{props.definitions}</div>;
  } else {
    return <div className="Definitions"></div>;
  }
}
