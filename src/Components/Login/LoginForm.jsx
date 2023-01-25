import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api/config";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button/Button";
import Input from "../Forms/Input/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  });

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const resApiUser = await fetch(url, options);
    const { id, username, nome, email } = await resApiUser.json();
    console.log(id, username, nome, email);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });
    if (username.validate() && password.validate()) {
      const resApiToken = await fetch(url, options);
      const { token: tokenLogin } = await resApiToken.json();
      window.localStorage.setItem("token", tokenLogin);
      getUser(tokenLogin);
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
