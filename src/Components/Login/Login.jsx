import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPwLost from "./LoginPwLost";
import LoginPwReset from "./LoginPwReset";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPwLost />} />
          <Route path="reset" element={<LoginPwReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
