import styled from 'styled-components'

import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(4, 4, 4); */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  overflow-y: scroll;
`

export const Title = styled.h1`
  color: rgb(4, 4, 4);
  font-weight: bold;
  font-size: 30px;
  white-space: pre-line;
  text-align: left;
`

export const Input = styled.input`
  border-radius: 4px;
  color: rgb(4, 4, 4);
  background-color: #fff;
  padding: 8px;
  outline: inherit;
  border: solid ${lighten(0.4, '#282828')} 0.2px;
  height: 40px;
  margin: 8px 0px 8px 0;
  width: 450px;

  @media (max-width: 700px) {
    width: 370px;
  }

  &:focus {
    border-color: rgb(4, 4, 4);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  height: 48px;
  background-color: transparent;
  border: 2px solid;
  border-color: #616467;
  outline: inherit;
  border-radius: 40px;
  color: #616467;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: 0.5s;
  margin: 8px 0px 8px 0;

  &:hover {
    background-color: #616467;
    color: #fff;
  }
`

export const SignUpLabel = styled.span`
  color: rgb(4, 4, 4);
  font-size: 16px;
  text-align: center;
`
