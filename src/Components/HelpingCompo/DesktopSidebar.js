import NavLink from '@/Components/HelpingCompo/NavLink';
import React from 'react';
import { FaFax, FaHome, FaProjectDiagram, FaServicestack, FaUser, FaVoicemail } from "react-icons/fa";

const DesktopSidebar = () => {
    return (
        <ul className='hidden md:flex flex-col justify-center h-[80vh] bg-gradient-to-l from-[#222831] to-[#000000] text-white'>
        <li><NavLink href={'/'}><FaHome></FaHome></NavLink></li>
        <li><NavLink href={'/about'}><FaUser></FaUser></NavLink></li>
        <li><NavLink href={'/services'}><FaServicestack></FaServicestack></NavLink></li>
        <li><NavLink href={'/projects'}><FaProjectDiagram></FaProjectDiagram></NavLink></li>
        <li><NavLink href={'/contact'}><FaFax></FaFax> </NavLink></li>
    </ul>
    );
};

export default DesktopSidebar;