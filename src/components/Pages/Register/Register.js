import React from "react";
import { Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Register.css";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container
      fluid
      className="login-section vh-100 text-center d-flex align-items-center"
    >
      <div className="bg-white w-50 mx-auto py-4 shadow-md rounded-3">
        <h2 className="mb-3">
          Register as a <span className="colored-text">Volunteer</span>
        </h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("Name", { required: true, maxLength: 80 })}
          />
          <input
            type="email"
            placeholder="Email"
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
