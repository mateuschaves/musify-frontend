import { put, takeLatest } from 'redux-saga/effects'

import { ActionProps } from '../../../@types/General'

import { userActions, userTypes } from '../../ducks/Auth/loggedUser'

export function* loggedUserSaga({ payload }: ActionProps) {
  try {
    const { token, user } = payload

    yield put(userActions.userSuccess({ token, user }))
  } catch (error) {
    yield put(userActions.userError(error))
  }
}

export function* watchLoggedUser() {
  yield takeLatest(userTypes.USER_REQUEST, loggedUserSaga)
}
