import React from 'react';
import PropTypes from 'prop-types';
import SidebarTitle from '../SidebarTitle';
import { SectionWrapper } from './SidebarSection.styles';

const SidebarSection = ({ title, children }) => (
  <SectionWrapper>
    <SidebarTitle text={title} />
    {children}
  </SectionWrapper>
);

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SidebarSection;
