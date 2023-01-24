import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../api/config";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
    const resApi = await fetch(url, Post(username, password));
    const { token: tokenLogin } = await resApi.json();
    return tokenLogin;
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
