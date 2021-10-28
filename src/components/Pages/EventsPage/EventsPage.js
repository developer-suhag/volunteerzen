import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./EventPage.css";
import SingleEvent from "./SingleEvent/SingleEvent";
const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const { user } = useAuth();
  const email = user?.email;
  const emails = { email };
  const values = Object.values(emails);
  useEffect(() => {
    axios
      .post("http://localhost:5000/events/byEmail", values)
      .then((events) => {
        setEvents(events.data);
      });
  }, []);

  console.log(events);

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
