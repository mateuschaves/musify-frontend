import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: #282828;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
`;

export const Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 34px;
  white-space: pre-line;
  justify-self: flex-start;
  align-self: flex-start;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 90px;
`;

export const AddButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 90px;
  background-color: #1db954;
  border: none;
  cursor: pointer;
  outline: inherit;
  transition: width 0.2s, height 0.2s;

  &:hover {
    background-color: ${darken(0.1, "#1db954")};
    width: 54px;
    height: 54px;
  }

  &:active {
    background-color: ${darken(0.15, "#1db954")};
  }
`;

export const Musics = styled.div`
  overflow-y: scroll;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 24px;
`;
