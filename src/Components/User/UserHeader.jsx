import React, { useEffect, useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/post":
        setTitle("Poste sua Foto");
        break;
      case "/conta/statistics":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
    if ("/conta" === location.pathname) setTitle("Conta");
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
