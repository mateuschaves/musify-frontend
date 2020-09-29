import { call, put, takeLatest } from 'redux-saga/effects'

import { toast } from 'react-toastify'

import { ActionProps } from '../../../@types/General'
import { MusicService } from '../../../services/api/resources'

import {
  removeMusicActions,
  removeMusicTypes
} from '../../ducks/Music/removeMusic'
import { listMusicActions } from '../../ducks/Music/listMusic'

export function* removeMusicSaga({ payload }: ActionProps) {
  try {
    const { id } = payload

    const response = yield call(MusicService.removeMusic, { id })

    yield put(removeMusicActions.removeMusicSuccess(response.data))
    yield put(listMusicActions.listMusic())

    toast('Música removida com sucesso !', { type: 'success' })
  } catch (error) {
    yield put(removeMusicActions.removeMusicError(error))
  }
}

export function* watchRemoveMusic() {
  yield takeLatest(removeMusicTypes.REMOVE_MUSIC_REQUEST, removeMusicSaga)
}
