import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import Cell from "./Cell";
import FilterBar from "./FilterBar";


export default function AllRecipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);
  // console.log(recipe);

  return (
    <div>
      <div>
        <FilterBar />
      </div>
      <div className="grid mx-5">
        {recipe.map((rec) => {
          return <Cell entry={rec} key={rec.sys.id} />;
        })}
      </div>
     
    </div>
  );
}
