import { UserProps } from '../@types/Auth'

function saveHeaders({ token, user }: UserProps) {
  localStorage.setItem('@musify/user', JSON.stringify({ token, user }))
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
