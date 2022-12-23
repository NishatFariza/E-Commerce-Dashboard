import { Navbar, NavLink } from "@mantine/core";
import { IconCategory, IconSettings, IconShoppingBag } from "@tabler/icons";
import Link from "next/link";
import React from "react";

interface Prop {
  opened: boolean;
}
const AdminMenu: React.FC<Prop> = ({ opened }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section mt="xs">
        <NavLink
          label="Products"
          icon={<IconShoppingBag />}
          component={Link}
          href="/"
        />
        <NavLink
          label="Categories"
          icon={<IconCategory />}
          component={Link}
          href="/categories"
        />
        <NavLink
          label="Settings"
          icon={<IconSettings />}
          component={Link}
          href="/settings"
        />
      </Navbar.Section>
    </Navbar>
  );
};

export default AdminMenu;
