import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MiddleSection = () => {
  useEffect(() => {
    AOS.init({  easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="relative p-2 order-3 lg:order-2 "
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
   
      <div
        className="p-2  max-w-[320px] min-h-[320px] relative "
      >
        <svg
          className="absolute -top-[3px] hidden md:block -left-[3px] w-full h-full  animate pointer-events-none opacity-50"
          fill="none"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            stroke="#83b1f7"
            strokeWidth="2"
            strokeDasharray="16 16"
            //   6 = dash length, 8 = space
            rx="500"
            ry="500"
          />
        </svg>

        <div className="color-change-delay md:w-[300px] md:h-[300px] rounded-full  flex justify-center items-center relative border-4 border-gray-200">
         
          <img
            src="/images/ecompost.png"
            className=" md:h-[290px] md:w-[250px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
