import { Navbar, Text } from '@mantine/core';
import React from 'react'


interface Prop{
    opened: boolean;
}
const AdminMenu: React.FC<Prop> = ({opened}) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <p>Admin Menu</p>
    </Navbar>
  );
}

export default AdminMenu