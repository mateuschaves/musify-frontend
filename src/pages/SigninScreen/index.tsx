import React, { useState } from "react";

import { Container, Input, Title, Form, Button } from "./styles";

export default function SigninScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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

        <Button>ENTRAR</Button>
      </Form>
    </Container>
  );
}
