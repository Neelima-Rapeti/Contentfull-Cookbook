import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import client from "../client";
import { GiKnifeFork } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function IndividualRecipe() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { id } = useParams();
  const navigation = useNavigate();
  const goBack = () => {
    navigation(-1);
  };
  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => setRecipeDetails(response))
      .catch(console.error);
  }, [id]);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-9 col-sm-12  mx-auto mt-4 mb-4">
          {" "}
          <div className="container bg-dark text-white">
            <div className="row">
              <div className="col-sm-8 p-3">
                <h2 className="pb-1">{recipeDetails.fields?.title}</h2>
                <div className="row row-cols-2 mt-3 ">
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
                </div>
                <p className=" fs-5">{recipeDetails.fields?.description}</p>
              </div>
              <div className="col-sm-4 mt-4  mx-auto">
                <img
                  src={recipeDetails.fields?.image.fields.file.url}
                  alt={recipeDetails.fields?.title}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="container bg-light ">
            <div className="row pt-3 col-md-8 col-sm-11">
              <div>
                <h4 className="text-muted font-monospace">INGREDIENTS </h4>
                <ul>
                  {recipeDetails.fields?.ingredients.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-muted font-monospace">INSTRUCTIONS</h4>
                <ol>
                  {recipeDetails.fields?.instructions.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="d-flex justify-content-center pb-1">
              <Button onClick={goBack} variant="dark">
                Go Back
              </Button>
            </div>
            <div>{/* {recipeDetails.fields?.} */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
