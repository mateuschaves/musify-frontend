import { combineReducers } from "redux";

import { signInReducer as signIn } from "./Auth/signIn";
import { newMusicReducer as newMusic } from "./Music/newMusic";
import { listMusicReducer as listMusic } from "./Music/listMusic";

const reducers = combineReducers({
  signIn,
  newMusic,
  listMusic,
});

export default reducers;
