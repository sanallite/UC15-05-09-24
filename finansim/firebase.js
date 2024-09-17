// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnvyntMWiNO-tLgQ11Uq47sh6n_i_yAdc",
  authDomain: "sanallite-finansim.firebaseapp.com",
  projectId: "sanallite-finansim",
  storageBucket: "sanallite-finansim.appspot.com",
  messagingSenderId: "477598190655",
  appId: "1:477598190655:android:a31b98f2888917752bbc8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
