"use client";
import MyMotion from "@/ui/MyMotion";
import React from "react";
import {
  AntDesignOutlined,
  CodeOutlined,
  RocketOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const OfferedServices = () => {
  const serviceData = [
    {
      icon: <CodeOutlined />,
      title: "Web Development",
      description:
        "I am a web developer with over 2 years of experience in building and maintaining websites. My expertise spans various technologies, including Next.js, Typescript, Tailwind, Express.js, MongoDB, Mongoose, Firebase and many more.",
    },
    {
      icon: <AntDesignOutlined />,
      title: "Design Strategy",
      description:
        "As a design strategist, I align business goals with audience needs to craft effective web experiences. I focus on purposeful designs that balance functionality with an engaging visual presence.",
    },
    {
      icon: <RocketOutlined />,
      title: "Frontend Development",
      description:
        "I am skilled in frontend development, utilizing tools like Tailwind, Bootstrap, React, and Framer Motion. I design intuitive, accessible, and performance-optimized user interfaces.",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Performance Optimization",
      description:
        "Specializing in performance optimization, I improve site speed by optimizing code, images, and resources, ensuring fast load times and improved SEO rankings.",
    },
    {
      icon: <StarOutlined />,
      title: "Fullstack Development",
      description:
        "As a fullstack developer, I manage both frontend and backend tasks using the MERN stack. My experience includes building secure, performance-driven applications from end to end.",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8 space-y-4 flex flex-col justify-center">
      {serviceData.map((service, index) => (
        <MyMotion y={index % 2 === 0 ? -50 : 50} key={index}>
          <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
            <span className="w-1/12 text-3xl text-[#E84545]">
              {service.icon}
            </span>
            <div className="space-y-3 flex-1">
              <h2 className="my-subtitle">{service.title}</h2>
              <p className="text-slate-300">{service.description}</p>
            </div>
          </div>
        </MyMotion>
      ))}
    </div>
  );
};

export default OfferedServices;
