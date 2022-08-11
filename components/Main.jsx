import React from "react";
import Web from "./Lottie/Web";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1040px] w-full h-full mx-auto p-2 flex justify-center items-center flex-wrap">
        <div className="mt-16 md:mt-20 md:grid md:grid-cols-2 gap-2">
          <div className="mt-12 md:mt-20 md:mb-36">
            <h1 className="py-4 text-gray-700 font-serif">
              <span className="text-[#5651e5]">D</span>aniela <span className="text-[#5651e5]">D</span>íaz <span className="text-[#5651e5]">G</span>raziani
            </h1>
            <p className="py-2 text-gray-700 text-4xl font-mono"> Full Stack Web Developer</p>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto font-serif md:text-xl">
              Dedicada a construir
              experiencias digitales excepcionales.
            </p>
          </div>

         <div>
          <Web />
         </div>
          </div>
      </div>
    </div>
  );
}
