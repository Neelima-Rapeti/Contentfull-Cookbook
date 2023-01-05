import React from "react";
import {ReactComponent as Logo} from '../images/logo2.svg'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return <div className="Navbar " >
  <NavLink to="/">
  <div className="logo" >
  <div  className="logoImage">
      <Logo />
    </div>
    <h1>Chef's</h1>
    <h2>Kiss</h2>
  </div>
  </NavLink>
  <form className="form input-group">
      <input className= "rounded" type="search" ></input>
      <button className="btn btn-outline-warning rounded " type="submit">Search</button>
    </form>
  </div>
 
}
