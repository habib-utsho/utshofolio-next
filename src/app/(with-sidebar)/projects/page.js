'use client'
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState('All')

    const projects = [
        {
            projectId: 1,
            projectName: 'Spice of life',
            projectImg: '',
            category: 'Fullstack'
        },
        {
            projectId: 2,
            projectName: 'Front test',
            projectImg: '',
            category: 'Frontend'
        }
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
                            ['All'].concat(projects.map(project => project.category)).map((pCategory, ind) => <Tab key={ind} onClick={() => setActiveTab(pCategory)} className={`p-3 cursor-pointer outline-none ${activeTab === pCategory && 'border-b border-green-500'}`}>{pCategory}</Tab>)
                        }
                    </TabList>


                    {/* Tabpanel */}
                    {
                        tabPanels.map((tabPanel, ind) => {
                            return <TabPanel key={ind}>
                                <div className='grid grid-cols-2 gap-5'>
                                    {tabPanel === 'All' ? projects.map((p, ind) => {
                                        return <div key={ind}>
                                            <h2>{p.projectName}</h2>
                                        </div>
                                    })
                                        : projects.filter(project => project.category === tabPanel).map((p, ind) => {
                                            return <div key={ind}>
                                                <h2>{p.projectName}</h2>
                                            </div>
                                        })}
                                </div>
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