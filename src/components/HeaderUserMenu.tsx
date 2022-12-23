import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons";

const HeaderUserMenu = () => {
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
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderUserMenu;
