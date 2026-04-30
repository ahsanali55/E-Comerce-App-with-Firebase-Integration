import React from "react";
import Login from "../components/pages/auth/login/Login";
import RouteLoader from "../components/pages/Toploader/RouteLoader";

const Signin = () => {
  return (
    <div>
      <RouteLoader />
      <Login />
    </div>
  );
};

export default Signin;

