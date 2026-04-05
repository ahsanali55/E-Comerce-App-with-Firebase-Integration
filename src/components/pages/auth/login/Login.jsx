import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { auth } from "../../../../utils/firebaseConfig";
import { FaChevronLeft } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [showPass, setshowPass] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setOpen(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      );
      // alert("You have Successfully Logged In Now.");
      navigate("/");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className="w-full h-full bg-[#E8ECF4]">
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="w-11/12 h-screen max-w-[1080px] mx-auto  flex items-center justify-center relative">
            <Link to="/">
              <div className="absolute top-10 text-2xl left-10 p-5 bg-white rounded-full ">
                <FaChevronLeft />
              </div>
            </Link>
            {/* Login */}
            <div className="p-7 shadow-2xl w-full max-w-[400px] min-h-[400px] bg-white rounded-xl ">
              {/* Logo */}
              <div className="mx-auto p-0.5 border-4 flex w-[170px] mt-4">
                <h1 className="font-extrabold bg-black text-white px-2">
                  AHSAN
                </h1>
                <h1 className="font-extrabold px-2">STORE</h1>
              </div>

              {/* form -> email passward */}
              <form
                className="flex flex-col gap-2.5  mt-5 p-4"
                onSubmit={(e) => handleLogin(e)}
              >
                <label htmlFor="email" className="font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  ref={email}
                  name=""
                  className="bg-[#eff2f8] p-2 pl-3 rounded-md placeholder:text-gray-400placeholder:pl-1 border-none outline-none"
                  placeholder="jhon123@example.com"
                  id="email"
                />

                <label
                  htmlFor="password"
                  className="font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="flex bg-[#eff2f8] items-center rounded-md">
                  <input
                    type={showPass ? "text" : "password"}
                    className=" p-2 pl-3  placeholder:text-gray-400 placeholder:pl-1 w-full border-none outline-none"
                    name=""
                    ref={password}
                    placeholder="Enter Password"
                    id=""
                  />
                  <span
                    className="text-gray-400 pr-2"
                    onClick={() => setshowPass(!showPass)}
                  >
                    {showPass ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>

                <button className="w-full bg-[#3497e9] text-white py-2 rounded-3xl mt-4 tracking-wider font-semibold ">
                  <Link to="/profile"></Link>
                  <div>Login</div>
                </button>
                <button className="w-full bg-black text-white py-2 rounded-3xl mt-4 tracking-wider font-semibold ">
                  <Link to="/register">
                    <div>Register</div>
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress sx={{ color: "#535BF2" }} />
      </Backdrop>
    </>
  );
};

export default Login;
