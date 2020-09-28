import React, { useState } from "react";

import { Container, Input, Title, Form, Button } from "./styles";

export default function SignupScreen() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <Form>
        <Title>{["Cadastre-se agora mesmo", "no Musify"].join("\n")}</Title>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="name"
        />
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

        <Button>CADASTRAR</Button>
      </Form>
    </Container>
  );
}
