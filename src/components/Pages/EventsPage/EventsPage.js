import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./EventPage.css";
import SingleEvent from "./SingleEvent/SingleEvent";
const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const email = user?.email;
  const emails = { email };
  const values = Object.values(emails);
  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        "https://tranquil-garden-58435.herokuapp.com/events/byEmail",
        values
      )
      .then((events) => {
        setEvents(events.data);
        setIsLoading(false);
      });
  }, []);

  // console.log(events);
  if (isLoading) {
    return (
      <div className="text-center py-4">
        <Spinner animation="border" variant="info" />
      </div>
    );
  }

  return (
    <>
      <Container className="py-5 vh-100">
        <Row xs={1} md={2} lg={2} className="g-4">
          {events.map((event) => (
            <Col key={event._id}>
              <SingleEvent event={event}></SingleEvent>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default EventsPage;
