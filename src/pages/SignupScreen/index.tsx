import React, { useState } from 'react'

import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'

import { signUpActions } from '../../store/ducks/Auth/signUp'

import { useHistory, Link } from 'react-router-dom'

import { Container, Input, Title, Form, Button, SignInLabel } from './styles'

export default function SignupScreen() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const dispatch = useDispatch()
  const history = useHistory()

  function handleSignUp(name: string, email: string, password: string) {
    if (!validateForm(name, email, password))
      return toast('Preencha seu nome, login e senha corretamente', {
        type: 'error'
      })

    dispatch(signUpActions.signUp({ name, email, password, history }))
  }

  function validateForm(name: string, email: string, password: string) {
    if (!name || !email || !password) return false
    else return true
  }

  return (
    <Container>
      <Form>
        <Title>{['Cadastre-se agora mesmo', 'no Musify'].join('\n')}</Title>
        <Input
          placeholder='Nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='name'
        />
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

        <Button
          type='button'
          onClick={() => handleSignUp(name, email, password)}
        >
          CADASTRAR
        </Button>

        <SignInLabel>
          Já possui uma conta ? <Link to='signin'>Clique aqui</Link>
        </SignInLabel>
      </Form>
    </Container>
  )
}
