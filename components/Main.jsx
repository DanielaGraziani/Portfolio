import React from "react";
import Web from "./Lottie/Web";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-wrap">
        <div className="mt-20 md:grid md:grid-cols-2">
          <div className="mt-24 ">
            <h1 className="py-4 text-gray-700">
              Hola, soy <span className="text-[#5651e5]">Daniela</span>
            </h1>
            <h1 className="py-2 text-gray-700 "> Full Stack Web Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              Dedicada a construir
              experiencias digitales excepcionales.
               {/* Actualmente me encuentro
              orientada al desarrollo frontend mientras profundizo mis
              conocimientos en tecnologías backend. */}
            </p>
          </div>

          {/* <div className='lg:max-w-lg lg:w-full md:w-1/2'> */}
          <Web />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
