import React from "react";
import Sale from "./Sale";
import Feature from "./Feature";

const SaleAndFeature = () => {
  return (
    <div className="w-full bg-[#f7f7f7] pt-16 z-10 relative">
      <div className="w-11/12 max-w-[1080px] p-2 md:p-4 space-y-6  mx-auto">
        <Sale />
        <Feature />
      </div>
    </div>
  );
};

export default SaleAndFeature;
