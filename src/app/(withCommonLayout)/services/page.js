import Link from "next/link";
import React, { Suspense } from "react";
import { ImStarFull } from "react-icons/im";
import {
  AntDesignOutlined,
  CodeOutlined,
  RocketOutlined,
  StarOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { getAllTechnologies } from "@/services/technology";

const ServicesPage = async () => {
  const technologies = await getAllTechnologies([
    { name: "limit", value: 50000 },
    { name: "isFeatured", value: true },
  ]);

  return (
    <div className="p-6 grid grid-cols-12 gap-8 pb-16 md:pb-6 text-slate-50">
      <div className="col-span-12 md:col-span-4 space-y-3">
        <h2 className="my-subtitle relative pl-3">
          <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
          Services
        </h2>

        <h2 className="my-title gradient-text">What I do?</h2>

        <p className="text-slate-300 !my-6">
          Welcome to my Services Page! As a solo web developer, I specialize in
          solving problems and creating exceptional digital solutions. With a
          focus on usability and functionality, I design and develop websites
          and applications that make a real impact.
        </p>

        <div className="space-y-3">
          <h2 className="my-subtitle">What you can expect?</h2>
          <ul className="text-slate-300 space-y-3 px-6">
            <li className="list-disc">Front-end Development</li>
            <li className="list-disc">Design Strategy</li>
            <li className="list-disc">Performance Optimization</li>
            <li className="list-disc">Fullstack Development</li>
          </ul>
        </div>

        <div className="space-y-3 !my-10">
          <h2 className="my-subtitle">Proficient in</h2>
          <Suspense fallback="Loading....">
            <ul className="text-slate-300 space-y-3 px-6">
              {technologies?.data
                ?.sort((a, b) => a?.position - b?.position)
                ?.map((tech, ind) => (
                  <li key={ind} className="list-disc">
                    {tech?.name}
                  </li>
                ))}
            </ul>
          </Suspense>
        </div>

        <Link href={"https://www.linkedin.com/in/habib-utsho"} target="_blank">
          <button className="my-btn-one">Contact with me</button>
        </Link>
      </div>

      <div className="col-span-12 md:col-span-8 space-y-4 flex flex-col justify-center">
        <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
          <span className="w-1/12 text-3xl text-[#E84545]">
            <CodeOutlined />
          </span>
          <div className="space-y-3 flex-1">
            <h2 className="my-subtitle">Web Development</h2>
            <p className="text-slate-300">
              I am a web developer with over 2 years of experience in building
              and maintaining websites. My expertise spans various technologies,
              including Next.js, Typescript, Tailwind, Express.js, MongoDB,
              Mongoose, Firebase and many more.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
          <span className="w-1/12 text-3xl text-[#E84545]">
            <AntDesignOutlined />
          </span>
          <div className="space-y-3 flex-1">
            <h2 className="my-subtitle">Design Strategy</h2>
            <p className="text-slate-300">
              As a design strategist, I align business goals with audience needs
              to craft effective web experiences. I focus on purposeful designs
              that balance functionality with an engaging visual presence.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
          <span className="w-1/12 text-3xl text-[#E84545]">
            <RocketOutlined />
          </span>
          <div className="space-y-3 flex-1">
            <h2 className="my-subtitle">Frontend Development</h2>
            <p className="text-slate-300">
              I am skilled in frontend development, utilizing tools like
              Tailwind, Bootstrap, React, and Framer Motion. I design intuitive,
              accessible, and performance-optimized user interfaces.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
          <span className="w-1/12 text-3xl text-[#E84545]">
            <ThunderboltOutlined />
          </span>
          <div className="space-y-3 flex-1">
            <h2 className="my-subtitle">Performance Optimization</h2>
            <p className="text-slate-300">
              Specializing in performance optimization, I improve site speed by
              optimizing code, images, and resources, ensuring fast load times
              and improved SEO rankings.
            </p>
          </div>
        </div>

        <div className="p-5 flex flex-col sm:flex-row gap-2 items-center bg-secondary transition shadow-lg shadow-white/5 rounded hover:rounded-lg">
          <span className="w-1/12 text-3xl text-[#E84545]">
            <StarOutlined />
          </span>
          <div className="space-y-3 flex-1">
            <h2 className="my-subtitle">Fullstack Development</h2>
            <p className="text-slate-300">
              As a fullstack developer, I manage both frontend and backend tasks
              using the MERN stack. My experience includes building secure,
              performance-driven applications from end to end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
