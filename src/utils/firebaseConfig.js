// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4RajfpfrKiPIGvrPzqOqRZSQRteF90wE",
  authDomain: "ahsanstore-f8373.firebaseapp.com",
  databaseURL: "https://ahsanstore-f8373-default-rtdb.firebaseio.com",
  projectId: "ahsanstore-f8373",
  storageBucket: "ahsanstore-f8373.firebasestorage.app",
  messagingSenderId: "126299759436",
  appId: "1:126299759436:web:dce02a7cbd981e252365e9",
  measurementId: "G-WK6XPWB48N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const appleProvider = new OAuthProvider(); 

export const realTimeDB = getDatabase(app);

export default app;
