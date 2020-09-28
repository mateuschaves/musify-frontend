import React, { useState } from "react";

import Content from "../../components/Content";
import Music from "../../components/Music";

import NewMusicModal from "../../components/NewMusicModal";
import ShowMusicModal from "../../components/ShowMusicModal";

import { FaPlus } from "react-icons/fa";

import { Header, Avatar, AddButton, Container, Title, Musics } from "./styles";

type MusicSelected = {
  track: number;
  title: string;
  artist: string;
  genre: string;
};

function MusicsScreen() {
  const [showNewMusicModal, setShowNewMusicModal] = useState<boolean>(false);
  const [showMusicModal, setShowMusicModal] = useState<boolean>(false);

  const [musicSelected, setMusicSelected] = useState<MusicSelected>({
    track: 0,
    title: "",
    artist: "",
    genre: "",
  });

  function handleSelectMusic(
    track: number,
    title: string,
    artist: string,
    genre: string
  ) {
    setMusicSelected({
      track,
      title,
      artist,
      genre,
    });

    setShowMusicModal(true);
  }

  return (
    <Container>
      <Content>
        <Title>{["Bem vindo,", "Mateus"].join("\n")}</Title>
        <Header>
          <Avatar
            src="https://api.adorable.io/avatars/90/mateus@happy.png"
            alt="avatar"
          />
          <AddButton onClick={() => setShowNewMusicModal(true)}>
            <FaPlus color="#fff" size={22} />
          </AddButton>
        </Header>

        <Musics>
          <Music
            onClick={() =>
              handleSelectMusic(
                1,
                "Geraldo Vandre",
                "Pra não dizer que não falei das flores",
                "MPB"
              )
            }
            track={1}
            artist="Geraldo Vandre"
            title="Pra não dizer que não falei das flores"
            genre="MPB"
          />
        </Musics>
        <NewMusicModal
          show={showNewMusicModal}
          setShow={setShowNewMusicModal}
        />
        {ShowMusicModal && (
          <ShowMusicModal
            show={showMusicModal}
            setShow={setShowMusicModal}
            track={musicSelected.track}
            title={musicSelected.title}
            artist={musicSelected.artist}
            genre={musicSelected.genre}
          />
        )}
      </Content>
    </Container>
  );
}

export default MusicsScreen;
