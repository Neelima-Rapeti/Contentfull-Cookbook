import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import client from "../client";
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
  console.log(recipe);
  return (
    <div>
      <h3>AllRecipes</h3>
      <NavLink to="/">Homepage</NavLink>
      <div>
        <div className="container">
          <div className="row">
            {recipe.map((rec) => {
              return (
                <div
                  key={rec.sys.id}
                  className="border col-sm-4 col-6 mx-auto my-4 "
                >
                  <p> {rec.fields.title}</p>
                  <p>yield: {rec.fields.metrics[0]}</p>
                  <p>prep: {rec.fields.metrics[1]}</p>
                  <p>cook: {rec.fields.metrics[2]}</p>
                  <p>total: {rec.fields.metrics[3]}</p>
                  <p> description: {rec.fields.description}</p>
                  <p>rating: {rec.fields.rating}</p>
                  <p></p>
                  <div>
                    <p>INGREDIENTS </p>
                    <ul>
                      {rec.fields.ingredients.map((el, index) => (
                        <li key={index}>{el}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p>INSTRUCTIONS</p>

                    <ol>
                      {rec.fields.instructions.map((el, index) => (
                        <li key={index}>{el}</li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    {
                      <img
                        src={rec.fields.image.fields.file.url}
                        alt={rec.fields.title}
                        className="w-25"
                      />
                    }
                  </div>
                  <NavLink to={`/recipe/${rec.sys.id}`}>
                    <Button variant="primary">View Details</Button>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
