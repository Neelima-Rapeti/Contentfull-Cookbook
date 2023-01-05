import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import { GiKnifeFork } from "react-icons/gi";
import { BsClock } from "react-icons/bs";

export default function IndividualRecipe() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => setRecipeDetails(response))
      .catch(console.error);
  }, [id]);

  return (
    <div className="container bg-success">
      <div className="row">
        <div className="w-75">
          {" "}
          <div className="container bg-dark text-white">
            <div className="row">
              <div className="col-sm-9 bg-primary p-3">
                <h3>{recipeDetails.fields?.title}</h3>
                <p>
                  <GiKnifeFork /> yield: {recipeDetails.fields?.metrics[0]}{" "}
                  SERVINGS
                </p>
                <p>
                  {" "}
                  <BsClock /> prep: {recipeDetails.fields?.metrics[1]} MINUTES
                </p>
                <p>
                  {" "}
                  <BsClock /> cook: {recipeDetails.fields?.metrics[2]} MINUTES
                </p>
                <p>
                  {" "}
                  <BsClock /> total: {recipeDetails.fields?.metrics[3]} MINUTES
                </p>
                <p>{recipeDetails.fields?.description}</p>
                <p>rating: {recipeDetails.fields?.rating}</p>
              </div>
              <div className=" col-sm-3 bg-warning p-3">
                <img
                  src={recipeDetails.fields?.image.fields.file.url}
                  alt={recipeDetails.fields?.title}
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="bg-info">
            <div className="border">
              <p>INGREDIENTS </p>
              <ul>
                {recipeDetails.fields?.ingredients.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
            <div className="border">
              <p>INSTRUCTIONS</p>
              <ol>
                {recipeDetails.fields?.instructions.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
