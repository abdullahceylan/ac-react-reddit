import styled from 'styled-components';
import { ifNotProp, prop } from 'styled-tools';

export const globalStyles = `
  @import '/static/assets/css/font.css';
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "TT Norms", Georgia, "Times New Roman", sans-serif;
    margin: 0;
    overflow-x: hidden;
    font-weight: 400;
  }

  strong, b, h2, h1, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;

export const Button = styled.button`
  width: ${prop('width', 124)}px;
  height: 36px;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(to left, #ff2d55, #ff4500);
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;

  & > svg {
    font-size: 17px;
    vertical-align: middle;
  }
`;

export const ActionItem = styled.span`
  margin-right: 15px;
  vertical-align: middle;
  cursor: pointer;
  color: ${prop('color', '#000')};

  & > svg {
    margin-right: 5px;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.orange};
    & > svg {
      color: ${props => props.theme.colors.orange} !important;
    }
  }
`;

export const ActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${ifNotProp('noMargin', '15px', 0)};
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);

  /* ${ActionItem} {
    margin-right: ${ifNotProp('noMargin', '15px', 0)};
  } */
`;

export const Filters = styled.span`
  padding-top: 8px;
`;

export const FilterItem = styled(ActionItem)`
  margin-right: 0;
`;

export const SelectBoxWrapper = styled.span`

`;

export const SelectBox = styled.select`
  -webkit-appearance: none;
  padding: 5px 24px 5px 10px;
  font-size: 14px;
  background: url(https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_arrow_drop_down_48px-512.png) no-repeat calc(100% - 3px);
  background-size: 22px;
  border: none;
`;

export const SelectBox2 = styled.select`
  height: 36px;
  padding: 8px 14px;
  background: transparent;
  border: none;
  font-size: 15px;
  -moz-appearance: none;
  background-image: linear-gradient(45deg,transparent 50%,gray 50%),linear-gradient(135deg,gray 50%,transparent 50%),linear-gradient(to right,transparent,transparent);
  background-position: calc(100% - 7px) calc(1em - 2px),calc(100% - 2px) calc(1em - 2px),calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px,5px 5px,1px 1.5em;
  background-repeat: no-repeat;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

export const CopyrightText = styled.p`
  font-size: 15px;
  text-align: center;
  line-height: 22px;
`;