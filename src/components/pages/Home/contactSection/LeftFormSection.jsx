import React from "react";

const LeftFormSection = () => {
  return (
    <div
      className="w-full"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="0"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <form action="" className="flex flex-col gap-10">
        <label htmlFor="fullName" className="font- ">
          {" "}
          <h1>Full Name: </h1>
          <div className="border p-1 px-2">
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name..."
              className="placeholder:font-normal w-full p-1 border-0 outline-none"
            />
          </div>
        </label>
        <label htmlFor="email">
          <h1>Email Address:</h1>
          <div className="border p-1 px-2">
            <input
              type="email"
              name=""
              id="email"
              placeholder="...@gmail.com"
              className="placeholder:font-normal w-full p-1 border-0 outline-none"
            />
          </div>
        </label>
        <label htmlFor="subject">
          <h1>Subject:</h1>
          <div className="border p-1 px-2">
            <input
              type="text"
              id="subject"
              placeholder="Title of your message..."
              className="placeholder:font-normal w-full p-1 border-0 outline-none"
            />
          </div>
        </label>
        <label htmlFor="message">
          <h1>Message:</h1>
          <div className="border p-1 px-2">
            <textarea
              name=""
              id="message"
              className="placeholder:font-normal w-full p-1 border-0 outline-none"
              rows={10}
              cols={30}
              placeholder="We are always here to help you"
            ></textarea>
          </div>
        </label>
        <button className="bg-[#292C30] text-white text-center py-2 rounded-md  border-2  hover:border-2 hover:border-[#292C30] hover:bg-white hover:text-[#292C30] cursor-pointer  max-w-[150px]">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default LeftFormSection;
