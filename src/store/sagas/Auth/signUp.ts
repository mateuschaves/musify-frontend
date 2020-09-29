import { call, put, takeLatest } from 'redux-saga/effects'

import { ActionProps } from '../../../@types/General'
import { AuthService } from '../../../services/api/resources'

import { toast } from 'react-toastify'

import { signUpActions, signUpTypes } from '../../ducks/Auth/signUp'

export function* signUpSaga({ payload, history }: ActionProps) {
  try {
    const { name, email, password } = payload

    const response = yield call(AuthService.signUp, {
      name,
      email,
      password
    })

    yield put(signUpActions.signUpSuccess(response.data))
    toast('Cadastro realizado com sucesso !', { type: 'success' })
    yield put(history.push('/signin'))
  } catch (error) {
    yield put(signUpActions.signUpError(error))
  }
}

export function* watchSignUp() {
  yield takeLatest(signUpTypes.SIGNUP_REQUEST, signUpSaga)
}
