import { ActionProps } from '../../../@types/General'
import { UserProps, UserStateProps } from '../../../@types/Auth'

export const userTypes = {
  USER_REQUEST: 'auth/USER_REQUEST',
  USER_SUCCESS: 'auth/USER_SUCCESS',
  USER_ERROR: 'auth/USER_ERROR'
}

export const userActions = {
  user: ({ token, user }: UserProps) => ({
    type: userTypes.USER_REQUEST,
    payload: { token, user }
  }),
  userSuccess: (data: any) => ({
    type: userTypes.USER_SUCCESS,
    payload: data
  }),
  userError: (error: any) => ({
    type: userTypes.USER_ERROR,
    payload: error
  })
}

const initialState: UserStateProps = {
  user: undefined,
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case userTypes.USER_REQUEST:
      return { ...state, loading: true }
    case userTypes.USER_SUCCESS:
      return { ...state, loading: false, user: action.payload }
    case userTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.payload
      }
    default:
      return state
  }
}
