import React from "react";

import Content from "../../components/Content";
import Music from "../../components/Music";

import { FaPlus } from "react-icons/fa";

import { Header, Avatar, AddButton, Container, Title, Musics } from "./styles";

function MusicsScreen() {
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

        <Musics>
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
          <Music
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
        </Musics>
      </Content>
    </Container>
  );
}

export default MusicsScreen;
