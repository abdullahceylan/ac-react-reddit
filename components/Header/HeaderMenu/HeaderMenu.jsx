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

const HeaderMenu = ({ activeItem }) => (
  <MenuItems>
    {
      menuList.length > 0 && menuList.map(item => (
        <SingleItem key={`headerMenu_${item.id}`} active={activeItem === item.id} item={item} />
      ))
    }
  </MenuItems>
);

HeaderMenu.propTypes = {
  activeItem: PropTypes.string,
};

HeaderMenu.defaultProps = {
  activeItem: 'popular',
};

export default HeaderMenu;
