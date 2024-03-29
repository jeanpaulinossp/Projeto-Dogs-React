import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPwLost from "./LoginPwLost";
import LoginPwReset from "./LoginPwReset";
import NotFound from "../Helper/NotFound";
import { useSelector } from "react-redux";
import Loading from "../Helper/Loading";

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);

  if (loading) return <Loading />;
  if (data) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LoginPwLost />} />
          <Route path="reset" element={<LoginPwReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
