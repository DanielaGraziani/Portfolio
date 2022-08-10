import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsItem({
  title,
  backgroundImg,
  projectUrl,
  projectRepo,
}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to [#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 text-white text-center">React JS</p>

       <div className="flex space-x-20">
       <a href={projectUrl} target="_blank" rel="noreferrer">
          {/* <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Demo
          </p> */}
          <button className="px-6 py-2 mt-4 mr-8">Demo</button>
        </a>
        <a href={projectRepo} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-4 mr-8">Code</button>
        </a>
       </div>

      </div>
    </div>
  );
}
