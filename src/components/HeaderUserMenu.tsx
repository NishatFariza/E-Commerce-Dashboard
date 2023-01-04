import { AppContext } from "@/context/AppContextProvider";
import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons";
import  { useContext } from "react";

const HeaderUserMenu = () => {

 const context = useContext(AppContext)
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          radius={"lg"}
          src="https://i.pinimg.com/originals/bc/e0/87/bce087eed31aafac6189c21ab0f859f2.jpg"
          alt="it's me"
        />
      </Menu.Target>

      <Menu.Dropdown>
        {/* @ts-ignore */}
        <Menu.Label>Application { context.x}</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderUserMenu;
