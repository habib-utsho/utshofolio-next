// components/ProjectDetailsClient.js
"use client"; // This directive makes it a client component

import "@/styles/projectDetails.css";
import { Typography, Button, Tooltip, Space, Image, Tag } from "antd";
import {
  LinkOutlined,
  GithubOutlined,
  EyeOutlined,
  TagsOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const ProjectDetailsClient = ({ project }) => {
  const {
    title,
    logo,
    banner,
    description,
    isFeatured,
    category,
    technologies,
    githubUrl,
    demoUrl,
    status,
    role,
    tags,
  } = project.data || {};

  return (
    <div className="container mx-auto p-8">
      {/* Banner Image */}
      <div className="relative mb-6  overflow-hidden rounded-lg shadow-lg text-center bg-secondary">
        <Image
          src={banner}
          alt={`${title} banner`}
          preview // Enables automatic preview
          className="object-cover !-mb-1 !h-[450px] md:!h-[550px] lg:!h-[600px] transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
          style={{ borderRadius: "8px" }} // Use inline style for border radius
        />
        <div className="absolute bottom-0 rounded-tr-lg left-0 p-4 bg-purple-500/20">
          <div className="flex items-center gap-2">
            <h2 className="my-title gradient-text">{title}</h2>
            {isFeatured && (
              <TrophyOutlined className="text-xl md:text-3xl !text-purple-500" />
            )}
          </div>
        </div>
      </div>

      {/* Project Info Section */}
      <div className="flex items-center !mt-10">
        <div className="relative w-20 h-auto mr-4">
          <Image
            fill
            src={logo}
            alt={`${title} logo`}
            className="object-cover"
          />
        </div>
        <div className="text-gray-100 space-y-1">
          <p className="flex items-center gap-2">
            <TagsOutlined className="!text-purple-400" /> {category}
          </p>
          <p className="flex items-center gap-2">
            <TeamOutlined className="!text-purple-400" /> {role}
          </p>
          <p className="flex items-center gap-2">
            <ClockCircleOutlined className="!text-purple-400" /> Status:{" "}
            {status}
          </p>
        </div>
      </div>
      <h2 className="text-white text-center w-5/6 md:h-4/6 lg:w-3/6 mx-auto mt-10">
        The <strong className="text-purple-400">{title}</strong> project is a{" "}
        <strong className="text-purple-400">{category}</strong> initiative.{" "}
        {status === "Completed" ? (
          <span>
            This project has been successfully completed, showcasing the full
            scope of my work as a{" "}
            <strong className="text-purple-400">{role}</strong>.
          </span>
        ) : (
          <span>
            The project is actively being developed, and I am contributing as a{" "}
            <strong className="text-purple-400">{role}</strong> to enhance its
            features.
          </span>
        )}
      </h2>

      {/* Action Buttons Section */}
      <div className="flex gap-4 mt-10 flex-wrap">
        {demoUrl && (
          <Tooltip title="Live Demo" placement="top">
            <Button
              type="primary"
              href={demoUrl}
              target="_blank"
              icon={<LinkOutlined />}
            >
              Live Demo
            </Button>
          </Tooltip>
        )}
        {githubUrl?.frontend && (
          <Tooltip title="Frontend Repository" placement="top">
            <Button
              type="default"
              href={githubUrl.frontend}
              target="_blank"
              icon={<GithubOutlined />}
            >
              Frontend Repo
            </Button>
          </Tooltip>
        )}
        {githubUrl?.backend && (
          <Tooltip title="Backend Repository" placement="top">
            <Button
              type="default"
              href={githubUrl.backend}
              target="_blank"
              icon={<GithubOutlined />}
            >
              Backend Repo
            </Button>
          </Tooltip>
        )}
      </div>

      {/* Technologies Section */}
      <div className="mt-10">
        <div className="bg-gradient-to-r from-[#1a1a2e] to-secondary p-4 rounded-lg shadow-lg">
          <h2 className="!text-gray-100 !mb-4 text-center !text-lg font-bold">
            Technologies Used
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {technologies?.map((tech, index) => (
              <div
                key={index}
                className="shadow shadow-white/50 text-white rounded-lg p-3 min-w-[175px] text-center"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-10">
        <Title level={3} className="text-gray-800 mb-2">
          More About This Project
        </Title>
        <div className="my-portfolio">
          <div
            className="text-gray-700 mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            type="link"
            href={demoUrl}
            target="_blank"
            icon={<EyeOutlined />}
            className="!text-primary"
          >
            View Project
          </Button>
          {githubUrl?.frontend && (
            <Button
              type="link"
              href={githubUrl.frontend}
              target="_blank"
              icon={<GithubOutlined />}
              className="!text-primary"
            >
              View Frontend Code
            </Button>
          )}
          {githubUrl?.frontend && (
            <Button
              type="link"
              href={githubUrl.backend}
              target="_blank"
              icon={<GithubOutlined />}
              className="!text-primary"
            >
              View Backend Code
            </Button>
          )}
        </div>
      </div>

      {/* Tags */}
      {tags?.length > 0 ? (
        <div className="my-4">
          {tags?.map((tag, ind) => (
            <Tag key={ind}>{tag}</Tag>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectDetailsClient;
