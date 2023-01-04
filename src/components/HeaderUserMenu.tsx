import { AppContext } from "@/context/AppContextProvider";
import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons";
import { useRouter } from "next/router";
import { useContext } from "react";

const HeaderUserMenu = () => {
  const { user } = useContext(AppContext);
  const router = useRouter();

  const handleLogOut = () => {
    localStorage.removeItem("Token");
    router.push("/auth/login");
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Avatar
          radius={"lg"}
          src={`http://104.251.211.125:8055/assets/${user?.avatar}?width=80`}
          alt={user?.first_name}
        />
      </Menu.Target>

      <Menu.Dropdown>
        {/* @ts-ignore */}
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item onClick={handleLogOut} icon={<IconLogout size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderUserMenu;
