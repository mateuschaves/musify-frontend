import { ActionProps } from "../../../@types/General";
import { ListMusicStateProps } from "../../../@types/Music";

export const listMusicTypes = {
  LIST_MUSIC_REQUEST: "music/LIST_MUSIC_REQUEST",
  LIST_MUSIC_SUCCESS: "music/LIST_MUSIC_SUCCESS",
  LIST_MUSIC_ERROR: "music/LIST_MUSIC_ERROR",
};

export const listMusicActions = {
  listMusic: () => ({
    type: listMusicTypes.LIST_MUSIC_REQUEST,
    payload: {},
  }),
  listMusicSuccess: (data: any) => ({
    type: listMusicTypes.LIST_MUSIC_SUCCESS,
    payload: data,
  }),
  listMusicError: (error: any) => ({
    type: listMusicTypes.LIST_MUSIC_ERROR,
    payload: error,
  }),
};

const initialState: ListMusicStateProps = {
  musics: [],
  loading: false,
  error: null,
};

export const listMusicReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case listMusicTypes.LIST_MUSIC_REQUEST:
      return { ...state, loading: true };
    case listMusicTypes.LIST_MUSIC_SUCCESS:
      return { ...state, loading: false, musics: action.payload };
    case listMusicTypes.LIST_MUSIC_ERROR:
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
