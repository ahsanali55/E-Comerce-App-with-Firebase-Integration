import React from "react";
import Login from "../components/pages/auth/login/Login.jsx";
import RouteLoader from "../components/pages/Toploader/RouteLoader.jsx";

const Signin = () => {
  return (
    <div>
      <RouteLoader />
      <Login />
    </div>
  );
};

export default Signin;
