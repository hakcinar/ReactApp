import React from "react";
import Car from "./Car";

export default function Garage() {
  const cars = [{id:1,name:"Ford"},{id:2,name:"Bmw"},{id:3,name:"Toros"}];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      {cars.map((car) => (
        <Car brand={car.id} name={car.name} />
      ))}
    </>
  );
}
