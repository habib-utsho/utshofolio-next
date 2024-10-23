"use client";
import Image from "next/image";
import React from "react";
import utsho from "@/assets/img/utsho.jpg";
import CountUp from "react-countup";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hoempage = () => {
  return (
    <div className="min-h-screen py-8 md:py-2 pb-16 md:pb-2 px-6 md:px-2 flex flex-col items-center justify-center">
      <div className="text-white text-center space-y-5">
        {/* Custom cursor is not working */}
        <figure className="h-[300px] w-[300px] mx-auto relative utshoProPic group overflow-hidden border-2 border-indigo-500 rounded-xl transition">
          <div className="z-40 absolute left-1/2 -translate-x-1/2 -bottom-10 group-hover:bottom-4 transition-all duration-500 opacity-0 group-hover:opacity-100 px-4 py-2 cmn-gradient-one flex gap-4 rounded">
            <span className="cursor-pointer text-xl hover:scale-110 text-white transition">
              <Link
                href={"https://www.linkedin.com/in/habib-utsho/"}
                target="_blank"
              >
                <FaLinkedin></FaLinkedin>
              </Link>
            </span>
            <span className="cursor-pointer text-xl hover:scale-110 text-white transition">
              <Link
                href={"https://www.facebook.com/habib-utsho"}
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </Link>
            </span>
            <span className="cursor-pointer text-xl hover:scale-110 text-white transition">
              <Link href={"https://github.com/habib-utsho"} target="_blank">
                <FaGithub></FaGithub>
              </Link>
            </span>
          </div>
          <Image
            src={utsho}
            alt="Ahashan Habib Utsho"
            fill={true}
            className="group-hover:scale-105 transition duration-500"
          ></Image>
        </figure>
        <h2 className="my-title gradient-text">Ahashan Habib Utsho</h2>
        <h3> MERN stack developer </h3>
        <p className="px-8 md:px-22 mb-4">
          To obtain a challenging position as a Web Developer in a dynamic and
          innovative company where i can utilize my technical skills and
          creativity to design and develop user-friendly responsive websites. I
          am available for any kind of job opportunity that suits my interests.
        </p>
        <Link
          href={
            "https://drive.google.com/file/d/1LE_UNmr0u0spqej3QxYeNkNXtryQBo8f/view?usp=drive_link"
          }
          target="_blank"
          className="inline-block"
        >
          <button className="my-btn-one">Get Resume </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 cmn-gradient-one mt-10 text-center w-full rounded text-white">
        <div className="p-7">
          <div className="p-5 space-y-3 md:border-r">
            <h2 className="my-title">
              <CountUp start={0} end={2} duration={2} />+
            </h2>
            <p className="font-semibold text-slate-100">years of experience</p>
          </div>
        </div>
        <div className="p-7">
          <div className="p-5 space-y-3 md:border-r">
            <h2 className="my-title">
              <CountUp start={0} end={50} duration={2} />+
            </h2>
            <p className="font-semibold text-slate-100">projects completed</p>
          </div>
        </div>
        <div className="p-7">
          <div className="p-5 space-y-3 md:border-r">
            <h2 className="my-title">
              <CountUp start={0} end={10} duration={2} />+
            </h2>
            <p className="font-semibold text-slate-100">Happy clients</p>
          </div>
        </div>
        <div className="p-7">
          <div className="p-5 space-y-3">
            <h2 className="my-title">
              <CountUp start={0} end={10} duration={2} />+
            </h2>
            <p className="font-semibold text-slate-100">
              open source projects!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hoempage;
