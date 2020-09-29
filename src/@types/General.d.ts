import {
  NewMusicStateProps,
  ListMusicStateProps,
  RemoveMusicStateProps
} from './Music'
import { SignInStateProps, SignUpStateProps, UserStateProps } from './Auth'

export type ActionProps = {
  payload?: any
  type: string
  history?: History<any>
}

export interface RootStore {
  signUp: SignUpStateProps
  signIn: SignInStateProps
  newMusic: NewMusicStateProps
  listMusic: ListMusicStateProps
  removeMusic: RemoveMusicStateProps
  loggedUser: UserStateProps
}

declare module 'react-activity'
