import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavbarActions } from "../../../../store/navSlice";

const IsShow = () => {
  const isShow = useSelector((state) => state.navbar.isShow);
  const dispatch = useDispatch();

  const handleHideSidebar = () => {
    console.log("Clicked")
    dispatch(NavbarActions.ShowSideBar());
  };

  return (
    <>
      {isShow ? (
        <>
          <div
            className="fixed  transition-all duration-1000 top-0 z-40 w-full h-full bg-gray-300 opacity-60"
            onClick={handleHideSidebar}
          ></div>{" "}
        </>
      ) : null}
    </>
  );
};

export default IsShow;
