import { all } from "redux-saga/effects";

import { watchSignIn } from "./Auth/signIn";
import { watchNewMusic } from "./Music/newMusic";
import { watchListMusic } from "./Music/listMusic";

export default function* rootSaga() {
  yield all([watchSignIn(), watchNewMusic(), watchListMusic()]);
}
