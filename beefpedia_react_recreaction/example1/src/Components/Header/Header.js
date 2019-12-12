import React from 'react';
import './Header.css';
import Division from '../Division/Division'

// class Header extends Compnent {
    
// }
// constructor(prop) {
//   super(prop);
//   this.sayHello = this.sayHello.bind(this);
// }

// sayHello() {
//   alert('Hello!');
// }

const Header = (props)=>{
  return(    
  
  <div id = {props.id} className="smallDiv">
<h2>{props.name}</h2>
<h3>{props.fruit}</h3>
  </div>);
  
}

export default Header;