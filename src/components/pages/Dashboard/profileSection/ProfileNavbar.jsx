import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import LeftNav from "../../Home/navSection/LeftNav";

const ProfileNavbar = () => {
  return (
    <section className="w-full bg-white">
      <div className=" flex justify-between items-center font-semibold w-11/12  mx-auto max-w-[1080px] p-4 ">
        <div className="flex items-center gap-7">
          <LeftNav />
          <Link to="/">
            <h1 className="font-bold text-xl underline">Home</h1>
          </Link>
          <Link to="/add-to-cart" >
            <h1 className="font-bold text-xl underline">Cart</h1>
          </Link>
          <h1 className='font-bold text-xl underline'>Orders</h1>
        </div>
        <Logout />
      </div>
    </section>
  );
};

export default ProfileNavbar;
