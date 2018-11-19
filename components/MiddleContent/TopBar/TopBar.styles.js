import styled from 'styled-components';

export const TopBarWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const LeftSide = styled.div`
  font-size: 26px;
  align-content: center;
  display: flex;

  & > svg {
    margin-right: 20px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 400px;
`;

export const SubRedditTitle = styled.span`
  margin-left: 10px;
  font-size: 14px;
  background-color: #83ffe3;
  padding: 7px 9px;
  border-radius: 5px;
`;
