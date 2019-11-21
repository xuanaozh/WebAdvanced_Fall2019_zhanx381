import React from 'react';
import './Header.css';

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
  <div className="smallDiv" >
<h2>{props.name}</h2>
<h3>{props.fruit}</h3>
  </div>);
  
}

export default Header;