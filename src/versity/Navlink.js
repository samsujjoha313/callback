import React from 'react';
import {NavLink} from 'react-router-dom';


function Navlink() {
  return (
    <>
  
  <div className="main-div d-flex">
  <div className="div1"><h1> <i>Food Item</i></h1></div>

 <div className="div2 text-white">
    <NavLink className="item text-white" to="/">Home</NavLink>  
    <NavLink className="item text-white" to="/about">About</NavLink> 
    <NavLink className="item text-white" to="/service">Service</NavLink> 
    <NavLink className="item text-white" to="/contact">Contact</NavLink> 
 </div>
  </div>
    
    </>
  );
}

export default Navlink;
