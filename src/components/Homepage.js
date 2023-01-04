import React from "react";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>

      <NavLink to="/allrecipes">See AllRecipes</NavLink>
    </div>
  );
}
