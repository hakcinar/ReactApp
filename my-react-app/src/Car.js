import React from "react";

export default function Car(props) {
  return (
    <div>
      <p>
        Hi,I am a {props.brand}{props.name}!
      </p>
    </div>
  );
}
