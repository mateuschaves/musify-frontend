import { all } from 'redux-saga/effects'

import { watchSignUp } from './Auth/signUp'
import { watchSignIn } from './Auth/signIn'
import { watchNewMusic } from './Music/newMusic'
import { watchListMusic } from './Music/listMusic'
import { watchRemoveMusic } from './Music/removeMusic'

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
    watchNewMusic(),
    watchListMusic(),
    watchRemoveMusic()
  ])
}
