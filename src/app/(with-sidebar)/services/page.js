import Link from 'next/link';
import React from 'react';
import {  FaWeebly } from 'react-icons/fa';
import { SiAntdesign, SiFrontendmentor, SiGoogleoptimize } from "react-icons/si";
import { ImStarFull } from "react-icons/im";

const ServicesPage = () => {
    return (
        <div className='p-6 grid grid-cols-12 gap-8 pb-16 md:pb-6 text-slate-50'>

            <div className='col-span-12 md:col-span-4 space-y-3'>
                <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Services</h2>

                <h2 className='my-title gradient-text'>What I do?</h2>

                <p className='text-slate-300 !my-6'>Welcome to my Services Page! As a solo web developer, I specialize in solving problems and creating exceptional digital solutions. With a focus on usability and functionality, I design and develop websites and applications that make a real impact.</p>

                <div className='space-y-3'>
                    <h2 className='my-subtitle'>What you can expect?</h2>
                    <ul className='text-slate-300 space-y-3 px-6'>
                        <li className='list-disc'>Front-end Development</li>
                        <li className='list-disc'>Design Strategy</li>
                        <li className='list-disc'>Performance optimization</li>
                        <li className='list-disc'>Fullstack development</li>
                    </ul>
                </div>

                <div className='space-y-3 !my-10'>
                    <h2 className='my-subtitle'>Proficient in</h2>
                    <ul className='text-slate-300 space-y-3 px-6'>
                        <li className='list-disc'>Tailwind</li>
                        <li className='list-disc'>Javascript</li>
                        <li className='list-disc'>React</li>
                        <li className='list-disc'>Next JS</li>
                        <li className='list-disc'>Firebase</li>
                    </ul>
                </div>

                <Link href={'https://www.linkedin.com/in/source-code007/'} target='_blank'><button className='my-btn-one'>Contact with me</button></Link>

            </div>

            <div className='col-span-12 md:col-span-8 space-y-4 flex flex-col justify-center'>

                <div className='p-5 flex flex-col sm:flex-row gap-2 items-center bg-[#081229] transition hover:rounded-xl'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaWeebly></FaWeebly> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Web development</h2>
                        <p className='text-slate-300'>I am a web developer with 2+ years of experience in creating and maintaining websites. I am proficient in a variety of technologies, including Tailwind, Bootstrap, JavaScript, React JS, Next JS, Express JS, MongoDB, and Firebase.</p>
                    </div>
                </div>

                <div className='p-5 flex flex-col sm:flex-row gap-2 items-center bg-[#081229] transition hover:rounded-xl'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><SiAntdesign></SiAntdesign> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Design strategy</h2>
                        <p className='text-slate-300'> I am a design strategist who understands the business goals, target audience, and technical constraints of websites. I develop plans for the overall look and feel of websites that are effective and purposeful.</p>
                    </div>
                </div>

                <div className='p-5 flex flex-col sm:flex-row gap-2 items-center bg-[#081229] transition hover:rounded-xl'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><SiFrontendmentor></SiFrontendmentor> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Frontend Development</h2>
                        <p className='text-slate-300'>I am a proficient frontend developer with experience in Tailwind, Bootstrap, React, Framer Motion. I create visually appealing and user-friendly websites with performance optimization and accessibility in mind.</p>
                    </div>
                </div>

                <div className='p-5 flex flex-col sm:flex-row gap-2 items-center bg-[#081229] transition hover:rounded-xl'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><SiGoogleoptimize></SiGoogleoptimize> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Performance Optimization</h2>
                        <p className='text-slate-300'>I am a performance optimization specialist who can improve the speed and performance of websites. I optimize the code, images, and other resources to make websites load faster and rank better in search engines.</p>
                    </div>
                </div>

                <div className='p-5 flex flex-col sm:flex-row gap-2 items-center bg-[#081229] transition hover:rounded-xl'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><ImStarFull></ImStarFull> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Fullstack Development</h2>
                        <p className='text-slate-300'>I am a fullstack developer with experience in developing both the frontend and backend of websites using the MERN stack. I am also experienced in performance optimization and security.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServicesPage;