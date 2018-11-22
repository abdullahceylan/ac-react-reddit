import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './SidebarMenu.styles';

const SingleItem = ({ item, isActive, onClick }) => {
  if (!item) {
    return null;
  }

  return (
    <Item isActive={isActive} onClick={() => onClick(item.id)}>
      {item.icon}
      {item.title}
    </Item>
  );
};

SingleItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

SingleItem.defaultProps = {
  isActive: false,
  onClick: () => {},
};

export default SingleItem;
