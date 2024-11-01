import Link from "next/link";
import React, { Suspense } from "react";

import { getAllTechnologies } from "@/services/technology";
import OfferedServices from "./_components/OfferedServices";



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

      <OfferedServices />
    </div>
  );
};

export default ServicesPage;
