import React, {useEffect, useRef} from 'react'
// import Animation from './Animation'

export default function Main() {
  

  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div >
                <p className='uppercase tracking-widest text-gray-600'> Fullstack Developer</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Daniela</span></h1>
                <h1 className='py-2 text-gray-700'> A Full Stack Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, im focused on building fronted web applications while learning back-end technologies</p>
            </div>
            {/* <div className='lg:max-w-lg lg:w-full md:w-1/2'>
               <Animation/>
            </div> */}
          
        </div>
     </div>
  )
}
