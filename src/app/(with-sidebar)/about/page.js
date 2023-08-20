'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AboutPage = () => {
    return (
        <div className='text-white'>

            <div className='p-6'>
                <div>
                    <h2 className='my-title'>I am specialized in</h2>
                    <div className='flex gap-2 items-center my-clr-one font-bold my-title my-3'>
                        <span className='text-slate-400'>{'>'}</span>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Frontend development',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                '',
                                1000,
                                'Performance optimization',
                                1000,
                                'Unique design pattern',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </div>

                {/* Technology */}
                <div className='bg-[#081229] shadow-md shadow-[#081229] p-6 space-y-8 my-10'>

                    <div className='space-y-3'>
                        <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Frontend Development</h2>
                        <div className='flex flex-wrap gap-4'>
                            <span>Javascript</span>
                            <span>Bootstrap</span>
                            <span>Tailwind</span>
                            <span>React JS</span>
                            <span>Next JS</span>
                            <span>Redux</span>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Backend Development</h2>
                        <div className='flex flex-wrap gap-4'>
                            <span>Javascript</span>
                            <span>Node JS</span>
                            <span>Express JS</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Tools</h2>
                        <div className='flex flex-row flex-wrap gap-4'>
                            <span>Git</span>
                            <span>ESLint</span>
                            <span>NPM</span>
                            <span>Postman</span>
                            <span>Figma</span>
                            <span>PSD</span>
                        </div>
                    </div>

                </div>

                {/* About me */}
                <div className='my-8 space-y-5'>

                    {/* Introduction */}
                    <div className='space-y-2'>
                        <h2 className='my-title text-[#E84545] opacity-30'>Introduction</h2>
                        <p>
                            Web developer by day, code wizard by night. I bring websites to life with a sprinkle of magic and a dash of caffeine. Armed with a keyboard and a wicked sense of humor, I turn complex problems into digital wonders. If you can dream it, I can code it (and maybe throw in a few jokes along the way). So buckle up and let{"'"}s embark on a hilarious journey through the world of web development together! Trust me, your website will thank you (and maybe even crack a smile).</p>
                    </div>

                    {/* About me */}
                    <div className='my-8 space-y-5'>
                        <div className='space-y-2'>
                            <h2 className='my-title text-[#E84545] opacity-30'>About me</h2>
                            <p>I am a passionate web developer with a focus on the MERN stack. I love building beautiful and functional websites and applications that make people{"'"}s lives easier. I am currently studying Computer Science at Dhaka International University, where I am learning the latest web development technologies. I am also an active member of the web development community, and I enjoy sharing my knowledge and skills with others.</p>
                        </div>
                    </div>

                    {/* Approach and philosophy */}
                    <div className='my-8 space-y-5'>
                        <div className='space-y-2'>
                            <h2 className='my-title text-[#E84545] opacity-30'>Approach and Philosophy</h2>
                            <p>My approach to web development is driven by a user-centric focus, attention to detail, and a commitment to clean and efficient code. I believe in responsive design, continuous learning, and fostering collaborative partnerships with clients. Innovation and creativity are at the core of my work, ensuring unique and exceptional digital experiences. Let's create something remarkable together!.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Courses and education */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 p-6 bg-white text-slate-900'>
                
                {/* Course and experience */}
                <div>
                    <h2 className='my-title relative pb-3'>Courses and experiences <span className='block absolute top-full left-0 h-1 w-full bg-gradient-to-tr from-red-500 to-blue-500'></span></h2>
                    
                    {/* PH */}
                    <div className='flex items-center justify-between gap-8 !my-10'>
                        <div className='space-y-3'>
                            <h2 className='my-subtitle'>Programming Hero</h2>
                            <p>Full stack web development</p>
                        </div>
                        <p className='text-slate-400'>01 Jan, 2023 - 17 Jun, 2023</p>
                    </div>

                    {/* European IT */}
                    <div className='flex items-center justify-between gap-8 !my-10'>
                        <div className='space-y-3'>
                            <h2 className='my-subtitle'>European IT solutions</h2>
                            <p>Industrial attachment with React</p>
                        </div>
                        <p className='text-slate-400'>01 Oct, 2022 - 30 Dec, 2022</p>
                    </div>

                </div>

                {/* Education */}
                <div>
                    <h2 className='my-title relative pb-3'>Education<span className='block absolute top-full left-0 h-1 w-full bg-gradient-to-tr from-red-500 to-blue-500'></span></h2>

                    <div className='flex items-center justify-between gap-8 !my-10'>
                        <div className='space-y-3'>
                            <h2 className='my-subtitle'>Dhaka International University</h2>
                            <p>BSc in Computer Science and Engineering</p>
                        </div>
                        <p className='text-slate-400'>2023 - Ongoing</p>
                    </div>

                    <div className='flex items-center justify-between gap-8 !my-10'>
                        <div className='space-y-3'>
                            <h2 className='my-subtitle'>Kurigram Polytechnic Institute</h2>
                            <p>Diploma in Computer Science</p>
                        </div>
                        <p className='text-slate-400'>2018 - 2022</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AboutPage;