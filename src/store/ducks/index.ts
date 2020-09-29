import { combineReducers } from 'redux'

import { signInReducer as signIn } from './Auth/signIn'
import { signUpReducer as signUp } from './Auth/signUp'
import { newMusicReducer as newMusic } from './Music/newMusic'
import { listMusicReducer as listMusic } from './Music/listMusic'
import { removeMusicReducer as removeMusic } from './Music/removeMusic'

const reducers = combineReducers({
  signUp,
  signIn,
  newMusic,
  listMusic,
  removeMusic
})

export default reducers
