import styled, { css } from 'styled-components';
import {ifProp } from 'styled-tools';

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  height: 59px;
  font-size: 15px;
  justify-content: space-evenly;
`;

export const Item = styled.a`
  text-transform: uppercase;
  color: #000;
  text-decoration: none;
  line-height: 54px;
  border-bottom: 4px solid transparent;
  height: 100%;
  transform: translateY(8%);
  ${ifProp('active', css`
    border-bottom: 4px solid ${props => props.theme.colors.orange};
  `)}

  &:hover {
    border-bottom: 4px solid ${props => props.theme.colors.gray};
  }
`;