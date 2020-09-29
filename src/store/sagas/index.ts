import { all } from "redux-saga/effects";

import { watchSignIn } from "./Auth/signIn";
import { watchNewMusic } from "./Music/newMusic";

export default function* rootSaga() {
  yield all([watchSignIn(), watchNewMusic()]);
}
