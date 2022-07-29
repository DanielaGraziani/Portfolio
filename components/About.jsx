import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-justify">
          <h2 className="uppercase tracking-widest">About Me</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at
            dolore veritatis omnis, nam nulla nobis sed nihil iste libero rerum
            beatae numquam cupiditate hic, sequi corrupti modi doloremque!
            Laudantium.
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
            deserunt. Placeat perspiciatis dignissimos, architecto aliquam harum
            voluptates maxime, corrupti nihil voluptatem, aut tempore optio a
            eius! Saepe vel nemo quo!
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            vero harum sunt minima pariatur dolore culpa suscipit cumque
            dignissimos nesciunt, enim expedita corrupti. Beatae, quibusdam
            excepturi? Magnam nemo at error.
          </p>
        </div>
        <div className="rounded-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/photo1.png"
            alt="/"
            width="390"
            height="390"
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
}
