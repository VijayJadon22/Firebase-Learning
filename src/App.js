import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";
import './App.css';
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { useEffect, useState } from "react";


const auth = getAuth(app);

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //yes you are logged in
        console.log("User: ", user);
        setUser(user);
      } else {
        //user is logged out
        console.log("You are logged out");
        setUser(null);
      }
    })
  }, []);

  if (user === null) {
    return (
      <div className="App">
        <h1>Firebase React App</h1>
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hello, {user.email}</h1>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}

export default App;
