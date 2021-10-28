import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";

const SingleEvent = ({ event }) => {
  const { _id, name, img } = event;
  const history = useHistory();

  const color = {
    red: Math.floor(Math.random() * 111),
    green: Math.floor(Math.random() * 209),
    blue: Math.floor(Math.random() * 199),
  };

  const hanldeClick = (id) => {
    history.push(`/register/${id}`);
  };

  return (
    <>
      <Card
        style={{ cursor: "pointer" }}
        onClick={() => hanldeClick(_id)}
        className="h-100 shadow rounded-3 "
      >
        <Card.Img variant="top" src={img} />
        <Card.Body
          style={{
            backgroundColor:
              "rgb(" + color.red + "," + color.green + "," + color.blue + ")",
          }}
          className="py-4 text-white text-center"
        >
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleEvent;
