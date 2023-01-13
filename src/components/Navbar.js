import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logo2.svg";
import { NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar({recipes,setRecipes}) {
  return (
    <div className="Navbar ">
      <NavLink to="/">
        <div className="logo">
          <div className="logoImage">
            <Logo />
          </div>
          <h1>Chef's</h1>
          <h2>Kiss</h2>
        </div>
      </NavLink>
      <Searchbar  setRecipes={setRecipes} recipes={recipes}/>
    </div>
  );
}
