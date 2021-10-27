import React from "react";
import { Button, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import google from "../../../images/google.png";
import "./Login.css";

const Login = () => {
  const { handleGoogleSignIn } = useAuth();
  return (
    <>
      <Container fluid className="login-section py-5">
        <div className="bg-white w-50 mx-auto p-4 py-5 my-5 text-center colored-text">
          <h2>Please Log In</h2>
          <div>
            <Button
              onClick={handleGoogleSignIn}
              variant="light"
              className="px-4 my-3"
            >
              <img src={google} alt="" />
              <span className="ms-2">Continue with Google</span>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
