import { call, put, takeLatest } from "redux-saga/effects";

import { ActionProps } from "../../../@types/General";
import { AuthService } from "../../../services/api/resources";

import { storageHeaders } from "../../../utils";

import { signInActions, signInTypes } from "../../ducks/Auth/signIn";

export function* loginSaga({ payload }: ActionProps) {
  try {
    const { email, password } = payload;

    const response = yield call(AuthService.signIn, {
      email,
      password,
    });

    console.log(response);

    const token = response?.data?.token;

    yield call(storageHeaders.saveHeaders, token);

    yield put(signInActions.signInSuccess(response.data));
  } catch (error) {
    yield put(signInActions.signInError(error));
  }
}

export function* watchSignIn() {
  yield takeLatest(signInTypes.SIGNIN_REQUEST, loginSaga);
}
