import React from "react";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className=" w-full bg-[#2a2c30]  ">
      {/* === Top header === */}
      <div className="flex justify-between  w-11/12 max-w-[1080px] mx-auto p-2  md:p-4">
        <p className="text-white md:tracking-tighter max-w-[200px]  md:max-w-[400px] lg:w-full">
          Free shipping, 30-day return or refund guarantee.
        </p>
        <div className="flex items-center gap-3 md:gap-10 hover:[#535bf2] ">
          <Link to="">
          <button className="text-white hover:text-[#535bf2] cursor-pointer text-[14px] lg:text-xl">
            SIGN IN
          </button>
          
          </Link>
          <Link to="">
          <button className="text-white hover:text-[#535bf2] cursor-pointer text-[14px] lg:text-xl">
            SIGN UP
          </button>
          
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
