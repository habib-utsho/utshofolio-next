"use client";
import React, { useState } from "react";
import { useGetAllProjects } from "@/hooks/project.hook"; // Custom hook for fetching projects
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // Import react-tabs components
import "react-tabs/style/react-tabs.css"; // Basic styles for react-tabs
import { Empty, Skeleton, Tag } from "antd";
import ProjectCard from "./_components/ProjectCard";
import MyMotion from "@/ui/MyMotion";

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

  // const tabPanels = ["All", "Full Stack", "Frontend", "Backend"];
  // const tabPanels = ["All", "Full Stack", "Frontend",];
  let tabPanels;
  if (projects?.data?.filter((p) => p.category === "Backend")?.length > 0) {
    tabPanels = ["All", "Full Stack", "Frontend", "Backend"];
  } else {
    tabPanels = ["All", "Full Stack", "Frontend"];
  }

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
                activeTab === category &&
                "!bg-secondary !rounded-none !text-purple-500"
              }`}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {tabPanels.map((tabPanel, index) => (
          <TabPanel key={index}>
            {isLoadingProjects ? (
              <div className="my-8 space-y-8">
                {Array.from({ length: 4 })?.map((_, ind) => (
                  <div className="bg-secondary !rounded">
                    <Skeleton
                      key={ind}
                      // className="rounded-xl bg-gradient-to-r from-[#1a1a2e] to-secondary/20 !w-full !h-[300px]"
                      paragraph={{ rows: 10 }}
                      className="bg-white/5 !rounded p-5 py-8 !w-full !h-[200px] !shadow-lg !shadow-white/5"
                      active
                    />
                  </div>
                ))}
              </div>
            ) : filteredProjects?.length === 0 ? (
              <div className="h-[60vh] flex items-center justify-center">
                <Empty
                  description={
                    <span style={{ color: "white" }}>No project found!</span>
                  }
                />
              </div>
            ) : (
              filteredProjects
                ?.sort((a, b) => a?.position - b?.position)
                ?.map((project, ind) => (
                  <MyMotion y={50} key={ind}>
                    <ProjectCard project={project} />
                  </MyMotion>
                ))
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectsPage;
