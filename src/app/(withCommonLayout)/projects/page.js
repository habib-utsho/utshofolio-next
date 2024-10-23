"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      _id: 1,
      projectName: "WizCraft Academy",
      liveLink: "https://wizcraft-academy.web.app/",
      projectImg: "https://i.ibb.co/6Y3GswW/Wiz-Craft-Academy.png",
      projectLogo: "https://i.ibb.co/4m2zPNn/magician-Logo.png",
      projectOverview:
        "Welcome to the Magic School Summer Camp website! This React-based project is designed to provide an exceptional summer camp experience for students. With a seamless integration of React, Express, MongoDB, Tailwind CSS, and Firebase, our platform offers personalized dashboards for students, instructors, and administrators. Enroll in captivating activities, access student, instructor, and admin dashboards, and embark on an unforgettable journey of learning and fun. Join us and let the magic of summer camp ignite your imagination!",
      tools: ["React", "Firebase", "Express JS", "mongoDB"],
      category: "Fullstack",
    },
    {
      _id: 2,
      projectName: "Edutainment Toys",
      liveLink: "https://edutainment-toys-ph.web.app/",
      projectImg: "https://i.ibb.co/rkQhVKC/Edutainment-Toys.png",
      projectLogo: "https://i.ibb.co/2Mh7mby/logoOne.png",
      projectOverview:
        "Welcome to Edutainment Toy, an responsive educational toy website where users can explore, contribute, and engage with a wide range of educational toys. This website is built using React and Tailwind for the frontend, providing a visually appealing and user-friendly experience. For authentication, Firebase is utilized to ensure seamless and secure user login. On the backend, Express.js, a popular Node.js framework, is employed to handle the server-side operations, ensuring efficient and reliable functionality. MongoDB is integrated as the database, enabling effective storage and retrieval of toy-related data. One of the exciting features of this website is that it allows anyone to register and post their own toys, promoting a collaborative and interactive community. Join us and become a part of this educational toy journey!",
      tools: ["React", "Firebase", "Express JS", "mongoDB"],
      category: "Fullstack",
    },
    {
      _id: 3,
      projectName: "Spice of Life",
      liveLink: "https://spice-of-life-48f62.web.app/",
      projectImg: "https://i.ibb.co/CbTsmRZ/Spice-of-Life.png",
      projectLogo: "https://i.ibb.co/yNzL9Rg/logo2.png",
      projectOverview:
        "Welcome to our recipe website, a platform where you can discover a wide variety of recipes from top chefs, and contribute your own recipes by signing up or signing in. This project was developed using React for the client-side, ensuring an interactive and user-friendly experience. To handle the server-side operations, we utilized Firebase and Express, leveraging their functionalities to create a seamless and efficient platform. Whether you're looking for culinary inspiration or eager to share your own delicious creations, our recipe website is here to satisfy your culinary desires.",
      tools: ["React", "Firebase", "Express JS"],
      category: "Fullstack",
    },
    {
      _id: 4,
      projectName: "Digital Agency Park",
      liveLink: "https://www.digitalagencypark.com",
      projectImg: "https://i.ibb.co/xXBgBG3/Screenshot-2024-07-08-002634.png",
      projectLogo: "https://i.ibb.co/fFDY9Wp/logo.jpg",
      projectOverview: "I developed a portfolio website and an admin dashboard for Digital Agency Park using React, Redux, Ant Design, and Tailwind CSS. The website features a responsive design, ensuring optimal viewing on all devices. Redux efficiently manages the application state for a smooth user experience. Ant Design provides professional and sleek UI components, while React enables interactive and dynamic elements. The admin dashboard allows for easy content management and site updates. This combination effectively showcases Digital Agency Park's projects, services, and team members in a modern and visually appealing manner.",
      tools: ["React", "Redux", "Tailwind", "AntD"],
      category: "Frontend",
    },
    {
      _id: 5,
      projectName: "Cuisine Food",
      liveLink: "https://cuisinefood.netlify.app/",
      projectImg: "https://i.ibb.co/rf0KmGf/Cuisine-Food-1.png",
      projectLogo: "https://i.ibb.co/8xSFNB1/logo.png",
      projectOverview:
        "Welcome to my food-related website! Here, I'm excited to share my culinary explorations, passion for flavors, and love for creating delightful gastronomic experiences. Whether you're a seasoned food enthusiast or someone just starting to appreciate the art of cooking, you'll find a variety of delectable recipes, cooking tips, and culinary inspirations to tickle your taste buds.",
      tools: ["HTML", "CSS", "Tailwind", "DaisyUI"],
      category: "Frontend",
    },
    {
      _id: 6,
      projectName: "ColorScript",
      liveLink: "https://source-code-007.github.io/ColorScript/",
      projectImg: "https://i.ibb.co/4wyQnwT/Color-Script.png",
      projectLogo: "https://i.ibb.co/R7wWPKk/registration-mark-1203892.png",
      projectOverview:
        "ColorScript is a random color generator project. ColorScript is a simple yet powerful JavaScript random color generator that allows you to generate random colors, fine-tune your colors, and save your favorite colors for future reference. With its intuitive interface and easy-to-use controls, ColorScript is the perfect tool for anyone who wants to work with colors.",
      tools: ["HTML", "CSS", "Tailwind", "JavaScript"],
      category: "Frontend",
    },
    {
      _id: 7,
      projectName: "BrainBuzz",
      liveLink: "https://source-code-007.github.io/quiz-app/",
      projectImg: "https://i.ibb.co/SQFXWk1/Quiz.png",
      projectLogo: "https://i.ibb.co/S3vbwWM/question-3888666.png",
      projectOverview:
        "BrainBuzz is a quiz application built using HTML, CSS, and JavaScript that challenges users with a variety of questions and tests their knowledge. The app provides an exciting and time-sensitive experience, pushing users to think quickly and make informed decisions. The app also helps users learn by providing correct answers and explanations if they select the wrong answer.",
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "Frontend",
    },
    {
      _id: 8,
      projectName: "IELTS Wizards",
      liveLink: "https://ielts-wizards.netlify.app/",
      projectImg: "https://i.ibb.co/4Vy1NdQ/IELTS-Wizards.png",
      projectLogo: "https://i.ibb.co/mNnRdYt/In-Gelt-white.png",
      projectOverview:
        "Welcome to IELTS-Wizards! Our project is your ultimate guide to conquering the IELTS exam. With personalized resources, expert guidance, and a supportive community, we're here to help you achieve your IELTS goals with confidence and success.",
      tools: ["React", "Tailwind"],
      category: "Frontend",
    },
    {
      _id: 9,
      projectName: "Finix Template",
      liveLink: "https://source-code-007.github.io/Finix-template/",
      projectImg: "https://i.ibb.co/2jTpZ4k/Hello-world.png",
      projectLogo: "https://i.ibb.co/GsCyydD/logo.png",
      projectOverview:
        "Finix Template is a website which provides your Business Loan Solution. Our project offers a sleek website template designed for businesses seeking loans. Showcase services, benefits, and easy connections, all while creating a strong online presence for financial success.",
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "Frontend",
    },
    {
      _id: 10,
      projectName: "Clothing",
      liveLink: "https://source-code-007.github.io/clothing-KPI/index.html",
      projectImg: "https://i.ibb.co/nM7wcSf/Creative-Fabrica.png",
      projectLogo: "https://i.ibb.co/1q7SYGy/dark-logo.png",
      projectOverview:
        "Welcome to Clothing website, your one-stop shop for stylish and affordable clothes. We offer a wide variety of men's, women's, and children's clothing, all made from high-quality materials. We also have a wide selection of accessories, so you can complete your look. We're passionate about fashion and we're always looking for new trends to bring to our customers. We also believe in sustainable practices, so we use recycled materials whenever possible. Whether you're looking for a new outfit for a special occasion or you just need some everyday staples, we have something for you. Shop our latest arrivals today and see for yourself why Clothing is the best place to buy clothes online.",
      tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
      category: "Frontend",
    },
    {
      _id: 11,
      projectName: "iGuru",
      liveLink:
        "https://source-code-007.github.io/onlineEducation_iGuru_KPI_finalProject/",
      projectImg: "https://i.ibb.co/wy3fWdZ/iGuru.png",
      projectLogo: "https://i.ibb.co/2Wpfkdg/counter-Img-One.webp",
      projectOverview:
        "Your Path to Online Learning! Our project is a user-friendly website designed to revolutionize your learning experience. With iGuru, you can access a diverse range of courses and educational resources from the comfort of your own space. Explore a seamless interface that connects you with expert instructors and engaging content. From skill enhancement to personal growth, iGuru offers a platform that caters to learners of all levels. Browse courses, track progress, and interact with fellow students to enhance your knowledge and achieve your learning goals.",
      tools: ["HTML", "CSS", "Tailwind", "JavaScript", "jQuery"],
      category: "Frontend",
    },
    {
      _id: 12,
      projectName: "AnalogGlow",
      liveLink: "https://source-code-007.github.io/Analog-Clock/",
      projectImg: "https://i.ibb.co/zHwQV6v/Analog-Clock.png",
      projectLogo: "https://i.ibb.co/GV7N2tR/clock-2784459.png",
      projectOverview:
        "Introducing AnalogGlow - a project that celebrates the timeless beauty of analog clocks. Immerse yourself in the artistry of simplicity as you explore our elegant analog clock design. With gracefully sweeping hands and a classic dial, our project brings the essence of traditional timekeeping to the digital realm.",
      tools: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
    },
  ];

  const tabPanels = ["All", "Fullstack", "Frontend"];

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

      <div>
        <Tabs>
          <TabList className="flex">
            {tabPanels.map((category, ind) => (
              <Tab
                key={ind}
                onClick={() => setActiveTab(category)}
                className={`p-3 border border-slate-200 cursor-pointer outline-none transition font-semibold ${
                  activeTab === category && "!bg-[#081229] !text-purple-500"
                }`}
              >
                {category}
              </Tab>
            ))}
          </TabList>

          {/* Tabpanel */}
          {tabPanels.map((tabPanel, ind) => {
            return (
              <TabPanel key={ind}>
                {tabPanel === "All"
                  ? projects.map((p, ind) => {
                      const {
                        projectName,
                        liveLink,
                        projectImg,
                        projectLogo,
                        projectOverview,
                        tools,
                      } = p || {};
                      return (
                        <div
                          key={ind}
                          className="my-8 shadow-inner shadow-slate-600 p-5"
                        >
                          <div className="flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-4/12 flex items-center justify-center">
                              <figure className="w-full h-64 relative">
                                <Image
                                  fill
                                  src={projectImg}
                                  alt={projectName}
                                />
                              </figure>
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="flex gap-2 items-center">
                                <figure className="w-12 h-12 relative">
                                  <Image
                                    fill={true}
                                    src={projectLogo}
                                    alt={projectName}
                                  ></Image>
                                </figure>
                                <h2 className="my-subtitle">{projectName}</h2>
                              </div>
                              <p className="text-gray-300">{projectOverview}</p>
                              <div>
                                <h3 className="my-subtitle gradient-text">
                                  Technologies
                                </h3>
                                <div className="my-2 flex gap-2 flex-wrap">
                                  {tools.map((tool, ind) => (
                                    <span
                                      key={ind}
                                      className="px-5 py-2 bg-white text-white bg-opacity-10 rounded"
                                    >
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <button className="my-btn-one">
                                {" "}
                                <Link target="_blank" href={liveLink}>
                                  Live link
                                </Link>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : tabPanel === "Fullstack"
                  ? projects
                      .filter((project) => project.category === "Fullstack")
                      .map((p, ind) => {
                        const {
                          projectName,
                          liveLink,
                          projectImg,
                          projectLogo,
                          projectOverview,
                          tools,
                        } = p || {};
                        return (
                          <div
                            key={ind}
                            className="my-8 shadow-inner shadow-slate-600 p-5"
                          >
                            <div className="flex flex-col md:flex-row gap-5">
                              <div className="w-full md:w-4/12 flex items-center justify-center">
                                <figure className="w-full h-64 relative">
                                  <Image
                                    fill
                                    src={projectImg}
                                    alt={projectName}
                                  />
                                </figure>
                              </div>
                              <div className="flex-1 space-y-4">
                                <div className="flex gap-2 items-center">
                                  <figure className="w-12 h-12 relative">
                                    <Image
                                      fill={true}
                                      src={projectLogo}
                                      alt={projectName}
                                    ></Image>
                                  </figure>
                                  <h2 className="my-subtitle">{projectName}</h2>
                                </div>
                                <p className="text-gray-300">
                                  {projectOverview}
                                </p>
                                <div>
                                  <h3 className="my-subtitle gradient-text">
                                    Technologies
                                  </h3>
                                  <div className="my-2 flex gap-2 flex-wrap">
                                    {tools.map((tool, ind) => (
                                      <span
                                        key={ind}
                                        className="px-5 py-2 bg-white text-white bg-opacity-10 rounded"
                                      >
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <button className="my-btn-one">
                                  {" "}
                                  <Link target="_blank" href={liveLink}>
                                    Live link
                                  </Link>{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                  : tabPanel === "Frontend"
                  ? projects
                      .filter((project) => project.category === "Frontend")
                      .map((p, ind) => {
                        const {
                          projectName,
                          liveLink,
                          projectImg,
                          projectLogo,
                          projectOverview,
                          tools,
                        } = p || {};
                        return (
                          <div
                            key={ind}
                            className="my-8 shadow-inner shadow-slate-600 p-5"
                          >
                            <div className="flex flex-col md:flex-row gap-5">
                              <div className="w-full md:w-4/12 flex items-center justify-center">
                                <figure className="w-full h-64 relative">
                                  <Image
                                    fill
                                    src={projectImg}
                                    alt={projectName}
                                  />
                                </figure>
                              </div>
                              <div className="flex-1 space-y-4">
                                <div className="flex gap-2 items-center">
                                  <figure className="w-12 h-12 relative">
                                    <Image
                                      fill={true}
                                      src={projectLogo}
                                      alt={projectName}
                                    ></Image>
                                  </figure>
                                  <h2 className="my-subtitle">{projectName}</h2>
                                </div>
                                <p className="text-gray-300">
                                  {projectOverview}
                                </p>
                                <div>
                                  <h3 className="my-subtitle gradient-text">
                                    Technologies
                                  </h3>
                                  <div className="my-2 flex gap-2 flex-wrap">
                                    {tools.map((tool, ind) => (
                                      <span
                                        key={ind}
                                        className="px-5 py-2 bg-white text-white bg-opacity-10 rounded"
                                      >
                                        {tool}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <button className="my-btn-one">
                                  {" "}
                                  <Link target="_blank" href={liveLink}>
                                    Live link
                                  </Link>{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                  : ""}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectsPage;
