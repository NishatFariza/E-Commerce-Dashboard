import { Navbar, NavLink, Text } from '@mantine/core';
import { IconShoppingBag, IconCategory, IconUsers } from "@tabler/icons";
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
          <Navbar.Section mt="xs">
              <NavLink label="Products" icon={<IconShoppingBag/> } />
              <NavLink label="Categories" icon={ <IconCategory/>} />
              <NavLink label="Customers" icon={ <IconUsers/>} />
      </Navbar.Section>
    </Navbar>
  );
}

export default AdminMenu