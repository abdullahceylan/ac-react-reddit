import styled from 'styled-components';

export const PreloaderCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  min-height: 145px;
  border-bottom: 1px solid #eee;
  padding: 10px 20px;

  & > svg > rect {
    width: 100%;
  }
`;
