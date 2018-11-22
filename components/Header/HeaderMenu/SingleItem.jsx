import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './HeaderMenu.styles';

const SingleItem = ({ item, active }) => (
  <Item href={item.id} active={active}>
    {item.title}
  </Item>
);

SingleItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  active: PropTypes.bool,
};

SingleItem.defaultProps = {
  active: false,
};

export default SingleItem;
