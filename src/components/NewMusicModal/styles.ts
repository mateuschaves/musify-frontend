import styled from 'styled-components'
import { lighten } from 'polished'

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
`

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
