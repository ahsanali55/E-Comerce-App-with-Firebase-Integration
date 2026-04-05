import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

// => login with Facebook Code
const facebookProvider = new FacebookAuthProvider();
// facebookProvider.addScope("email"); // requesting email
const handleFacebookLogin = async () => {
  try {
    await signInWithPopup(auth, facebookProvider);
      navigate("/"); // navigate to home page
  } catch (error) {
    console.error(error);
  }
};
// => login with Google Code
const googleProvider = new GoogleAuthProvider();
const navigate = useNavigate();
const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    // 🔥 No dispatch here
    // onAuthStateChanged will handle Redux
    navigate("/"); // navigate to home page
  } catch (error) {
    console.error(error);
  }
};

const OtherSignIn = () => {
  return (
    <div className="text-center space-y-4 mt-3">
      <h3 className="text-gray-400">Or Sign in with</h3>
      <div className="flex items-center justify-center gap-2 ">
        <div
          onClick={handleGoogleLogin}
          className="bg-[#f1f2f5] p-2 rounded-lg"
        >
          <FcGoogle className="text-3xl" />
        </div>
        <div
          onClick={handleFacebookLogin}
          className="bg-[#f1f2f5] p-2 rounded-lg"
        >
          <FaFacebook className="text-blue-500 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default OtherSignIn;
