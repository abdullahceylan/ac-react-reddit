import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarSection from './SidebarSection';
import Contributors from './Contributors';
import Activities from './Activities';
import { SidebarWrapper } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu />

      <SidebarSection title="Top Contributors">
        <Contributors count={5} />
      </SidebarSection>

      <SidebarSection title="Activity">
        <Activities />
      </SidebarSection>
    </SidebarWrapper>
  );
};

export default Sidebar;
