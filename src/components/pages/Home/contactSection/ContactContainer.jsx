import React from "react";
import TopContactHeading from "./TopContactHeading";
import BottomContactForm from "./BottomContactForm";

const ContactContainer = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto p-2 lg:p-4 w-11/12 max-w-[1080px] flex flex-col gap-8">
        <TopContactHeading />
        <BottomContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
