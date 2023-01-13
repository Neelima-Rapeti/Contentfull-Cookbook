import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";

export default function FilterBar({ ingredient }) {
  const [ingredients, setIngredients] = useState([
    { ing: "chicken", checked: false },
    { ing: "tomatoes", checked: false },
    { ing: "pasta", checked: false },
    { ing: "asparagus", checked: false },
    { ing: "mushrooms", checked: false },
  ]);

  let result = ingredients.filter((ingt) => ingt.checked);

  const handleChange = (checked, i) => {
    let tmp = ingredients[i];
    tmp.checked = !checked;
    let ingredientsClone = [...ingredients];
    ingredientsClone[i] = tmp;
    setIngredients([...ingredientsClone]);
  };

  const selected = result.map((rec) => rec.ing);

  function handleSubmit(e) {
    window.location.href = `/allrecipes/ingredients/${selected}`;
    e.preventDefault();
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <h2>
              {" "}
              {ingredient?.charAt(0).toUpperCase() +
              ingredient?.toLowerCase().slice(1)
                ? ingredient?.charAt(0).toUpperCase() +
                  ingredient?.toLowerCase().slice(1)
                : "All"}{" "}
              Recipes
            </h2>
          </Navbar.Brand>

          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}

                <NavDropdown title="Ingredients" id="basic-nav-dropdown">
                  <div className="px-2">
                    {ingredients.map(({ ing, checked }, i) => (

                      <div key={i} className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"

                          id={i}
                          checked={checked}
                          onChange={() => handleChange(checked, i)}
                        />

                        <label className="form-check-label" htmlFor={i}>

                          {ing}
                        </label>
                      </div>
                    ))}

                    <div className="my-2 mx-5">
                      <button
                        type="submit"

                        className="btn btn-warning"

                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </NavDropdown>

                <NavDropdown title="Order by" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/allrecipes/order/-sys.createdAt">
                    Most recent
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allrecipes/order/-fields.rating">
                    Best rated
                  </NavDropdown.Item>
                  {/* order in array does not work */}

                  <NavDropdown.Item href="/allrecipes/order/-fields.preparationTime">
                    Preparation time
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/allrecipes/order/fields.title">
                    A-Z
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/allrecipes/category/chicken">
                    Chicken
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allrecipes/category/beef">
                    Beef
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/allrecipes/category/vegan">
                    Vegan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/allrecipes/category/vegetarian">
                    Vegetarian
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
