import React, { useEffect, useRef, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ProfileActions } from "../../../../store/profileSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../../utils/firebaseConfig";

const RightNav = () => {
  const cart = useSelector((state) => state.cart);
  const isDropDown = useSelector((state) => state.profile.isDropDown);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleDropDown = (e) => {
    e.stopPropagation();
    dispatch(ProfileActions.toggleDropDown());
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside the dropdown, close it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(ProfileActions.closeDropDown());
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dispatch]);

  const handleLogout = async() => {
    await signOut(auth)
  }

  

  return (
    <div className="md:flex items-center z-10 gap-8 hidden ">
      {/* nav  */}
      <ul className="flex gap-8">
        <Link to="/" className="group relative">
          <li className="font-bold cursor-pointer hover:text-[#535bf2]">
            HOME
          </li>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#535bf2] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="group relative">
          <li className="font-bold cursor-pointer hover:text-[#535bf2]">
            ABOUT
          </li>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
        </Link>
        <Link to="/product" className="group relative">
          <li className="font-bold cursor-pointer hover:text-[#535bf2]">
            PRODUCTS
          </li>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
        </Link>
        <Link to="/contact" className="group relative">
          <li className="font-bold cursor-pointer hover:text-[#535bf2]">
            CONTACTS
          </li>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
        </Link>
      </ul>

      <div
        className="flex cursor-pointer relative group "
        onClick={handleDropDown}
        ref={dropdownRef}
      >
        <CgProfile className="text-3xl" />
        <RiArrowDropDownLine className="text-3xl" />
        {isDropDown ? (
          <div
            className={`absolute top-9 -left-17 overflow-hidden rounded-md max-w-[150px]  w-10/5 shadow-lg bg-[#2A2C30] text-white  ${isDropDown ? "opacity-100 transition-all duration-500" : "opacity-0 transition-all duration-500"}`}
          >
            {!user && (
              <>
                <Link to="/signIn">
                  <div className="hover:bg-[#414142] px-3 py-2 duration-200">
                    Login
                  </div>
                </Link>
                <Link to="/register">
                  <div className="hover:bg-[#414142] px-3 py-2 duration-200">
                    Register
                  </div>
                </Link>
              </>
            )}
            {
              user && (
                <>
                <Link to="/signIn">
                  <div className="hover:bg-[#414142] px-3 py-2 duration-200" onClick={handleLogout}>
                    LogOut
                  </div>
                </Link>
                <Link to="/profile">
                  <div className="hover:bg-[#414142] px-3 py-2 duration-200" >
                    Profile
                  </div>
                </Link>
                </>
              )
            }
          </div>
        ) : null}
      </div>

      <Link to="/add-to-cart">
        <button className="flex items-center gap-1 bg-[#2a2c30] pl-5 pr-7 rounded-md pb-2.5 pt-4 relative cursor-pointer hover:scale-105 duration-300">
          <FaCartArrowDown className="text-white text-[20px]" />
          <sup className="text-white absolute top-3 right-3 font-bold">
            {cart.cartItem.length}
          </sup>
        </button>
      </Link>
    </div>
  );
};

export default RightNav;
