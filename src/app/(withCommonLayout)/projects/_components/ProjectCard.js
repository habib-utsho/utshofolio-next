import { Tag, Button, Tooltip } from "antd";
import {
  LinkOutlined,
  GithubOutlined,
  UserOutlined,
  ProjectOutlined,
  TagsOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const {
    _id,
    title,
    demoUrl,
    banner,
    logo,
    category,
    status,
    role,
    technologies,
    githubUrl,
  } = project;

  if (!project) return null;

  return (
    <Tooltip
      title={
        <div className="flex items-center">
          <Image
            src={logo} // Use the project logo as the icon
            alt={`${title} logo`}
            className="mr-2 w-8 h-8 object-cover rounded-full" // Adjust size and style
            width={32}
            height={32}
          />
          <span>Click to view details for {title}</span>
        </div>
      }
      placement="top"
    >
      <Link
        href={`/projects/${_id}`}
        className="my-8 rounded-xl overflow-hidden p-6 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-lg hover:shadow-2xl transition-shadow duration-300 block relative group"
      >
        <div className="absolute top-4 -right-8 text-white/30  group-hover:text-white group-hover:right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ArrowRightOutlined className=" text-lg" /> {/* Clickable icon */}
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Project Banner */}
          <div className="w-full md:w-4/12 flex items-center justify-center">
            <figure className="w-full h-64 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]">
              <Image
                fill
                src={banner}
                alt={`${title} banner`}
                className="object-cover rounded-lg"
              />
            </figure>
          </div>

          {/* Project Details */}
          <div className="flex-1 space-y-4 text-white">
            <div className="flex items-center gap-3">
              {/* Project Logo */}
              <figure className="w-12 h-12 relative overflow-hidden rounded-full shadow-sm">
                <Image
                  fill
                  src={logo}
                  alt={`${title} logo`}
                  className="object-cover"
                />
              </figure>

              {/* Project Title */}
              <h2 className="text-xl font-bold">{title}</h2>
            </div>

            {/* Technologies Section */}
            <div>
              <h3 className="text-lg font-semibold text-purple-300">
                Technologies
              </h3>
              <div className="my-2 flex gap-2 flex-wrap">
                {technologies.map((tech, ind) => (
                  <Tag
                    key={ind}
                    className="px-4 py-1 bg-white text-gray-900 bg-opacity-20 rounded-full shadow-sm"
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Project Info */}
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

            {/* Links Section */}
            <div className="flex flex-wrap gap-3 mt-4">
              {demoUrl && (
                <Link target="_blank" href={demoUrl} legacyBehavior>
                  <button className="my-btn-one !border-purple-500">
                    <LinkOutlined /> Live Link
                  </button>
                </Link>
              )}
              {githubUrl?.frontend && (
                <Link target="_blank" href={githubUrl?.frontend} legacyBehavior>
                  <button className="my-btn-one">
                    <GithubOutlined /> Frontend Repo
                  </button>
                </Link>
              )}
              {githubUrl?.backend && (
                <Link target="_blank" href={githubUrl?.backend} legacyBehavior>
                  <button className="my-btn-one">
                    <GithubOutlined /> Backend Repo
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
};

export default ProjectCard;
