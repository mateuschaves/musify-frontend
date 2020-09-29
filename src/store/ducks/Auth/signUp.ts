import { ActionProps } from '../../../@types/General'
import { SignUpProps, SignUpStateProps } from '../../../@types/Auth'

export const signUpTypes = {
  SIGNUP_REQUEST: 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'auth/SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'auth/SIGNUP_ERROR'
}

export const signUpActions = {
  signUp: ({ name, email, password, history }: SignUpProps) => ({
    type: signUpTypes.SIGNUP_REQUEST,
    payload: { name, email, password },
    history
  }),
  signUpSuccess: (data: any) => ({
    type: signUpTypes.SIGNUP_SUCCESS,
    payload: data
  }),
  signUpError: (error: any) => ({
    type: signUpTypes.SIGNUP_ERROR,
    payload: error
  })
}

const initialState: SignUpStateProps = {
  data: {},
  loading: false,
  error: null
}

export const signUpReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case signUpTypes.SIGNUP_REQUEST:
      return { ...state, loading: true }
    case signUpTypes.SIGNUP_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case signUpTypes.SIGNUP_ERROR:
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
