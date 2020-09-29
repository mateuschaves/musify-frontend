import { SignInProps } from "../../../@types/Auth";

import { ActionProps } from "../../../@types/General";

export const signInTypes = {
  SIGNIN_REQUEST: "signIn/SIGNIN_REQUEST",
  SIGNIN_SUCCESS: "signIn/SIGNIN_SUCCESS",
  SIGNIN_ERROR: "signIn/SIGNIN_ERROR",
};

export const signInActions = {
  signIn: ({ email, password, history }: SignInProps) => ({
    type: signInTypes.SIGNIN_REQUEST,
    payload: { email, password },
    history,
  }),
  signInSuccess: (data: any) => ({
    type: signInTypes.SIGNIN_SUCCESS,
    payload: data,
  }),
  signInError: (error: any) => ({
    type: signInTypes.SIGNIN_ERROR,
    payload: error,
  }),
};

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const signInReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case signInTypes.SIGNIN_REQUEST:
      return { ...state, loading: true };
    case signInTypes.SIGNIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case signInTypes.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
