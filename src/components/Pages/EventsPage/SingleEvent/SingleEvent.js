import React from "react";

const SingleEvent = ({ event }) => {
  const { EventName, img } = event;
  return (
    <div>
      <img src={img} alt="" />
      <h3>{EventName}</h3>
    </div>
  );
};

export default SingleEvent;
