import React from "react";
import "./style.css";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TopSection from "./TopSection";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1080px] w-11/12 p-4  mx-auto  flex flex-col gap-8">
        {/* Top Section */}
        <TopSection />

        {/* Bottom Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-between relative">
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;
