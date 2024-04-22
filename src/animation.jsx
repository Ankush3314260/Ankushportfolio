import { useLayoutEffect,useRef } from "react";
import gsap from 'gsap';

const Animation =()=>{
               setTimeout(()=>{
                   document.querySelector('.loaderr').classList.add("duration-1000")
                   document.querySelector('.loaderr').classList.add("transition-all")
                 document.querySelector('.loaderr').classList.add("translate-x-full")
                 document.querySelector('.loaderr').classList.add("opacity-0")
               },3000)
               setTimeout(()=>{
                   document.querySelector('.loaderr').classList.add("overflow-hidden")
                
               },4000)
     return(
        <>
            <div className="relative z-50 text-black loaderr    transition-all" >
                <div  id ="intro-slider"className="h-screen bg-new1 max-sm:absolute  max-sm:w-screen p-10   w-full absolute top-0 left-0 z-10 flex flex-col">
                    <div className="max-sm:relative  m-auto text-white ">
                      <div className="loader max-sm:w-full m-auto  "></div>
                       <p className="text-3xl max-sm:text-xl">lOADING......</p>
                    </div>
                </div>

            </div>
        
        
        </>
     )
}
export default Animation