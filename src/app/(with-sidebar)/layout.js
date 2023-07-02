import NavLink from '@/Components/HelpingCompo/NavLink';
import React from 'react';
import { FaHome, FaServicestack, FaUser } from "react-icons/fa";

const layout = ({ children }) => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto items-center flex'>
            <div className=' h-[95vh] w-full bg-[#222831] overflow-y-scroll'>
                {children}
            </div>

            {/* sidebar menu */}
                <ul className='hidden md:flex flex-col justify-center h-[80vh] bg-gradient-to-l from-[#222831] to-[#000000] text-white'>
                    <li><NavLink href={'/'}><FaHome></FaHome></NavLink></li>
                    <li><NavLink href={'/about'}><FaUser></FaUser></NavLink></li>
                    <li><NavLink href={'/services'}><FaServicestack></FaServicestack></NavLink></li>
                </ul>

        </div>
    );
};

export default layout;