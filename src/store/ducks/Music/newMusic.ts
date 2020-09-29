import { ActionProps } from "../../../@types/General";
import { NewMusicStateProps, NewMusicProps } from "../../../@types/Music";

export const newMusicTypes = {
  NEW_MUSIC_REQUEST: "music/NEW_MUSIC_REQUEST",
  NEW_MUSIC_SUCCESS: "music/NEW_MUSIC_SUCCESS",
  NEW_MUSIC_ERROR: "music/NEW_MUSIC_ERROR",
};

export const newMusicActions = {
  newMusic: ({ title, genre, artist, history }: NewMusicProps) => ({
    type: newMusicTypes.NEW_MUSIC_REQUEST,
    payload: { title, genre, artist },
    history,
  }),
  newMusicSuccess: (data: any) => ({
    type: newMusicTypes.NEW_MUSIC_SUCCESS,
    payload: data,
  }),
  newMusicError: (error: any) => ({
    type: newMusicTypes.NEW_MUSIC_ERROR,
    payload: error,
  }),
};

const initialState: NewMusicStateProps = {
  musics: [],
  loading: false,
  error: null,
};

export const newMusicReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case newMusicTypes.NEW_MUSIC_REQUEST:
      return { ...state, loading: true };
    case newMusicTypes.NEW_MUSIC_SUCCESS:
      return { ...state, loading: false, musics: action.payload };
    case newMusicTypes.NEW_MUSIC_ERROR:
      return {
        ...state,
        loading: false,
        musics: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
