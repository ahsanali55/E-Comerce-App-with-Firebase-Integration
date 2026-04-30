import React, { useRef, useState } from "react";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface CreateAnAccountProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateAnAccount = ({setOpen}: CreateAnAccountProps) => {
  const [showPass, setshowPass] = useState(false);
  const [checkbox, setCheck] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const navigate = useNavigate();

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // Create Account Here
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
    setIsCreated(true);
  };
  
  useEffect(() => {
    if (isCreated === true) {
      navigate("/");
    }

    return () => {};
  }, [isCreated, navigate]);



  return (
    <form
      className="flex flex-col gap-2.5  mt-5 p-4"
      onSubmit={(event) => handleSignUp(event)}
    >
      <label htmlFor="name" className="font-semibold text-gray-700">
        Name
      </label>
      <input
        type="text"
        ref={name}
        name=""
        className="bg-[#eff2f8] p-2 pl-3 rounded-md placeholder:text-gray-400placeholder:pl-1 border-none outline-none"
        placeholder="Enter your name..."
        id="name"
      />

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

      <label htmlFor="password" className="font-semibold text-gray-700">
        Password
      </label>
      <div className="flex bg-[#eff2f8] items-center rounded-md">
        <input
          type={showPass ? "text" : "password"}
          ref={password}
          className=" p-2 pl-3  placeholder:text-gray-400 placeholder:pl-1 w-full border-none outline-none"
          name=""
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

      <div className="flex gap-2">
        <div
          className="bg-[#eff2f8] w-6 flex items-center justify-center"
          onClick={() => setCheck(!checkbox)}
        >
          {checkbox && <FaCheck className="text-[10px] text-gray-500" />}
        </div>
        <p className="">
          I agree to the <span className="text-[#3497e9]">Terms of Sevice</span>
        </p>
      </div>

      <button 
      
      className="w-full bg-[#3497e9] text-white py-2 rounded-3xl mt-5 tracking-wider font-semibold ">
        Create An Account
      </button>
    </form>
  );
};

export default CreateAnAccount;

