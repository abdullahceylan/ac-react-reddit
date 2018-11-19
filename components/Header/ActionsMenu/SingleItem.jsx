import React from 'react';
import { Item } from './HeaderMenu.styles';

const SingleItem = ({ item, active }) => (
  <Item href={item.id} active={active}>
    {item.title}
  </Item>
);

export default SingleItem;
