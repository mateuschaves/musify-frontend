import React, { useState } from "react";

import { signInActions } from "../../store/ducks/Auth/signIn";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Container, Input, Title, Form, Button } from "./styles";

export default function SigninScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSignIn(email: string, password: string) {
    dispatch(
      signInActions.signIn({
        email,
        password,
        history,
      })
    );
  }

  return (
    <Container>
      <Form>
        <Title>{["Entre agora mesmo", "no Musify"].join("\n")}</Title>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <Button type="button" onClick={() => handleSignIn(email, password)}>
          ENTRAR
        </Button>
      </Form>
    </Container>
  );
}
