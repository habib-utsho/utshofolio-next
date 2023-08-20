import React from 'react';
import { FaAccusoft, FaAdjust, FaFunnelDollar, FaWeebly } from 'react-icons/fa';



const ServicesPage = () => {
    return (
        <div className='p-6 grid grid-cols-12 gap-8 pb-16 md:pb-6 text-slate-50'>

            <div className='col-span-12 md:col-span-4 space-y-3'>
                <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>Services</h2>

                <h2 className='my-title my-clr-one'>What I do?</h2>

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

                <button className='my-btn-one'>Contact with me</button>

            </div>

            <div className='col-span-12 md:col-span-8 space-y-5 flex flex-col justify-center'>

                <div className='p-5 flex items-center bg-[#081229]'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaWeebly></FaWeebly> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Web development</h2>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque totam qui illo adipisci unde.</p>
                    </div>
                </div>

                <div className='p-5 flex items-center bg-[#081229]'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaAccusoft></FaAccusoft> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Design strategy</h2>
                        <p className='text-slate-300'>I take the time to understand your business goals and target audience. By aligning design strategy with your vision, I ensure that your digital presence is effective and purposeful.</p>
                    </div>
                </div>

                <div className='p-5 flex items-center bg-[#081229]'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaAccusoft></FaAccusoft> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Frontend Development</h2>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque totam qui illo adipisci unde.</p>
                    </div>
                </div>

                <div className='p-5 flex items-center bg-[#081229]'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaAdjust></FaAdjust> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Performance Optimization</h2>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque totam qui illo adipisci unde.</p>
                    </div>
                </div>

                <div className='p-5 flex items-center bg-[#081229]'>
                    <span className='w-1/12 text-3xl text-[#E84545]'><FaFunnelDollar></FaFunnelDollar> </span>
                    <div className='space-y-3 flex-1'>
                        <h2 className='my-subtitle'>Fullstack Development</h2>
                        <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere doloremque totam qui illo adipisci unde.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ServicesPage;