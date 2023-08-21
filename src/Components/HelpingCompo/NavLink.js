'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = pathname === href || href.startsWith(pathname + '/')
    return (
        <div className='relative group'>
            <Link className={`${isActive ? 'bg-gradient-to-tr from-[#E84545] to-blue-500' : 'bg-gradient-to-t from-[#222831] to-[#000000]'}  py-3 px-5 flex justify-center`} href={href}>{children}</Link>
            <Link className={`hidden md:block bg-gradient-to-tr from-red-500 to-blue-500 py-2 px-5 absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 md:group-hover:right-full transition-all duration-500`} href={href}>
                {href === '/' ? 'Home' : href.split('/')[1]}
            </Link>
        </div>
    );
};

export default NavLink;