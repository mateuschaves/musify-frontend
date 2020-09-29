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

export default {
  newMusic,
};
