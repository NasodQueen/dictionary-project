import React from "react";

import "./Dictionary.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <h3>Photo gallery</h3>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-1" key={index}>
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
