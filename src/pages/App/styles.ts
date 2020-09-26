import styled from "styled-components";

import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
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
  width: 80px;
  height: 80px;
  border-radius: 90px;
  background-color: ${lighten(0.2, "#282828")};
  border: none;
  cursor: pointer;
  outline: inherit;
`;
