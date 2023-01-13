import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import Cell from "./Cell";
import { useParams } from "react-router-dom";
import FilterBar from "./FilterBar";

export default function OrderBy() {
  const [recipe, setRecipe] = useState([]);
  const { orderType } = useParams();

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        order: orderType
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);

  return (
    <div>
      <FilterBar orderType={orderType} />

      <div className="grid mx-5">
        {recipe.map((rec) => {
          return <Cell entry={rec} key={rec.sys.id} />;
        })}
      </div>
    </div>
  );
}