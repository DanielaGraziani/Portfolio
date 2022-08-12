import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import {BsFillSunFill,BsFillMoonFill } from 'react-icons/bs'
import Rocket from "./Lottie/Rocket";


export default function Navbar() {
  const {systemTheme, theme, setTheme}= useTheme()
  const [mounted, setMounted]= useState(false)

  

  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChanger = () =>{

    if (!mounted) return null 
    const currentTheme = theme === 'system' ? systemTheme : theme
    
    if(currentTheme === 'dark'){
      return(
        <BsFillSunFill className="w-7 h-7" role="button" onClick={()=> setTheme('light')}/>
      )
    }
    else{
      return(
        <BsFillMoonFill className="w-7 h-7" role="button" onClick={()=> setTheme('dark')}/>
      )
    }
  
  }




  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
 
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(()=>{
    const handleShadow = () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-32 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16 dark:bg-gray-900 dark:text-gray-100">
        
        {/* Navbar items */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">Home</li>
            </Link>{" "}
            <Link href="/#about">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">Sobre mi</li>
            </Link>{" "}
            <Link href="/#skills">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">Skills</li>
            </Link>{" "}
            <Link href="/#projects">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">
                Proyectos
              </li>
            </Link>{" "}
            <Link href="/#contact">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">
                Contacto
              </li>
            </Link>
          </ul>

          {/* SideMenu mobile */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={40} className='mt-3 ml-2' />
          </div>
        </div>

        <div className="flex justify-between">

       <div className="mt-5 mr-6">
       {renderThemeChanger()}
       </div>
        <div className="mt-2">
        <a href="assets/Daniela-Diaz-Graziani-CV-FS.pdf" rel="noreferrer" download="Daniela-Diaz-Graziani-CV-FS.pdf">
       <button className="mr-4">Descargar CV</button>
        </a>
        </div>
        </div>
        
        

      </div>

       
      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-gray-900 dark:text-gray-100"
              : "fixed right-[-100%]  top-0 p-10 ease-in duration-700 dark:bg-gray-900 dark:text-gray-100"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">

             <div>
              </div> 
             <Rocket/>

              <div
                onClick={handleNav}
                className="mb-32 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="mt-8 border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-center">
              Construyamos algo increíble
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col items-center">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Sobre mi</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Proyectos</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contacto</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-widest text-[#5651e5]">
                
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] sm:mt-12 mb-20">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <a href="https://www.linkedin.com/in/danielagraziani/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                    </a>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                <a href="https://github.com/DanielaGraziani/" target="_blank" rel="noreferrer">
                    <FaGithub />
                    </a>
                </div>

                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>

                {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineWhatsApp />
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
