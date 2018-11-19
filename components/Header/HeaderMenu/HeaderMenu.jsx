import React from 'react';
import PropTypes from 'prop-types';
import SingleItem from './SingleItem';
import { MenuItems } from './HeaderMenu.styles';

const menuList = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'popular',
    title: 'Popular',
  },
  {
    id: 'all',
    title: 'All',
  },
  {
    id: 'random',
    title: 'Random',
  },
];

const HeaderMenu = ({ active }) => (
  <MenuItems>
    {
      menuList.length > 0 && menuList.map(item => (
        <SingleItem key={`headerMenu_${item.id}`} active={active === item.id} item={item} />
      ))
    }
  </MenuItems>
);

HeaderMenu.propTypes = {
  active: PropTypes.string,
};

HeaderMenu.defaultProps = {
  active: 'popular',
};

export default HeaderMenu;
