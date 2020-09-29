import { call, put, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import { ActionProps } from "../../../@types/General";
import { MusicService } from "../../../services/api/resources";

import { newMusicActions, newMusicTypes } from "../../ducks/Music/newMusic";
import { listMusicActions } from "../../ducks/Music/listMusic";

export function* newMusicSaga({ payload }: ActionProps) {
  try {
    const { title, artist, genre } = payload;

    const response = yield call(MusicService.newMusic, {
      title,
      artist,
      genre,
    });

    yield put(newMusicActions.newMusicSuccess(response.data));
    yield put(listMusicActions.listMusic());

    toast("Música adicionada com sucesso !", { type: "success" });
  } catch (error) {
    yield put(newMusicActions.newMusicError(error));
  }
}

export function* watchNewMusic() {
  yield takeLatest(newMusicTypes.NEW_MUSIC_REQUEST, newMusicSaga);
}
