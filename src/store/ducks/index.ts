import { combineReducers } from "redux";

import { signInReducer as signIn } from "./Auth/signIn";

const reducers = combineReducers({
  signIn,
});

export default reducers;
