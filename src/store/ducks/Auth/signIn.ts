import { ActionProps } from '../../../@types/General'
import { SignInStateProps, SignInProps } from '../../../@types/Auth'

export const signInTypes = {
  SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'auth/SIGNIN_ERROR'
}

export const signInActions = {
  signIn: ({ email, password, history }: SignInProps) => ({
    type: signInTypes.SIGNIN_REQUEST,
    payload: { email, password },
    history
  }),
  signInSuccess: (data: any) => ({
    type: signInTypes.SIGNIN_SUCCESS,
    payload: data
  }),
  signInError: (error: any) => ({
    type: signInTypes.SIGNIN_ERROR,
    payload: error
  })
}

const initialState: SignInStateProps = {
  data: {},
  loading: false,
  error: null
}

export const signInReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case signInTypes.SIGNIN_REQUEST:
      return { ...state, loading: true }
    case signInTypes.SIGNIN_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case signInTypes.SIGNIN_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      }
    default:
      return state
  }
}
