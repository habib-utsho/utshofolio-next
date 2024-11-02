"use client";
import { useGetAllEducation } from "@/hooks/education.hook";
import { useGetAllExperiences } from "@/hooks/experience.hook";
import { useGetAllTechnologies } from "@/hooks/technology.hook";
import MyMotion from "@/ui/MyMotion";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Empty, Modal, Skeleton } from "antd";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "@/styles/expDetails.css";

const AboutPage = () => {
  const { data: technologies, isPending: isLoadingTechnology } =
    useGetAllTechnologies([{ name: "limit", value: 50000 }]);
  const { data: experiences, isPending: isLoadingExperience } =
    useGetAllExperiences([{ name: "limit", value: 50000 }]);
  const { data: educations, isPending: isLoadingEducation } =
    useGetAllEducation([{ name: "limit", value: 50000 }]);

  const [selectedExperience, setSelectedExperience] = useState(null);

  console.log(experiences, "experiences");
  console.log(selectedExperience, "selectedExperience");

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
                "Full stack development",
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
        {isLoadingTechnology ? (
          <div className="my-10 bg-secondary rounded">
            <Skeleton
              active
              paragraph={{ rows: 10 }}
              className="bg-white/5 !rounded p-5 py-8 !w-full !h-[200px] !shadow-lg !shadow-white/5"
            />
          </div>
        ) : technologies?.meta?.total === 0 ? (
          <Empty
            description={
              <span style={{ color: "white" }}>No skills found!</span>
            }
          />
        ) : (
          <MyMotion y={50}>
            {" "}
            <div className="bg-secondary  shadow-lg shadow-white/5 rounded p-6 space-y-8 my-10">
              <div className="space-y-3">
                <h2 className="my-subtitle relative pl-3">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
                  Frontend
                </h2>
                <div className="flex flex-wrap gap-4">
                  {technologies?.data
                    ?.filter((tech) => tech?.category === "Frontend")
                    ?.sort((a, b) => a?.position - b?.position)
                    ?.map((tech, ind) => (
                      <span key={ind}>{tech?.name}</span>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="my-subtitle relative pl-3">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
                  Backend
                </h2>
                <div className="flex flex-wrap gap-4">
                  {technologies?.data
                    ?.filter((tech) => tech?.category === "Backend")
                    ?.sort((a, b) => a?.position - b?.position)
                    ?.map((tech, ind) => (
                      <span key={ind}>{tech?.name}</span>
                    ))}
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="my-subtitle relative pl-3">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
                  Full Stack
                </h2>
                <div className="flex flex-wrap gap-4">
                  {technologies?.data
                    ?.filter((tech) => tech?.category === "Full Stack")
                    ?.sort((a, b) => a?.position - b?.position)
                    ?.map((tech, ind) => (
                      <span key={ind}>{tech?.name}</span>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="my-subtitle relative pl-3">
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#E84545]"></div>
                  Tools
                </h2>
                <div className="flex flex-wrap gap-4">
                  {technologies?.data
                    ?.filter((tech) => tech?.category === "Tools")
                    ?.sort((a, b) => a?.position - b?.position)
                    ?.map((tech, ind) => (
                      <span key={ind}>{tech?.name}</span>
                    ))}
                </div>
              </div>
            </div>
          </MyMotion>
        )}

        {/* About me */}
        <div className="my-8 space-y-5">
          {/* Introduction */}
          <div className="space-y-2">
            <h2 className="my-title gradient-text">Introduction</h2>
            <p className="leading-loose text-slate-200">
              Hey there! I{"'"}m a passionate web developer with a love for
              crafting digital experiences. When I{"'"}m not coding, you can
              often find me indulging in my other passions – watching movies and
              series, listening to music, and diving into a good book. Let{"'"}s
              explore the web together!
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
                studying BSc in Computer Science and Engineering at Dhaka
                International University, where I’m building a solid foundation
                in computer science fundamentals. I am also an active member of
                the web development community, and I enjoy sharing my knowledge
                and skills with others.
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
                something remarkable together!
              </p>
            </div>
          </div>
        </div>

        {/* Exp, Courses and education */}
        <MyMotion y={-50}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 mb-10 p-6 bg-[#081229] text-white rounded shadow-lg shadow-white/5">
            {/* Course and experience */}
            <div>
              <h2 className="my-title relative pb-3">
                Experiences
                <span className="block absolute top-full left-0 h-1 w-full bg-[#E84545]"></span>
              </h2>
              {isLoadingExperience ? (
                <div className="!my-10">
                  <Skeleton
                    active
                    paragraph={{ rows: 10 }}
                    className="bg-white/5 p-5 rounded"
                  />
                </div>
              ) : (
                experiences?.data
                  ?.filter((exp) => !exp?.isCourse)
                  ?.sort((a, b) => a?.position - b?.position)
                  ?.map((exp, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex items-center justify-between gap-8 !my-10"
                      >
                        <div className="space-y-3">
                          <h2 className="my-subtitle">
                            {exp?.companyName}{" "}
                            {exp?.description ? (
                              <Button
                                type="link"
                                className="!text-primary "
                                icon={<EyeOutlined />}
                                onClick={() => setSelectedExperience(exp)}
                              />
                            ) : (
                              ""
                            )}{" "}
                          </h2>
                          <p className="text-slate-300">{exp?.role}</p>
                        </div>
                        <p className="text-slate-400">{exp?.timePeriod}</p>
                      </div>
                    );
                  })
              )}
            </div>

            <div>
              <h2 className="my-title relative pb-3">
                Courses
                <span className="block absolute top-full left-0 h-1 w-full bg-[#E84545]"></span>
              </h2>
              {isLoadingExperience ? (
                <div className="!my-10">
                  <Skeleton
                    active
                    paragraph={{ rows: 10 }}
                    className="bg-white/5 p-5 rounded"
                  />
                </div>
              ) : (
                experiences?.data
                  ?.filter((exp) => exp?.isCourse)
                  ?.sort((a, b) => a?.position - b?.position)
                  ?.map((exp, ind) => {
                    return (
                      <div
                        key={ind}
                        className="flex items-center justify-between gap-8 !my-10"
                      >
                        <div className="space-y-3">
                          <h2 className="my-subtitle">{exp?.role}</h2>
                          <p className="text-slate-300">{exp?.companyName}</p>
                        </div>
                        <p className="text-slate-400">{exp?.timePeriod}</p>
                      </div>
                    );
                  })
              )}
            </div>

            {/* Education */}
            <div>
              <h2 className="my-title relative pb-3">
                Education
                <span className="block absolute top-full left-0 h-1 w-full bg-[#E84545]"></span>
              </h2>

              {isLoadingEducation ? (
                <div className="!my-10">
                  <Skeleton
                    active
                    paragraph={{ rows: 10 }}
                    className="bg-white/5 p-5 rounded"
                  />
                </div>
              ) : (
                educations?.data
                  ?.sort((a, b) => a?.position - b?.position)
                  ?.map((education, ind) => (
                    <div className="flex items-center justify-between gap-8 !my-10">
                      <div className="space-y-3">
                        <h2 className="my-subtitle">
                          {education?.instituteName}
                        </h2>
                        <p className="text-slate-300">
                          {education?.department}
                        </p>
                      </div>
                      <p className="text-slate-400">{education?.timePeriod}</p>
                    </div>
                  ))
              )}
            </div>
          </div>
        </MyMotion>
      </div>

      {/* Modal for experience description */}
      <Modal
        title={selectedExperience?.companyName}
        open={selectedExperience}
        onCancel={() => setSelectedExperience(null)}
        footer={null}
      >
        <div className="my-exp">
          <div
            className="text-gray-700 mb-6"
            dangerouslySetInnerHTML={{
              __html: selectedExperience?.description,
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AboutPage;
