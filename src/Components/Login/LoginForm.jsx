import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../../api/config";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";
    if (username.validate() && password.validate()) {
      const resApi = await fetch(url, Post());
      const { token: tokenLogin } = await resApi.json();
      return tokenLogin;
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
