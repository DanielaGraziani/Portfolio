import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="uppercase tracking-widest mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6  rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/sequelize1.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SEQUELIZE</h3>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/postgreSQL.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>


          <div className="p-6 rounded-xl hover:scale-150 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64px"
                  height="64xpx"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          {/* falta express, java, figma */}
        </div>
      </div>
    </div>
  );
}
