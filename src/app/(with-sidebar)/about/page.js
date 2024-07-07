"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AboutPage = () => {
  return (
    <div className="text-white">
      <div className="p-3 md:p-6">
        <div>
          <h2 className="my-title">I am specialized in</h2>
          <div className="flex gap-2 items-center gradient-text font-bold my-title my-3">
            <span className="my-clr-one">{">"}</span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend development",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
                "Fullstack development",
                1000,
                "Performance optimization",
                1000,
                "Unique design pattern",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Technology */}
        <div className="bg-[#081229] shadow-md shadow-[#081229] p-6 space-y-8 my-10">
          <div className="space-y-3">
            <h2 className="my-subtitle relative pl-3">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
              Frontend Development
            </h2>
            <div className="flex flex-wrap gap-4">
              <span>Next JS</span>
              <span>React</span>
              <span>Redux</span>
              <span>Typescript</span>
              <span>Tailwind</span>
              <span>Ant Design</span>
              <span>ShadCn</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="my-subtitle relative pl-3">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
              Backend Development
            </h2>
            <div className="flex flex-wrap gap-4">
              <span>Express JS</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="my-subtitle relative pl-3">
              <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
              Tools
            </h2>
            <div className="flex flex-row flex-wrap gap-4">
              <span>Git</span>
              <span>JWT</span>
              <span>ESLint</span>
              <span>Prettier</span>
              <span>NPM</span>
              <span>Postman</span>
              <span>Figma</span>
              <span>PSD</span>
            </div>
          </div>
        </div>

        {/* About me */}
        <div className="my-8 space-y-5">
          {/* Introduction */}
          <div className="space-y-2">
            <h2 className="my-title gradient-text">Introduction</h2>
            <p className="leading-loose text-slate-200">
              Hello! I{"'"}m a passionate web developer with a love for crafting
              digital experiences. When I{"'"}m not coding, you can often find
              me indulging in my other passions – watching movies and series,
              listening to music, and diving into a good book. Let{"'"}s explore
              the web together!
            </p>
          </div>

          {/* About me */}
          <div className="my-8 space-y-5">
            <div className="space-y-2">
              <h2 className="my-title gradient-text">About me</h2>
              <p className="leading-loose text-slate-200">
                I am a passionate web developer with a focus on the MERN stack.
                I love building beautiful and functional websites and
                applications that make people{"'"}s lives easier. I am currently
                studying Computer Science at Dhaka International University,
                where I am learning the latest web development technologies. I
                am also an active member of the web development community, and I
                enjoy sharing my knowledge and skills with others.
              </p>
            </div>
          </div>

          {/* Approach and philosophy */}
          <div className="my-8 space-y-5">
            <div className="space-y-2">
              <h2 className="my-title gradient-text">
                Approach and Philosophy
              </h2>
              <p className="leading-loose text-slate-200">
                My approach to web development is driven by a user-centric
                focus, attention to detail, and a commitment to clean and
                efficient code. I believe in responsive design, continuous
                learning, and fostering collaborative partnerships with clients.
                Innovation and creativity are at the core of my work, ensuring
                unique and exceptional digital experiences. Let{"'"}s create
                something remarkable together!.
              </p>
            </div>
          </div>
        </div>

        {/* Courses and education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 mb-10 p-6 bg-[#081229] shadow-md text-white">
          {/* Course and experience */}
          <div>
            <h2 className="my-title relative pb-3">
              Courses and experiences{" "}
              <span className="block absolute top-full left-0 h-1 w-full bg-[#E84545]"></span>
            </h2>

            {/* DAP */}
            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">Digital Agency Park</h2>
                <p className="text-slate-300">Frontend developer</p>
              </div>
              <p className="text-slate-400">18 May, 2024 - Running</p>
            </div>
            {/* CodersFly */}
            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">Coders Fly</h2>
                <p className="text-slate-300">Frontend developer intern</p>
              </div>
              <p className="text-slate-400">01 Oct, 2023 - 10 Jan, 2024</p>
            </div>

            {/* PH */}
            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">Programming Hero</h2>
                <p className="text-slate-300">Full stack web development</p>
              </div>
              <p className="text-slate-400">01 Jan, 2023 - 17 Jun, 2023</p>
            </div>

            {/* European IT */}
            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">European IT solutions</h2>
                <p className="text-slate-300">
                  Industrial attachment with React
                </p>
              </div>
              <p className="text-slate-400">01 Oct, 2022 - 30 Dec, 2022</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="my-title relative pb-3">
              Education
              <span className="block absolute top-full left-0 h-1 w-full bg-[#E84545]"></span>
            </h2>

            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">Dhaka International University</h2>
                <p className="text-slate-300">
                  BSc in Computer Science and Engineering
                </p>
              </div>
              <p className="text-slate-400">2023 - Ongoing</p>
            </div>

            <div className="flex items-center justify-between gap-8 !my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle">Kurigram Polytechnic Institute</h2>
                <p className="text-slate-300">Diploma in Computer Science</p>
              </div>
              <p className="text-slate-400">2018 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
