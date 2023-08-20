'use client'
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import utsho from '/public/assets/img/utsho.jpg'
import loveCursor from '/public/assets/img/loveCursor.png'
import CountUp from 'react-countup';


const Hoempage = () => {
    return (
        <div className='min-h-screen py-8 md:py-2 pb-16 md:pb-2 px-6 md:px-2 flex flex-col items-center justify-center'>
            <div className='text-white text-center space-y-5'>
                {/* Custom cursor is not working */}
                <figure className='h-[300px] w-[300px] mx-auto relative utshoProPic group overflow-hidden border-2 border-green-500 rounded-xl' style={{ cursor: `url(${loveCursor}), auto` }}>
                    <Image src={utsho} alt='Ahashan Habib Utsho' fill={true} className='group-hover:scale-105 transition duration-500'></Image>
                </figure>
                <h2 className='my-title my-clr-one'>Ahashan Habib Utsho</h2>
                <h3> MERN stack developer </h3>
                <p className='px-8 md:px-22'>To obtain a challenging position as a Web Developer in a dynamic and innovative
                    company where i can utilize my technical skills and creativity to design and develop
                    user-friendly responsive websites. I am available for any kind of job opportunity that
                    suits my interests.</p>
                <button className='my-btn-one'>Download resume <FaDownload></FaDownload></button>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 bg-gradient-to-tr from-red-500 to-blue-500 mt-10 text-center w-full rounded'>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'><CountUp
                            start={0}
                            end={2}
                            duration={2}
                            separator=" "
                        />+</h2>
                        <p>years of experience</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'><CountUp
                            start={0}
                            end={50}
                            duration={2}
                            separator=" "
                        />+</h2>
                        <p>projects completed</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3 md:border-r'>
                        <h2 className='my-title'>50+</h2>
                        <p>project completed</p>
                    </div>
                </div>
                <div className='p-7'>
                    <div className='p-5 space-y-3'>
                        <h2 className='my-title'><CountUp
                            start={0}
                            end={20}
                            duration={2}
                            separator=" "
                        />+</h2>
                        <p>open source project!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hoempage;