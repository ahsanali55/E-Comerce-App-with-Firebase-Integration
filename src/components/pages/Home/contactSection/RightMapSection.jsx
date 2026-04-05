import React, { useEffect } from 'react'
import AOS from "aos";
const RightMapSection = () => {
  useEffect(() => {
      AOS.init({ duration: 2000, easing: "ease-in-sine",  });
    }, []);
  return (
    <div className="w-full h-[600px] " 
     data-aos="fade-in"
      data-aos-delay="1"
      data-aos-offset="300"

      >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1696124215167!5m2!1sen!2sin"
        className="w-full h-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default RightMapSection
