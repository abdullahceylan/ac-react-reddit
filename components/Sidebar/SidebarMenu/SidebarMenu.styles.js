import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  justify-content: space-evenly;
`;

export const Item = styled.span`
  color: #000;
  text-decoration: none;
  line-height: 50px;
  align-items: center;
  display: flex;
  cursor: pointer;
  
  & > svg {
    margin-right: 10px;
  }

  &:hover {
    color: ${props => props.theme.colors.orange};
  }

  ${ifProp({ isActive: true }, css`
    color: ${props => props.theme.colors.orange};
  `)}
`;