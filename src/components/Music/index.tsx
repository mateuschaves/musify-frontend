import React from "react";

import { FaPlayCircle } from "react-icons/fa";

import { Container, Title, Artist, Genre, Column, Row, Track } from "./styles";

type MusicProps = {
  track: number;
  title: string;
  artist: string;
  genre: string;
};

export default function Music({ track, title, artist, genre }: MusicProps) {
  return (
    <Container>
      <Row>
        <FaPlayCircle color="#1db954" size={20} />
        <Track># {track}</Track>
      </Row>

      <Column>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
      </Column>

      <Genre>{genre}</Genre>
    </Container>
  );
}
