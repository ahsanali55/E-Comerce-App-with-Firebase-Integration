import React from "react";
import { useSelector } from "react-redux";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const featuresData = [
    {
        icon: <FaShippingFast/> ,
        title: "Worldwide Shipping",
        flexsibility: "Order Above $100",
    },
    {
        icon: <FaArrowsRotate/> ,
        title: "Easy 30 Day Returns",
        flexsibility: "Back Returns in 7 Days",
    },
    {
        icon: <FaHandHoldingDollar/> ,
        title: "Money Back Guarantee",
        flexsibility: "Guarantee With In 30-Days",
    },
    {
        icon: <FaHeadphones/> ,
        title: "Easy Online Support",
        flexsibility: "24/7 Any Time Support",
    },
]

const Feature = () => {
  

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4  md:h-45">
      {featuresData.map((item, index) =>
       (
        <div
          className="flex items-center py-4 md:py-0  pl-7 gap-4 border-r-[0.09px] border-gray-50 bg-white rounded"
          key={index}
        >
          <div className="text-[35px] text-[#535bf2]">{item.icon}</div>

          <div>
            <h1 className="text-[20px] font-semibold text-[#1e1f23]">
              {item.title}
            </h1>
            <p className="text-gray-500">{item.flexsibility}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
