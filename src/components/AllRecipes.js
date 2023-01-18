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

  return (
    <div>
      <div>
        <FilterBar />
      </div>
      <h3 className="ms-5">All Recipes</h3>
      <div className="grid mx-5">
        {recipe.map((rec) => {
          return <Cell entry={rec} key={rec.sys.id} />;
        })}
      </div>
    </div>
  );
}
