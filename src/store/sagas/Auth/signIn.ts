import { call, put, takeLatest } from 'redux-saga/effects'

import { ActionProps } from '../../../@types/General'
import { AuthService } from '../../../services/api/resources'

import { storageHeaders } from '../../../utils'

import { signInActions, signInTypes } from '../../ducks/Auth/signIn'
import { userActions } from '../../ducks/Auth/loggedUser'

export function* signInSaga({ payload, history }: ActionProps) {
  try {
    const { email, password } = payload

    const response = yield call(AuthService.signIn, {
      email,
      password
    })

    const { token, user } = response?.data

    yield call(storageHeaders.saveHeaders, { user, token })

    yield put(signInActions.signInSuccess(response.data))
    yield put(
      userActions.user({
        token,
        user
      })
    )
    history.push('/musics')
  } catch (error) {
    yield put(signInActions.signInError(error))
  }
}

export function* watchSignIn() {
  yield takeLatest(signInTypes.SIGNIN_REQUEST, signInSaga)
}
