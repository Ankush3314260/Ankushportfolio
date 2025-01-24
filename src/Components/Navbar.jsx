import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  

  return (
    <div>
      <div className="w-full   relative  left-0 min-h-[100svh] bg-white ">
        <div className="min-h-screen overflow-x-hidden">
          <div
            className={`" relative z-0 text-center h-[100vh] flex items-center  justify-center w-[80%] m-auto`}
          >
            By The Way That Is An Incredible Journey
          </div>
          <div
            className={`" relative z-0 text-center h-[100vh] flex items-center justify-center text-[2em]  font-custom   `}
          >
            Animation Enthusiast
          </div>
          {/* <div className={`" relative z-0 text-center  text-white font-custom3 text-[4vw]` } > <span className="block font-mono relative left-3 text-[1.7em]">Yeah That's</span> <span className="text-[2.3em] block "> Ankush Kumar </span><br /><br /></div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
