import React, { useState } from 'react'

import { signInActions } from '../../store/ducks/Auth/signIn'

import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'

import { Container, Input, Title, Form, Button } from './styles'

export default function SigninScreen() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSignIn(email: string, password: string) {
    if (!validateForm(email, password))
      return toast('Informe seu login e senha corretamente', { type: 'error' })
    dispatch(
      signInActions.signIn({
        email,
        password,
        history
      })
    )
  }

  function validateForm(email: string, password: string) {
    if (!email || !password) return false
    else return true
  }

  return (
    <Container>
      <Form>
        <Title>{['Entre agora mesmo', 'no Musify'].join('\n')}</Title>

        <Input
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <Input
          placeholder='Senha'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />

        <Button type='button' onClick={() => handleSignIn(email, password)}>
          ENTRAR
        </Button>
      </Form>
    </Container>
  )
}
