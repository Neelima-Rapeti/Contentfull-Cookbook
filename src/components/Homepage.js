import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import client from "../client";
import ExploreSection from "./ExploreSection"

  

export default function Homepage() {
   const [recipe, setRecipe] = useState([]);

   useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        // The following line orders the items per creation date:
        order: 'sys.createdAt' 
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);
  //console.log(recipe);

  return (
    <div>
      <div>HERO</div>
      <div>
        <h2>Recently added</h2>
        <div className="ExploreBody">
          <div className="grid">
              {recipe.slice(-8).reverse().map((rec) => {
               return <ExploreSection entry={rec} key={rec.sys.id} />;
               })}
          </div>
          <div className="Button">
            <NavLink to="/allrecipes"><button className="btn btn-outline-warning rounded" style={{backgroundColor: 'rgb(49, 58, 61)'}}>See All</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

