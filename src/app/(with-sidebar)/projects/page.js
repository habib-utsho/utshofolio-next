'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState('All')

    const projects = [
        {
            "_id": 1,
            "projectName": "WizCraft Academy",
            "liveLink": "https://wizcraft-academy.web.app/",
            "projectImg": "https://i.ibb.co/6Y3GswW/Wiz-Craft-Academy.png",
            "projectLogo": "https://i.ibb.co/4m2zPNn/magician-Logo.png",
            "projectBanner": "https://img.freepik.com/free-vector/magic-school-classroom-night_107791-3187.jpg?w=1380&t=st=1686716218~exp=1686716818~hmac=1e8dea0b734aae84088b87bf2d20b05e9ae7c0d0b5c5743c80a7cd8aaa8c6ccd",
            "projectOverview": "Welcome to the Magic School Summer Camp website! This React-based project is designed to provide an exceptional summer camp experience for students. With a seamless integration of React, Express, MongoDB, Tailwind CSS, and Firebase, our platform offers personalized dashboards for students, instructors, and administrators. Enroll in captivating activities, access student, instructor, and admin dashboards, and embark on an unforgettable journey of learning and fun. Join us and let the magic of summer camp ignite your imagination!",
            "tools": ["HTML", "CSS", "JavaScript", "React", "Firebase", "Express JS", "mongoDB"],
            "category": "Fullstack"

        },
        {
            "_id": 2,
            "projectName": "Edutainment Toys",
            "liveLink": "https://edutainment-toys-ph.web.app/",
            "projectImg": "https://i.ibb.co/rkQhVKC/Edutainment-Toys.png",
            "projectLogo": "https://i.ibb.co/2Mh7mby/logoOne.png",
            "projectBanner": "https://images.unsplash.com/photo-1685358279653-868c0b99fe6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGVkdWNhdGlvbiUyMHRveXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "projectOverview": "Welcome to Edutainment Toy, an responsive educational toy website where users can explore, contribute, and engage with a wide range of educational toys. This website is built using React and Tailwind for the frontend, providing a visually appealing and user-friendly experience. For authentication, Firebase is utilized to ensure seamless and secure user login. On the backend, Express.js, a popular Node.js framework, is employed to handle the server-side operations, ensuring efficient and reliable functionality. MongoDB is integrated as the database, enabling effective storage and retrieval of toy-related data. One of the exciting features of this website is that it allows anyone to register and post their own toys, promoting a collaborative and interactive community. Join us and become a part of this educational toy journey!",
            "tools": ["HTML", "CSS", "JavaScript", "React", "Firebase", "Express JS", "mongoDB"],
            "category": "Fullstack"

        },
        {
            "_id": 3,
            "projectName": "Spice of Life",
            "liveLink": "https://spice-of-life-48f62.web.app/",
            "projectImg": "https://i.ibb.co/CbTsmRZ/Spice-of-Life.png",
            "projectLogo": "https://i.ibb.co/yNzL9Rg/logo2.png",
            "projectBanner": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "projectOverview": "Welcome to our recipe website, a platform where you can discover a wide variety of recipes from top chefs, and contribute your own recipes by signing up or signing in. This project was developed using React for the client-side, ensuring an interactive and user-friendly experience. To handle the server-side operations, we utilized Firebase and Express, leveraging their functionalities to create a seamless and efficient platform. Whether you're looking for culinary inspiration or eager to share your own delicious creations, our recipe website is here to satisfy your culinary desires.",
            "tools": ["HTML", "CSS", "JavaScript", "React", "Firebase", "Express JS"],
            "category": "Fullstack"
        },
    ]

    const tabPanels = ['All', 'Fullstack', 'Frontend']

    return (
        <div className='p-6 text-white'>

            <div className='space-y-4'>
                <h2 className='my-subtitle relative pl-3'><div className='absolute left-0 top-0 h-full w-1 bg-[#E84545]'></div>My projects</h2>
                <h2 className='my-title my-clr-one'>Transforming Ideas into Reality</h2>
            </div>

            <div>
                <Tabs>
                    <TabList className='flex gap-2'>
                        {
                            tabPanels.map((category, ind) => <Tab key={ind} onClick={() => setActiveTab(category)} className={`p-3 cursor-pointer outline-none ${activeTab === category && 'border-b border-green-500'}`}>{category}</Tab>)
                        }
                    </TabList>



                    {/* Tabpanel */}
                    {
                        tabPanels.map((tabPanel, ind) => {
                            return <TabPanel key={ind}>
                                {tabPanel === 'All' ? projects.map((p, ind) => {
                                    const { projectName, liveLink, projectImg, projectLogo, projectOverview, tools } = p || {}
                                    return <div key={ind} className='my-8 shadow-inner shadow-slate-600 p-5'>
                                        <div className='flex gap-5'>
                                            <div className='w-4/12 flex items-center justify-center'>
                                                <figure className='w-full h-64 relative'>
                                                    <Image
                                                        fill
                                                        src={projectImg}
                                                        alt={projectName}
                                                    />
                                                </figure>
                                            </div>
                                            <div className='flex-1 space-y-4'>
                                                <div className='flex gap-2 items-center'>
                                                    <Image width={45} height={45} src={projectLogo} alt={projectName}></Image>
                                                    <h2>{projectName}</h2>
                                                </div>
                                                <p className='text-gray-300'>{projectOverview}</p>
                                                <div>
                                                    <h3 className='my-subtitle text-green-500'>Technologies</h3>
                                                    <div className='my-2 flex gap-2 flex-wrap'>
                                                        {tools.map((tool, ind) => <span key={ind} className='px-5 py-2 bg-orange-500 text-orange-600 bg-opacity-10 rounded'>{tool}</span>)}
                                                    </div>
                                                </div>
                                                <button className='my-btn-one'> <Link target='_blank' href={liveLink}>Live link</Link> </button>
                                            </div>
                                        </div>
                                    </div>
                                })
                                    : projects.filter(project => project.category === tabPanel).map((p, ind) => {
                                        const { projectName, liveLink, projectImg, projectLogo, projectOverview, tools } = p || {}
                                        return <div key={ind} className='my-8 shadow-inner shadow-slate-600 p-5'>
                                            <div className='flex gap-5'>
                                                <div className='w-4/12 flex items-center justify-center'>
                                                    <figure className='w-full h-64 relative'>
                                                        <Image
                                                            fill
                                                            src={projectImg}
                                                            alt={projectName}
                                                        />
                                                    </figure>
                                                </div>
                                                <div className='flex-1 space-y-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <Image width={45} height={45} src={projectLogo} alt={projectName}></Image>
                                                        <h2>{projectName}</h2>
                                                    </div>
                                                    <p className='text-gray-300'>{projectOverview}</p>
                                                    <div>
                                                        <h3 className='my-subtitle text-green-500'>Technologies</h3>
                                                        <div className='my-2 flex gap-2 flex-wrap'>
                                                            {tools.map((tool, ind) => <span key={ind} className='px-5 py-2 bg-orange-500 text-orange-600 bg-opacity-10 rounded'>{tool}</span>)}
                                                        </div>
                                                    </div>
                                                    <button className='my-btn-one'> <Link target='_blank' href={liveLink}>Live link</Link> </button>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                            </TabPanel>
                        }
                        )
                    }

                </Tabs>
            </div>

        </div>
    );
};

export default ProjectsPage;