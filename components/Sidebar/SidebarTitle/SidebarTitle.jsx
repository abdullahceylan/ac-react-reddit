import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Sidebar.styles';

const SidebarTitle = ({ text }) => (
  <Title>{text}</Title>
);

SidebarTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SidebarTitle;
