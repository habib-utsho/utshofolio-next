import DesktopSidebar from '@/Components/HelpingCompo/DesktopSidebar';
import MobileMenu from '@/Components/HelpingCompo/MobileMenu';
import NavLink from '@/Components/HelpingCompo/NavLink';
import React from 'react';
import { FaFax, FaHome, FaProjectDiagram, FaServicestack, FaUser, FaVoicemail } from "react-icons/fa";

const layout = ({ children }) => {

    return (
        <div className='min-h-screen max-w-7xl mx-auto items-center flex'>
            <div className=' h-[95vh] w-full bg-[#222831] overflow-y-scroll'>
                {children}
            </div>

            {/* sidebar menu for desktop */}
            <DesktopSidebar></DesktopSidebar>
            <MobileMenu></MobileMenu>

        </div>
    );
};

export default layout;