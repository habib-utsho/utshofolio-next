'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = pathname === href || href.startsWith(pathname + '/')
    console.log(isActive);
    return (
        <Link className={`${isActive && '!bg-gradient-to-tr !from-orange-500 !to-blue-500'} py-3 px-5 block bg-gradient-to-t from-[#222831] to-[#000000]`} href={href}>{children}</Link>
    );
};

export default NavLink;