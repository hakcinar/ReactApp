import React from "react";
import Car from "./Car";
import Garage from "./Garage";

export default function Football() {
  const shoot = (a, b) => {
    alert(b.type);
  };
  return (
    <div>
      <button onClick={(event) => shoot("Goal!", event)}>
        {" "}
        Take the shot !
      </button>
      <Garage />
    </div>
  );
}
