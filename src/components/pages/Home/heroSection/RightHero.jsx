import React from "react";
import { useSelector } from "react-redux";

const RightHero = () => {
  const heroValue = useSelector((state) => state.hero)
  return (
    <div className="w-full relative"
    data-aos="fade-up"
    data-aos-duration='1000'
    data-aos-delay="200"
    >
      <img src={`/images/${heroValue.image}`} className="" alt="" />
    </div>
  );
};

export default RightHero;
