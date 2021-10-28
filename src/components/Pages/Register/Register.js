import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [event, setEvent] = useState({});
  const { user } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://tranquil-garden-58435.herokuapp.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container
      fluid
      className="login-section vh-100 text-center d-flex align-items-center"
    >
      <div className="bg-white w-50 mx-auto py-4 shadow-md rounded-3">
        <h2 className="mb-3">
          Register as a <span className="colored-text fw-bold">Volunteer</span>
        </h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            value={user?.displayName}
            {...register("Name", { required: true, maxLength: 80 })}
          />
          <input
            type="email"
            placeholder="Email"
            value={user?.email}
            {...register("Email", { required: true })}
          />
          <input
            type="date"
            placeholder="Date"
            {...register("Date", { required: true })}
          />
          <input
            type="text"
            placeholder="Description"
            {...register("Description", {})}
          />
          <input
            type="text"
            placeholder="EventName"
            value={event.name}
            {...register("EventName", { required: true })}
          />

          <Button className="volunteerzen-btn" variant="" type="submit">
            Register as a Volunteer
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Register;
