import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("sucess")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  const signupWithGithub = () => {
    signInWithPopup(auth, githubProvider);
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <label>Email</label>
      <input
        style={{ margin: "10px" }}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter you email"
      />
      <br />
      <label>Password</label>
      <input
        style={{ margin: "10px" }}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="Enter password"
      />
      <br />
      <button onClick={signupWithGoogle}>Signin With Google</button>
      <button onClick={signupWithGithub}>Signin With Github</button>
      <button onClick={createUser}>Signup</button>
    </div>
  );
};

export default SignupPage;
