export type SignUpProps = {
  name: string
  email: string
  password: string
  history?: History<any>
}

export type SignInProps = {
  email: string
  password: string
  history?: History<any>
}

export type SignInStateProps = {
  data: Object<any>
  loading: boolean
  error: any
}

export type SignUpStateProps = {
  data: Object<any>
  loading: boolean
  error: any
}
