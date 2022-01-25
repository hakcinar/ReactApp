import React from 'react';

 function Car(props) {
  return <div>
  <p>Hi,I am a {props.brand.name} {props.brand.model}!</p>
  </div>;
  
 
}

export default Car;