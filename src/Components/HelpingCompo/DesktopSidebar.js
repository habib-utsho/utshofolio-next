import NavLink from "@/Components/HelpingCompo/NavLink";
import React from "react";
import { FaHome, FaServicestack, FaUser } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";

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
          <FaServicestack></FaServicestack>
        </NavLink>
      </li>
      <li>
        <NavLink href={"/projects"}>
          <BsTrophyFill></BsTrophyFill>
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
