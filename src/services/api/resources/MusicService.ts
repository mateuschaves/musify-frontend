import client from "../client";
import { NewMusicProps } from "../../../@types/Music";

const newMusic = ({ title, artist, genre }: NewMusicProps) => {
  return client({
    url: "musics",
    method: "POST",
    data: {
      title,
      artist,
      genre,
    },
  });
};

const listMusic = () => {
  return client({
    url: "musics",
    method: "GET",
  });
};

export default {
  newMusic,
  listMusic,
};
