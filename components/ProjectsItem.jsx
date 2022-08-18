import React from "react";
import Image from "next/image";

export default function ProjectsItem({
  title,
  backgroundImg,
  projectUrl,
  projectRepo,
  description, 
  technologies
}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="md:mt-1 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center font-serif">
          {title}
        </h3>

        <p className="mt-2 md:mt-6 md:font-medium text-white">Tecnologías: {technologies}</p>
      
       <p className="hidden md:block mt-4 md:mt-3 text-justify font-medium text-white">Descripción: {description}</p>  

       <div className="flex ml-4 md:mt-3 md:space-x-20 md:items-center md:justify-center">
       <a href={projectUrl} target="_blank" rel="noreferrer">
          <button className="px-7 py-2 mt-4 mr-12 cursor-pointer">Project</button>
        </a>

        <a href={projectRepo} target="_blank" rel="noreferrer">
        <button className="px-8 py-2 mt-4 mr-8 cursor-pointer">Code</button>
        </a>
       </div>

      </div>
    </div>
  );
}
