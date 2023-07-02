'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const page = () => {
    return (
        <div className='text-white'>
            <h2 className='my-title'>I am specialized in</h2>
            <div className='flex gap-2 items-center text-[#E84545] font-bold my-title'>
                <span className='text-slate-400'>{'>'}</span>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Frontend development',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        '',
                        1000,
                        'We produce food for Guinea Pigs',
                        1000,
                        'We produce food for Chinchillas',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
};

export default page;