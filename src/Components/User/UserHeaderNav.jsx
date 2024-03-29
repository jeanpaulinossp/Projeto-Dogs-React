import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./UserHeaderNav.module.css";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";
import { useDispatch } from "react-redux";
import { userLogout } from "../../Store/user";

const UserHeaderNav = () => {
  // menu mobile
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const dispatch = useDispatch();
  return (
    <>
      {/* // button menu mobile */}
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/statistics">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/post">
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={() => dispatch(userLogout())}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
