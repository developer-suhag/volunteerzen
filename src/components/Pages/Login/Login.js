import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import google from "../../../images/google.png";
import "./Login.css";
import swal from "sweetalert";

const Login = () => {
  const { handleGoogleSignIn, setIsLoading } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirectURI = location.state?.from || "/";

  const handleGoogleLogin = () => {
    handleGoogleSignIn()
      .then((result) => {
        history.push(redirectURI);
        swal({
          title: "Login Success",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          title: `${error.message}`,
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      <Container
        fluid
        className="login-section vh-100 d-flex align-items-center"
      >
        <div className="bg-white w-50 mx-auto p-5 text-center colored-text shadow-lg rounded-3">
          <h2>Please Log In</h2>
          <div>
            <Button
              onClick={handleGoogleLogin}
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
