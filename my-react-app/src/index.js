import React, { Component } from "react";
import ReactDOM from "react-dom";
import Football from "./Football";
//import Car from './Car';
import Garage from "./Garage";
import Input from "./Input";

/*function Car(props) {
  return <div>
    <h2>I am a {props.color} Car!</h2>
  </div>;
}
 function Garage() {
  return <>
    <h1>Who lives in my garage</h1>
    <Car />
  </>;
}*/

/*const myfirstelement = <h1>Hello World!</h1>
const myelement =(
  <div>
  <h5>This is a type of list with making something</h5>
  <p>Ading some paragrapsh like this one</p>
  <p className='Just a paragraph'>We are making just empty things without closing tag</p>
  <input type="text"></input>
     <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Eggs</li>
  </ul>
  </div>
 
);*/
ReactDOM.render(<Input/>, document.getElementById("root"));
