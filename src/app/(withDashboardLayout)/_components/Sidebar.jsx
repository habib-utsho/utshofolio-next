import { Layout, Menu } from "antd";
import React, { useState } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { TrophyOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false); // State to track sidebar collapse

  const menuItems = [
    {
      key: "/habib-utsho-dashboard",
      icon: <TrophyOutlined />,
      label: "Projects",
      onClick: () => router.push("/habib-utsho-dashboard"),
    },
  ];

  // Adjust selectedKeys to handle pathname correctly
  const selectedKey = menuItems.find((item) =>
    pathname.startsWith(item.key)
  )?.key;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      className="!h-screen !sticky !top-0 !overflow-y-auto"
    >
      <div className="text-center p-4">
        <Image
          src={logo}
          alt="TraveLeaf"
          width={collapsed ? 40 : 80}
          height={collapsed ? 40 : 80}
          className="mx-auto cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]} // Ensure this key matches the correct route
        items={menuItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: collapsed ? item.icon : item.label,
          onClick: item.onClick,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
