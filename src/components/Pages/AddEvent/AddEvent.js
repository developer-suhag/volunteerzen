import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddEvent.css";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Container
        fluid
        className="login-section vh-100 d-flex align-items-center"
      >
        <Container className="py-5">
          <h2 className="text-center mb-4 fs-1">
            Add a <span className="colored-text fw-bold">Event</span>
          </h2>
          <div>
            <form
              className="event-form shadow-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label>Event Title</label>
              <input
                className="input-field"
                type="text"
                placeholder="Event Title"
                {...register("title", { required: true })}
              />
              <label>Event Date</label>
              <input
                className="input-field"
                type="date"
                placeholder="Date"
                {...register("date", { required: true })}
              />
              <label>Event Description</label>
              <textarea
                className="input-field"
                placeholder="Descrition"
                {...register("description", { required: true })}
              />
              <label>Upload Banner</label>
              <input type="file" placeholder="img" />

              <input
                type="submit"
                value="Submit"
                className="volunteerzen-btn"
              />
            </form>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default AddEvent;
