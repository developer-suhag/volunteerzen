import React from "react";
import { Card } from "react-bootstrap";

const SingleEvent = ({ event }) => {
  const { name, img } = event;
  return (
    <>
      <Card className="h-100 shadow rounded-3">
        <Card.Img variant="top" src={img} />
        <Card.Body className="py-4">
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleEvent;
