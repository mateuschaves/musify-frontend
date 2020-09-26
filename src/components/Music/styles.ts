import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 8px;
  background-color: #282828;
  cursor: pointer;
  padding: 8px;
  height: 56px;
  border-radius: 8px;

  &:hover {
    background-color: ${lighten(0.2, "#282828")};
  }
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-bottom: 6px;
`;
export const Artist = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #b3b3b3b3;
`;
export const Genre = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #b3b3b3b3;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Track = styled.div`
  color: #fff;
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
`;
