import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 8px;
  background-color: rgb(4, 4, 4);
  cursor: pointer;
  padding: 8px;
  height: 56px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #282828;
  }

  &:active {
    background-color: ${lighten(0.05, '#282828')};
  }
`
export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-bottom: 6px;
`
export const Artist = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #b3b3b3b3;
`
export const Genre = styled.span`
  display: flex;
  flex: 0.4;
  font-weight: bold;
  font-size: 16px;
  color: #b3b3b3b3;
`
export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const Track = styled.div`
  display: flex;
  flex: 1;
  color: #fff;
  font-size: 14px;
  margin-left: 8px;
`

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`
