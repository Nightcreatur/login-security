import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LoginPage from "./Login";
import SignupPage from "./SignupPage";

import ForgotPassword from "./ForgetPass";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/forget" element={<ForgotPassword />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
