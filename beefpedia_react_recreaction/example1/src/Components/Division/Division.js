import React from 'react';
import './Division.css';


const Division = (props)=>{
    return(    
      <div id = {props.id}  className="largeDiv">
      <h1 >{props.name}</h1>
      <h4>{props.title}</h4>
      <h5>{props.content}</h5>
        </div>);
    
  }
  
  export default Division;