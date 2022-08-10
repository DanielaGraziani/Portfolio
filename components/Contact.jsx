import React from "react";
import Link from "next/link";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactLottie from "./Lottie/ContactLottie";

export default function Contact() {
  return (
    <div id='contact' className="w-full lg:h-screen">
      <div className="max-w-[1040px] m-auto px-2 py-16 w-full">
        <h2 className="uppercase tracking-widest mb-12">Contacto</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              
             
              <div className="text-center">
                <h2 className="py-2 ">Daniela </h2>
                <p>Fullstack Developer</p>
                <p>Contáctame y hablemos.</p>
              </div>

                 <ContactLottie/>
              <div>
                <p className="uppercase pt-2"></p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaLinkedinIn />
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaGithub />
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <AiOutlineMail />
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <AiOutlineWhatsApp />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nombre</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Teléfono</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Asunto</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Mensaje</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="mt-8 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer animate-bounce">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
