import React from "react";

const SingleEvent = ({ event }) => {
  const { EventName } = event;
  return (
    <div>
      <h3>{EventName}</h3>
    </div>
  );
};

export default SingleEvent;
