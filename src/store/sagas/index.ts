import { all } from "redux-saga/effects";

import { watchSignIn } from "./Auth/signIn";

export default function* rootSaga() {
  yield all([watchSignIn()]);
}
