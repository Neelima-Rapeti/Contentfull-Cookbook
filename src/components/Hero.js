import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
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
          <h4 className="mt-2">
            {" "}
            Select your Favourite recipe and make your day happy...{" "}
          </h4>
        </div>
        <Carousel className="mt-5 mb-5 ca" variant="dark">
          {recipe.map((rec) => {
            return (
              <Carousel.Item interval={4000} key={rec.sys.id}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  <img
                    src={rec.fields.image.fields.file.url}
                    alt={rec.fields.title}
                    height={380}
                    width={500}
                  />
                </Stack>
                <div className="d-flex justify-content-center "></div>
                <div className="d-flex justify-content-center "></div>

                <Carousel.Caption>
                  <h3 className=" text-dark">
                    {rec.fields.title.toLowerCase().charAt(0).toUpperCase() +
                      rec.fields.title.toLowerCase().slice(1)}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}

export default Hero;
