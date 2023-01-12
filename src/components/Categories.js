import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import Cell from "./Cell";
import { useParams } from "react-router-dom";
import FilterBar from "./FilterBar";

export default function Categories() {
  const [recipe, setRecipe] = useState([]);
  const { ingredient } = useParams();
  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        "fields.ingredients[match]": ingredient,
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);

  return (
    <div>
      <FilterBar ingredient={ingredient} />
      <div className="grid mx-5">
        {recipe.map((rec) => {
          return <Cell entry={rec} key={rec.sys.id} />;
        })}
      </div>
    </div>
  );
}
