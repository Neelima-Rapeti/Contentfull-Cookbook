import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import client from "../client";

function Hero() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        // The following line orders the items per creation date:
        order: "sys.createdAt",
      })
      .then((response) => setRecipe(response.items))
      .catch(console.error);
  }, []);


  return (
    <div>
      <Container>
        <div className="title-holder">
          <h2 className=" mt-3">Popular Recipes</h2>
          <p > Select your Favourite recipe and make your day happy... </p>
        </div>
        {/* <div className="subtitle">
          <h2>Popular Recipe</h2>
        // </div> */}
        <Carousel className="mt-5 mb-5" variant="dark">
          {recipe.map((rec) => {
            return (
              // <div key={rec.sys.id}>
                <Carousel.Item interval={500} key={rec.sys.id}>
                <div className="d-flex justify-content-center ">
                  <img
                    src={rec.fields.image.fields.file.url}
                    alt={rec.fields.title}
                    height={380}
                    width={500}
                  />
                </div>

                <Carousel.Caption>
                  <h3 className="text-info" style={{ color: 'pink' }} >{rec.fields.title.toLowerCase()}</h3>
                </Carousel.Caption>
              </Carousel.Item>
              // </div>

            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default Hero;