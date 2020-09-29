export type NewMusicProps = {
  title: string;
  artist: string;
  genre: string;
  history?: History<any>;
};

export type Music = {
  id: number;
  title: string;
  artist: string;
  genre: string;
};

export type NewMusicStateProps = {
  loading: boolean;
  data: Object<any>;
  error: any;
};

export type ListMusicStateProps = {
  loading: boolean;
  musics: Music[];
  error: any;
};
