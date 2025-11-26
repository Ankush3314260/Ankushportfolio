import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Navigation({ closefunction }) {

  return (
    <div className="min-h-screen  bg-white 0 text-[20vw] max-sm:text-[30vw] relative   ">
      <div className="relative h-[80vh]  max-sm:[60vh] shadow-2xl  z-20">
        <div
          className="w-full h-full bg-white opacity-90 relative z-30 font-custom  "
        
        >
          <a
            onClick={(e) => {
              closefunction();
        
             e.preventDefault()
            }}
          >
            {" "}
            <svg
              className="absolute  -rotate-45 transition-all duration-300 hover:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              height="0.3em"
              viewBox="0 -960 960 960"
              width="0.3em"
              fill="#000"
              strokeWidth="1"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
          <div className=" sm:float-end w-1/3 h-full sm:text-right sm:mr-10 max-sm:ml-8 max-sm:flex max-sm:items-center   ">
            <div>
              <a
                href="#"
                className="text-[0.3em] max-sm:text-[0.6em] view relative  navlink block    "
                onClick={closefunction}
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-[0.3em] max-sm:text-[0.6em] view  relative navlink block   "
                onClick={closefunction}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-[0.3em] max-sm:text-[0.6em] view relative  navlink  block"
                onClick={closefunction}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-[0.3em] max-sm:text-[0.6em] view relative navlink block"
                onClick={closefunction}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute flex justify-evenly bottom-0  z-10 text-[0.6em]  right-0 left-0 "
      
        >
          <span className="block sm:translate-y-[70%]  max-sm:translate-y-[100%] font-copyright text-center">
            {" "}
            &copy;AK 2025
          </span>
          <span className="block text-[0.3em]  translate-y-full  ">
            {" "}
            All Right Reserved.
          </span>
        </div>
      </div>
      {/* <div className='h-[20vh] text-[0.8em] absolute bottom-0 bg-slate-400'>
                  
             </div> */}
    </div>
  );
}

export default Navigation;
