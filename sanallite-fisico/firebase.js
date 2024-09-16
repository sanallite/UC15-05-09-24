// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARGho89aGWIwbrnaz_W_nSFup6-0N1TyI",
  authDomain: "sanallite-fisico.firebaseapp.com",
  projectId: "sanallite-fisico",
  storageBucket: "sanallite-fisico.appspot.com",
  messagingSenderId: "462400958716",
  appId: "1:462400958716:android:f1d143521ed56635446779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
