import { UserProps } from '../@types/Auth'

function saveHeaders({ token, user }: UserProps): Promise<void> {
  return new Promise((resolve) => {
    localStorage.setItem('@musify/user', JSON.stringify({ token, user }))
    resolve()
  })
}

function clearHeaders() {
  localStorage.removeItem('@musify/user')
}

function getHeaders(): UserProps {
  const user: UserProps = JSON.parse(
    localStorage.getItem('@musify/user') || JSON.stringify({})
  )
  return user
}

export default { saveHeaders, getHeaders, clearHeaders }
