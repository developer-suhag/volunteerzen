import React from "react";
import useAuth from "../../../hooks/useAuth";
import Banner from "./Banner/Banner";
import Events from "./Events/Events";
import Mission from "./Mission/Mission";

const Home = () => {
  // const { handleGoogleSignIn } = useAuth();
  // console.log(handleGoogleSignIn);
  return (
    <div>
      <Banner></Banner>
      <Mission></Mission>
      <Events></Events>
    </div>
  );
};

export default Home;
