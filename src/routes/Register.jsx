import React from "react";
import SignUp from "../components/pages/auth/signUp/SignUp";
import { AnimatePresence, motion } from "framer-motion";
import RouteLoader from "../components/pages/Toploader/RouteLoader";

const Siginup = () => {
  return (
    <div>
      <RouteLoader />
      <SignUp />
    </div>
  );
};

export default Siginup;
