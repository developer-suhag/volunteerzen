import React from "react";
import error from "../../../images/404 Error Page not Found.gif";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router";

const PageNotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <div className="text-center">
        <img src={error} alt="" />
      </div>
      <div className="text-center">
        <Button onClick={handleClick} className="volunteerzen-btn " variant="">
          <span className="btn-svg me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          Go back to Home
        </Button>
      </div>
    </Container>
  );
};

export default PageNotFound;
