import React from "react";
import ProfileNavbar from "./ProfileNavbar";
import Orders from "./orders/Orders";
import { AnimatePresence, motion } from "framer-motion";

const ProfileWholeSection = () => {
  return (
    <div className="w-full h-screen bg-[#F5F5F5]">
        <motion.div
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
      <ProfileNavbar />
      <Orders />
      </motion.div>
    </div>
  );
};

export default ProfileWholeSection;
