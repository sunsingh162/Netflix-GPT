import React, { useRef, useState } from "react";
import Header from "./Header";
import { handleValidateData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormButtonClick = () => {
    //Validate credentials
    const validationMessage = handleValidateData(
      email.current.value,
      password.current.value
    );
    setMessage(validationMessage);
    if (message) return;

    if (!isSignInForm) {
      //handle SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
        });
    } else {
      //handle SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="object-cover w-screen h-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-0 right-0 w-full p-8 m-20 mx-auto text-white bg-black rounded-lg md:w-3/12 bg-opacity-80"
      >
        <h1 className="py-4 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700 rounded-lg"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-4 my-4 bg-gray-700"
          ref={email}
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-4 my-4 bg-gray-700"
          ref={password}
        />
        <p className="text-red-500">{message}</p>
        <button
          onClick={handleFormButtonClick}
          className="w-full p-4 my-6 bg-red-700 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignUp} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
