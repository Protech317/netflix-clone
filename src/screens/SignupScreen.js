import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

import AlertComponent from "./AlertComponent";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const register = (e) => {
    e.preventDefault();

    setShowAlert(true);

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    setShowAlert(true);
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert("Invalid username or password"));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // register();
    // Perform your validation or API call
    // On error:
    setAlertMessage("Invalid username or password");
    setShowAlert(true);
  };

  return (
    <div className="signupScreen">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
      {showAlert && (
        <AlertComponent
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default SignupScreen;
