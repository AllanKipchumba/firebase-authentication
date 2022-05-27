import react from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Account from "./components/Account";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl fnt-bold">
          Firebase Auth & Context
        </h1>
        <Routes>
          <Route path="/" exact element={SignIn} />
          <Route path="/signup" exact element={SignUp} />
          <Route path="/accout" exact element={Account} />
        </Routes>
      </div>
    </>
  );
};

export default App;
