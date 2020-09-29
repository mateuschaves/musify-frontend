import { ActionProps } from '../../../@types/General'
import { RemoveMusicProps, RemoveMusicStateProps } from '../../../@types/Music'

export const removeMusicTypes = {
  REMOVE_MUSIC_REQUEST: 'music/REMOVE_MUSIC_REQUEST',
  REMOVE_MUSIC_SUCCESS: 'music/REMOVE_MUSIC_SUCCESS',
  REMOVE_MUSIC_ERROR: 'music/REMOVE_MUSIC_ERROR'
}

export const removeMusicActions = {
  removeMusic: ({ id }: RemoveMusicProps) => ({
    type: removeMusicTypes.REMOVE_MUSIC_REQUEST,
    payload: { id }
  }),
  removeMusicSuccess: (data: any) => ({
    type: removeMusicTypes.REMOVE_MUSIC_SUCCESS,
    payload: data
  }),
  removeMusicError: (error: any) => ({
    type: removeMusicTypes.REMOVE_MUSIC_ERROR,
    payload: error
  })
}

const initialState: RemoveMusicStateProps = {
  data: {},
  loading: false,
  error: null
}

export const removeMusicReducer = (
  state = initialState,
  action: ActionProps
) => {
  switch (action.type) {
    case removeMusicTypes.REMOVE_MUSIC_REQUEST:
      return { ...state, loading: true }
    case removeMusicTypes.REMOVE_MUSIC_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    case removeMusicTypes.REMOVE_MUSIC_ERROR:
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
