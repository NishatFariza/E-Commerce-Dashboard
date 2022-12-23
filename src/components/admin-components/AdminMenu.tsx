import { Navbar, NavLink } from "@mantine/core";
import { IconCategory, IconSettings, IconShoppingBag } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Prop {
  opened: boolean;
}
const AdminMenu: React.FC<Prop> = ({ opened }) => {
  const router = useRouter();

  return (
    <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      <Navbar.Section mt="xs">
        {/* <pre>{ JSON.stringify(router.asPath)}</pre> check routing */}
        <NavLink
          label="Products"
          icon={<IconShoppingBag />}
          component={Link}
          href="/"
          active={router.asPath === "/"}
        />
        <NavLink
          label="Categories"
          icon={<IconCategory />}
          component={Link}
          href="/categories"
          active={router.asPath === "/categories"}
        />
        <NavLink
          label="Settings"
          icon={<IconSettings />}
          component={Link}
          href="/settings"
          active={router.asPath === "/settings"}
        />
      </Navbar.Section>
    </Navbar>
  );
};

export default AdminMenu;
