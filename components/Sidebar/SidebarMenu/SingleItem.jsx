import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Item } from './SidebarMenu.styles';

const SingleItem = ({ item, active, router, onClick }) => {
  return (
    <Item active={active} onClick={() => onClick(item.id)}>
      {item.icon}
      {item.title}
    </Item>
  );
};

export default SingleItem;
