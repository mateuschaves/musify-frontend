import {
  NewMusicStateProps,
  ListMusicStateProps,
  RemoveMusicStateProps
} from './Music'
import { SignInStateProps, SignUpStateProps } from './Auth'

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
}

declare module 'react-activity'
