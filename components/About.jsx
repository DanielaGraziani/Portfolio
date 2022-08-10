import Image from "next/image";
import React from "react";
import AboutLottie from "./Lottie/AboutLottie";

export default function About() {
  return (
    <div id="about" className="mt-32 w-full md:h-screen md:mt-0 p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-justify">
          <h2 className="uppercase tracking-widest">Sobre mi</h2>
          <p className="py-4">
          Hace un par de años me topé con un curso de HTML y CSS el cual sin imaginármelo, me abriría las puertas a un mundo increíble. Lo que comenzó como una simple curiosidad se convirtió en amor por la programación.
          </p>
          <p className="py-4">
          Cautivada por lo intrigante, desafiante y divertido que puede ser la  programación me sentí rápidamente atraída por aprender más. Desde ese  entonces paso mi tiempo construyendo sitios web interactivos incorporando distintas tecnologías y librerías que dan rienda suelta a mi imaginación.
          </p>
          {/* <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            vero harum sunt minima pariatur dolore culpa suscipit cumque
            dignissimos nesciunt, enim expedita corrupti. Beatae, quibusdam
            excepturi? Magnam nemo at error.
          </p> */}
        </div>
          <AboutLottie/>
      </div>
    </div>
  );
}
