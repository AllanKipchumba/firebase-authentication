import react from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/Authcontext";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl fnt-bold">
          Firebase Auth & Context
        </h1>
        <AuthContextProvider>
          <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route
              path="/account"
              exact
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
};

export default App;
