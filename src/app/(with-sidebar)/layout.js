import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto grid grid-cols-12 items-center'>
            <div className='col-span-11 h-[95vh] bg-[#222831] overflow-y-scroll'>
                {children}
            </div>
            <div className='col-span-1'>
                <ul className='flex flex-col justify-center items-center h-[80vh] bg-gradient-to-l from-[#222831] to-[#000000] text-white'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default layout;