import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import client from "../client";
import eye from '../images/eye.gif';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AllRecipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        
        content_type: 'blog',
  
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);
  // console.log(recipe);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <div>
      <div>
      <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-between">
      
        <Navbar.Brand><h2>All Recipes</h2></Navbar.Brand>
        
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            <NavDropdown title="Ingredients" id="basic-nav-dropdown" >
              <div className="px-2">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">chicken</label>
              </div>
              
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">tomatoes</label>
              </div>
             
              
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">mushrooms</label>
              </div>
             
              
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">pasta</label>
              </div>
              
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">asparagus</label>
              </div>
              
                <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
               <label class="form-check-label" for="exampleCheck1">shallots</label>
              </div>
              <div className="my-2 mx-5">
              <button type="submit" class="btn btn-warning">Submit</button>
              </div>
              </div>
            </NavDropdown>
            
            <NavDropdown title="Order by" id="basic-nav-dropdown">
              <NavDropdown.Item href="/allrecipes/categories/chicken">Most recent</NavDropdown.Item>
              <NavDropdown.Item href="/allrecipes/bestrated">
                Best rated
              </NavDropdown.Item>
              <NavDropdown.Item href="/allrecipes/preparationtime">Preparation time</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/allrecipes/separatelink">
                A-Z
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/allrecipes/categories/chicken">Chicken</NavDropdown.Item>
              <NavDropdown.Item href="/allrecipes/bestrated">
                Best rated
              </NavDropdown.Item>
              <NavDropdown.Item href="/allrecipes/preparationtime">Mushrooms</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/allrecipes/separatelink">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
      </div>
      
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
