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
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">About</li>
            </Link>{" "}
            <Link href="/#skills">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">Skills</li>
            </Link>{" "}
            <Link href="/#projects">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">
                Projects
              </li>
            </Link>{" "}
            <Link href="/#contact">
              <li className="ml-10 text-lg uppercase hover:bg-[#5651e5] hover:text-white rounded-md p-2">
                Contact
              </li>
            </Link>
          </ul>

          {/* SideMenu mobile */}
          <div onClick={handleNav} className="md:hidden dark:bg-gray-900 dark:text-gray-100">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        <div className="flex justify-between">

       <div className="mt-5 mr-6">
       {renderThemeChanger()}
       </div>
        <div className="mt-2">
       <button className="mr-4">Download CV</button>
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
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%]  top-0 p-10 ease-in duration-700"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">

             <div>
              </div> 
              <Image
                src="/../public/assets/victory-sign.png"
                alt="/"
                width="150"
                height="150"
              />

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="mt-8 border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-center">
                Let's build something incredible together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col items-center">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] sm:mt-12 mb-20">
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
      </div>
    </div>
  );
}
