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
  console.log(recipeDetails);
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-9 col-sm-12  mx-auto mt-4 mb-4">
          {" "}
          <div className="container bg-dark text-white">
            <div className="row">
              <div className="col-sm-8 p-4 pb-1">
                <h2 className="">{recipeDetails.fields?.title}</h2>

                <p>
                  <GiKnifeFork /> <span className="fst-italic"> yield: </span>
                  {recipeDetails.fields?.metrics[0]} SERVINGS
                </p>
                <p>
                  {" "}
                  <BsClock /> <span className="fst-italic"> prep: </span>
                  {recipeDetails.fields?.metrics[1]} MINUTES
                </p>
                <p>
                  {" "}
                  <BsClock /> <span className="fst-italic"> cook: </span>
                  {recipeDetails.fields?.metrics[2]} MINUTES
                </p>
                <p>
                  {" "}
                  <BsClock />
                  <span className="fst-italic"> total: </span>
                  {recipeDetails.fields?.metrics[3]} MINUTES
                </p>

                <p className="text-sm-start">
                  {recipeDetails.fields?.description}
                </p>
              </div>
              <div className="col-sm-4 pt-4 p-2 mx-auto">
                <img
                  src={recipeDetails.fields?.image.fields.file.url}
                  alt={recipeDetails.fields?.title}
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
          <div className="bg-light ">
            <div className="w-75 mx-3 pt-3">
              <h4 className="text-muted font-monospace">INGREDIENTS </h4>
              <ul>
                {recipeDetails.fields?.ingredients.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
            <div className="w-75 mx-3 pb-3">
              <h4 className="text-muted font-monospace">INSTRUCTIONS</h4>
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
