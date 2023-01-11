import eye from '../../images/eye.gif';
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import client from "../../client";



export default function AllRecipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        
        content_type: 'blog',
  'fields.ingredients[match]': 'chicken'
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);
// console.log(recipe)
const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <div>
      <h2>Chicken Recipes</h2>
      <div className="grid mx-5" >
        
            {recipe.map((rec) => {
              return (
                <div className="cell" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img className="foto" src={rec.fields.image.fields.file.url} alt={rec.fields.title} />
                  <p>{rec.fields.title.toLowerCase().charAt(0).toUpperCase() + rec.fields.title.toLowerCase().slice(1)}</p>
                  
                    {isHovering && (  
                  <div className="eye" >
                  <NavLink className="eyeNavlink" to={`/recipe/${rec.sys.id}`} >
                    <img className="eyeGif" src={eye} alt="see more"/>
                  </NavLink>
                  </div>
                  )}   
                  
                  </div> );
            })}
          </div> 
          </div>
  );
}