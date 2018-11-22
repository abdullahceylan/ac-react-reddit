import styled from 'styled-components';

export const NoEntryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
`;

export const NoEntryText = styled.p`
  z-index: 2;
  margin-top: 128px;
  font-size: 20px;
  text-align: center;
  line-height: 37px;
`;

export const Overlay = styled.div`
  background-color: #eee;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.2;
`;
