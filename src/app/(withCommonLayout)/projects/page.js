"use client";
import React, { useState } from "react";
import { useGetAllProjects } from "@/hooks/project.hook"; // Custom hook for fetching projects
import Image from "next/image";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Import react-tabs components
import "react-tabs/style/react-tabs.css"; // Basic styles for react-tabs
import { Tag } from "antd";
import ProjectCard from "./_components/ProjectCard";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [pagination, setPagination] = useState({ limit: 5000000, page: 1 });

  // Fetching project data
  const { data: projects, isPending: isLoadingProjects } = useGetAllProjects([
    { name: "limit", value: pagination.limit },
    { name: "page", value: pagination.page },
  ]);

  // Filtering projects based on active tab
  const filteredProjects =
    activeTab === "All"
      ? projects?.data
      : projects?.data?.filter((p) => p.category === activeTab);

  const tabPanels = ["All", "Fullstack", "Frontend", "Backend"];

  return (
    <div className="p-6 text-white min-h-screen">
      <div className="space-y-4 mb-6">
        <h2 className="my-subtitle relative pl-3">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
          My projects
        </h2>
        <h2 className="my-title bg-clip-text text-transparent cmn-gradient-one">
          Transforming Ideas into Reality
        </h2>
      </div>

      <Tabs
        selectedIndex={tabPanels.indexOf(activeTab)}
        onSelect={(index) => setActiveTab(tabPanels[index])}
      >
        <TabList className="flex">
          {tabPanels.map((category, ind) => (
            <Tab
              key={ind}
              className={`p-3 border border-slate-200 cursor-pointer outline-none transition font-semibold ${
                activeTab === category && "!bg-[#081229] !text-purple-500"
              }`}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {tabPanels.map((tabPanel, index) => (
          <TabPanel key={index}>
            {filteredProjects?.map((project, ind) => {
              return <ProjectCard key={ind} project={project} />;
            })}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
