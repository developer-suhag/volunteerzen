import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Container fluid className="banner-section text-center text-white">
        <div>
          <h1>
            Donations that <br /> change the world
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Banner;
