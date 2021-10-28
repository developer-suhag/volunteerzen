import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleEvent from "../../../Shared/SingleEvent/SingleEvent";

import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const loadEvents = async () => {
      const res = await fetch(
        "https://tranquil-garden-58435.herokuapp.com/services"
      );
      const data = await res.json();
      setEvents(data);
      setIsLoading(false);
    };
    loadEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <>
      <Container fluid className="events-section">
        <Container className="py-5">
          <div>
            <h3 className="text-uppercase text-center fs-2 mb-5">
              Our <span className="colored-text">Events</span>
            </h3>
          </div>
          <Row xs={1} md={2} lg={4} className="g-4">
            {events.map((event) => (
              <Col key={event._id}>
                <SingleEvent event={event}></SingleEvent>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Events;
