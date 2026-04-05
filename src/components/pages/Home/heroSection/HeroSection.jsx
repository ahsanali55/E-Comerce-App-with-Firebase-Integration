import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import ShapeDivider from "./ShapeDivider";

const HeroSection = () => {
  return (
    <div className="w-full border-none min-h-[500px] lg:min-h-[700px]  bg-linear-to-tr from-[#3d86fa] relative via-[#679eff] to-[#ebf3fe] flex ">
      <div className=" w-11/12 max-w-[1080px]  mx-auto p-2 md:p-4 flex  flex-col lg:flex-row mt-10 md:mt-20 gap-8">
        <LeftHero />
        <RightHero />
      </div>

      <ShapeDivider />
    </div>
  );
};

export default HeroSection;
