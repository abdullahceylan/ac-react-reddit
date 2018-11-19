import styled from 'styled-components';

export const ActivityWrapper = styled.div`
  margin-top: 10px;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;

export const Activity = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;

  &:last-of-type {
    border: none;
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 22px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
`;

export const Points = styled.div`
  color: ${props => props.theme.colors.orange};
`;

export const Comments = styled.div`

`;

export const BlurEffect = styled.div`
  position: absolute;
  bottom: 0;
  height: 265px;
  z-index: 1;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(238, 240, 242, 0), #eef0f2);
`;

export const ViewAll = styled.div`
  color: ${props => props.theme.colors.orange};
  cursor: pointer;
`;