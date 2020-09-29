import { call, put, takeLatest } from "redux-saga/effects";

import { MusicService } from "../../../services/api/resources";

import { listMusicActions, listMusicTypes } from "../../ducks/Music/listMusic";

export function* listMusicSaga() {
  try {
    const response = yield call(MusicService.listMusic);

    yield put(listMusicActions.listMusicSuccess(response.data));
  } catch (error) {
    yield put(listMusicActions.listMusicError(error));
  }
}

export function* watchListMusic() {
  yield takeLatest(listMusicTypes.LIST_MUSIC_REQUEST, listMusicSaga);
}
