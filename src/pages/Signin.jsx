import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin success"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Signin Page</h1>
      <label>Email</label>
      <input
        style={{ margin: "10px" }}
        type="email"
        placeholder="Enter you email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <label>Password</label>
      <input
        style={{ margin: "10px" }}
        type="email"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <br />
      <button onClick={signinUser}>Signin</button>
    </div>
  );
};

export default SigninPage;
