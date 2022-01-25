import React from 'react';
import Car from './Car';

export default function Garage() {
  const carInfo = { name:"Ford",model:"Mustang"};  
  return <div>
   <h1>Who lives in my garage</h1>
   <Car brand ={carInfo}/>   
  </div>;
}
