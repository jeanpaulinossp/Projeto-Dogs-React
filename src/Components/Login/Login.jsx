import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPwLost from "./LoginPwLost";
import LoginPwReset from "./LoginPwReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginPwLost />} />
        <Route path="reset" element={<LoginPwReset />} />
      </Routes>
    </div>
  );
};

export default Login;
