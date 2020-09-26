import React from "react";

import Content from "../../components/Content";
import { FaPlus } from "react-icons/fa";

import { Header, Avatar, AddButton, Container, Title } from "./styles";

function App() {
  return (
    <Container>
      <Content>
        <Title>{["Bem vindo,", "Mateus"].join("\n")}</Title>
        <Header>
          <Avatar
            src="https://api.adorable.io/avatars/90/mateus@happy.png"
            alt="avatar"
          />
          <AddButton>
            <FaPlus color="#fff" size={22} />
          </AddButton>
        </Header>
      </Content>
    </Container>
  );
}

export default App;
