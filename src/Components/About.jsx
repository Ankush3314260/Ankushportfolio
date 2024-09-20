import React from 'react'
import HoverCard from "@darenft/react-3d-hover-card";
import "@darenft/react-3d-hover-card/dist/style.css";
function About() {
  return (
    <div className=" bg-[#111111] min-h-screen  flex items-center text-[4vw] max-sm:text-[8vw]">
        <div className='w-1/2  '>
    <HoverCard scaleFactor={1.3} >
      <img className='w-[30%] max-sm:w-[70%] border-[1px] p-2 m-auto opacity-80' src="/Images/PSX_20240918_181221.jpg" />
    </HoverCard>
    </div>
    <div className='w-1/2  text-white p-5 '>
            <h3 className='text-[0.6em] border-b-[1px] border-white'>About </h3>
            <p className='text-[0.4em] py-2'>
            I'm Ankush Kumar, a Frontend Developer specializing in creating stunning parallax portfolio websites. My best portfolio website features dynamic, responsive designs that push the boundaries of web interaction. Recognized for its creativity and smooth user experience, my parallax portfolio is an Awwwards-worthy showcase of cutting-edge web design. Explore my work to see how I bring ideas to life with engaging, innovative digital experiences.</p>
          
    </div>
  </div>
  )
}

export default About