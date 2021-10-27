import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Container fluid className="banner-section">
        <div>
          <h1 className="text-center">I grow by helping people in need.</h1>
        </div>
      </Container>
    </>
  );
};

export default Banner;
