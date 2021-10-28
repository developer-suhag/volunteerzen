import React from "react";
import { Button, Card } from "react-bootstrap";
import "./SingleEvent.css";

const SingleEvent = ({ event, handleDelete }) => {
  const { _id, EventName, img, Date } = event;

  return (
    <>
      <Card className="p-3 rounded-3 shadow-sm">
        <div className="d-flex justify-content-between gap-3">
          <Card.Img className="img-fluid event-img shadow-md" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold colored-text">
              {EventName}
            </Card.Title>
            <p>
              <strong>{Date}</strong>
            </p>
            <div className="text-end">
              <Button onClick={() => handleDelete(_id)} variant="outline-dark">
                Cancel
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default SingleEvent;
