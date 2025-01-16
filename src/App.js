import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";
import './App.css';
import SignupPage from "./pages/signup";


const auth = getAuth(app);

function App() {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "avi123@gmail.com", "vijay123")
      .then((value) => console.log(value));
  }

  return (
    <div className="App">
      <h1>Firebase React App</h1>
      <SignupPage />
    </div>
  );
}

export default App;
