// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC36N572uowUIFclwCJUOG-jcV1PYQkqZA",
  authDomain: "netflixgpt-f8a6e.firebaseapp.com",
  projectId: "netflixgpt-f8a6e",
  storageBucket: "netflixgpt-f8a6e.appspot.com",
  messagingSenderId: "951664395263",
  appId: "1:951664395263:web:23d9c6759f00e600d3ddca",
  measurementId: "G-DD00XSTTYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();