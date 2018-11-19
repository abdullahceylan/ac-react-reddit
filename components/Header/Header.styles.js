import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 2px 10px;
  border: 1px solid #ededed;
`;

export const Logo = styled.div`
  height: 46px;
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const HeaderSubtitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;