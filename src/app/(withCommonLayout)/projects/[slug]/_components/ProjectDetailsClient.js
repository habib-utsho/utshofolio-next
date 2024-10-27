// components/ProjectDetailsClient.js
"use client"; // This directive makes it a client component

import { Tag, Typography, Button, Tooltip, Space } from "antd";
import {
  LinkOutlined,
  GithubOutlined,
  EyeOutlined,
  TagsOutlined,
  TeamOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const ProjectDetailsClient = ({ project }) => {
  const {
    title,
    logo,
    banner,
    description,
    category,
    technologies,
    githubUrl,
    demoUrl,
    status,
    role,
  } = project.data;

  return (
    <div className="container mx-auto p-8">
      {/* Banner Image */}
      <div className="relative mb-6 h-64">
        <Image
          fill
          src={banner}
          alt={`${title} banner`}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Project Info Section */}
      <div className="flex items-center mb-4">
        <div className="relative w-20 h-20 mr-4">
          <Image
            fill
            src={logo}
            alt={`${title} logo`}
            className="rounded-full object-cover shadow-md"
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
      <h2 className="text-white text-center w-5/6 md:h-4/6 lg:w-3/6 mx-auto">
        The <span className="text-purple-500">{title}</span> project is a{" "}
        <strong className="text-purple-400">{category}</strong> initiative.{" "}
        {status === "Completed" ? (
          <span>
            This project has been successfully completed, showcasing the full
            scope of my work as a{" "}
            <strong className="text-purple-400">{role}</strong>.
          </span>
        ) : (
          <span>
            <Tag color="orange" className="mx-1">
              {status}
            </Tag>
            . The project is actively being developed, and I am contributing as
            a <strong className="text-purple-400">{role}</strong> to enhance its
            features.
          </span>
        )}
      </h2>

      {/* Technologies Section */}
      <div className="my-6">
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-4 rounded-lg shadow-lg">
          <h2 className="!text-gray-100 !mb-4 text-center !text-lg font-bold">
            Technologies Used
          </h2>
          <div className="flex gap-4 flex-wrap">
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

      {/* Action Buttons Section */}
      <div className="flex gap-4 mb-6">
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

      {/* Additional Information Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <Title level={4} className="text-gray-800 mb-2">
          More About This Project
        </Title>
        <div
          className="text-gray-700 mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Space>
          <Button
            type="link"
            href={demoUrl}
            target="_blank"
            icon={<EyeOutlined />}
          >
            View Project
          </Button>
          <Button
            type="link"
            href={githubUrl.frontend}
            target="_blank"
            icon={<GithubOutlined />}
          >
            View Frontend Code
          </Button>
          <Button
            type="link"
            href={githubUrl.backend}
            target="_blank"
            icon={<GithubOutlined />}
          >
            View Backend Code
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ProjectDetailsClient;
