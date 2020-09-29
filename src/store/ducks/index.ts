import { combineReducers } from "redux";

import { signInReducer as signIn } from "./Auth/signIn";
import { newMusicReducer as newMusic } from "./Music/newMusic";

const reducers = combineReducers({
  signIn,
  newMusic,
});

export default reducers;
