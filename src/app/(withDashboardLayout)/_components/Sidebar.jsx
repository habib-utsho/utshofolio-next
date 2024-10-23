import { Layout, Menu } from "antd";
import React, { useState } from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  TrophyOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  StarOutlined,
} from "@ant-design/icons";

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
    {
      key: "/habib-utsho-dashboard/project",
      icon: <ProjectOutlined />,
      label: "Project",
      onClick: () => router.push("/habib-utsho-dashboard/project"),
    },
    {
      key: "/habib-utsho-dashboard/experience",
      icon: <ExperimentOutlined />,
      label: "Experience",
      onClick: () => router.push("/habib-utsho-dashboard/experience"),
    },
    {
      key: "/habib-utsho-dashboard/skill",
      icon: <StarOutlined />,
      label: "Skills",
      onClick: () => router.push("/habib-utsho-dashboard/skill"),
    },
  ];

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
        selectedKeys={[pathname]} // Ensure this key matches the correct route
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon} onClick={item.onClick}>
            {collapsed ? item.icon : item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
