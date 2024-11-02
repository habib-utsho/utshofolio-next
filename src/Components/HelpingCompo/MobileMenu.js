"use client";

import NavLink from "@/Components/HelpingCompo/NavLink";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";
import { AppstoreFilled, TrophyFilled } from "@ant-design/icons";

const MobileMenu = () => {
  return (
    <div className="block md:hidden bg-slate-900 text-white fixed bottom-0 left-0 w-full z-50">
      <ul className="flex">
        <li className="flex-1">
          <NavLink href={"/"}>
            <FaHome></FaHome>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href={"/about"}>
            <FaUser></FaUser>
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href={"/services"}>
            <AppstoreFilled />
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href={"/projects"}>
            <TrophyFilled />
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href={"/article"}>
            <ImBlog></ImBlog>{" "}
          </NavLink>
        </li>
        <li className="flex-1">
          <NavLink href={"/contact"}>
            <FaMessage></FaMessage>{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
