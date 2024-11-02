import NavLink from "@/Components/HelpingCompo/NavLink";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";
import { AppstoreFilled, TrophyFilled } from "@ant-design/icons";

const DesktopSidebar = () => {
  return (
    <ul className="hidden md:flex flex-col justify-center h-[80vh] bg-gradient-to-l from-[#222831] to-[#000000] text-white">
      <li>
        <NavLink href={"/"}>
          <FaHome></FaHome>
        </NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>
          <FaUser></FaUser>
        </NavLink>
      </li>
      <li>
        <NavLink href={"/services"}>
          <AppstoreFilled />
        </NavLink>
      </li>
      <li>
        <NavLink href={"/projects"}>
          <TrophyFilled />
        </NavLink>
      </li>
      <li>
        <NavLink href={"/article"}>
          <ImBlog></ImBlog>
        </NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>
          <FaMessage></FaMessage>{" "}
        </NavLink>
      </li>
    </ul>
  );
};

export default DesktopSidebar;
