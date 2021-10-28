import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./EventPage.css";
import SingleEvent from "./SingleEvent/SingleEvent";
import swal from "sweetalert";

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

  // handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel?");
    if (proceed) {
      fetch(`http://localhost:5000/events/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            setEvents([]);
            swal({
              title: "Delete Successful",
              icon: "success",
            });
          }
        });
    }
  };

  return (
    <>
      <Container className="py-5 vh-100">
        <Row xs={1} md={2} lg={2} className="g-4">
          {events?.map((event) => (
            <Col key={event._id}>
              <SingleEvent
                event={event}
                handleDelete={handleDelete}
              ></SingleEvent>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default EventsPage;
