import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 24%;
  padding: 100px 50px 0;

  @media (max-width: 768px) {
    width: 20%;
    max-width: 250px;
  }
`;

export const Title = styled.div`
  font-size: 13px;
  text-transform: uppercase;
  color: #8e8e8e;
  margin-bottom: 15px;
`;
