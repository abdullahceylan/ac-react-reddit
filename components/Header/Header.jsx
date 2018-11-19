import React from 'react';
import HeaderMenu from './HeaderMenu';
import ActionsMenu from './ActionsMenu';
import {
  HeaderWrapper,
  Logo,
} from './Header.styles';
import LogoImage from '../../static/assets/images/reddit_logo.svg';

const Header = (props) => (
  <HeaderWrapper>
    <Logo>
      <LogoImage />
    </Logo>
    <HeaderMenu active="popular" />
    <ActionsMenu />
  </HeaderWrapper>
);

export default Header;
