import React, { useEffect, useRef } from "react";
import Crousal from "./Crousal";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const mainsection = useRef(null);
  const textcontainer =useRef(null)
  const project2=useRef(null)
  const project3=useRef(null)
  useEffect(() => {
    let container =mainsection.current
    let left =textcontainer.current
    let secondproject =project2.current
    let thirdproject =project2.current
    let ctx = gsap.context(() => {
      gsap.to(left,{
        scrollTrigger:{
          trigger:container,
          pin:left,
          //  markers:true,
          fontsize:1,
          start:"top top",
          end:`bottom bottom`
        }
      })
      let t = gsap.timeline({
        scrollTrigger:{
          trigger:container,
          start:"-10% top",
          end:"top bottom",
          // markers:true
        }
      });
     let t2= gsap.timeline({
      scrollTrigger:{
        trigger:secondproject,
        start:"-30% top",
        end:"bottom bottom",
        //  markers:true
      }
     })
     let t3= gsap.timeline({
      scrollTrigger:{
        trigger:thirdproject,
        start:"-20% top",
        end:"bottom bottom",
        // markers:true
      }
     })
      t.fromTo(
        ".fadedtext",
        {
          y: 1000,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration:1
        }
      )
        .fromTo(
          ".line-1",
          {
            opacity: 0,
            duration: 1,
          },
          { opacity: 1, duration: 1 }
        )
        .fromTo(
          ".line-2",
          {
            opacity: 0,
            duration:0.5
            
          },
          { opacity: 1, duration: 0.5 }
        );
        t2.fromTo(
          ".fadedtext2",
          {
            y: 1000,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration:1
          }
        )
          .fromTo(
            ".line-11",
            {
              opacity: 0,
              duration: 0,
            },
            { opacity: 1, duration: 1 }
          )
          .fromTo(
            ".line-22",
            {
              opacity: 0,
              duration:0.5
              
            },
            { opacity: 1, duration: 0.5 }
          );
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
    id="projects"
      ref={mainsection}
      className="bg-[rgb(17,17,17)] min-h-screen overflow-visible max-sm:flex-wrap  text-white items-center w-full relative  text-[4vw] max-sm:text-[8vw]"
    >
      <div className="flex items-center min-h-screen" >
      <div className="w-1/3   font-custom sm:text-[2em] max-sm:[1em] text-center mix-blend-difference " ref={textcontainer}>
        <h4 className="relative z-20 mix-blend-difference">Projects</h4>
      </div>
      <div className=" w-2/3  bg-[#111111] ">
        <div className="relative ">
          <div className="w-3/5 border-l-[1px] border-white  max-sm:w-4/5  m-auto  bg-[#111111]  p-[0.5em]">
            <div className="w-full overflow-hidden ">
              <h3 className="fadedtext">
                <span className="fadedtext">W</span>
                <span className="fadedtext">e</span>
                <span className="fadedtext">a</span>
                <span className="fadedtext">t</span>
                <span className="fadedtext">h</span>
                <span className="fadedtext">e</span>
                <span className="fadedtext">r</span>
                <span className="fadedtext"> A</span>
                <span className="fadedtext">p</span>
                <span className="fadedtext">p</span>
              </h3>
            </div>
            <div className="text-[0.4em] ">
              <p className="line-1 ">
                {" "}
                Overview: WeatherApp is a user-friendly, real-time weather
                application designed to provide accurate and up-to-date weather
                information for any location worldwide.
                <br />
                <br />
              </p>
            </div>
            <div>
            
              <button className="line-2 rotates text-[0.3em]    ml-auto mr-0 block p-2 border-[1px] w-[30%] max-sm:w-[70%] border-white rounded-full ">
                <a
                  href="https://github.com/Ankush3314260/REACT_47/tree/main/Weather%20App"
                  target="_blank"
                  className="    flex justify-center items-center  "
                >
                  <span className=" block ">Visit Github</span>

                  <svg
                    className="text-[0.4em] w-[20%]  rotatesvg transition-all duration-500  "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          fill="#FFFFFF"
                          d="M194.7,10L194.7,10l-83,118l83,118l0,0L61.3,128L194.7,10z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </button>
            
            </div>
          </div>
        </div>
      </div>
      </div>
  <div className="min-h-screen bg-white flex items-center overflow-visible border-[0px]" ref={project2}>
           <div className="w-2/3 bg-white text-black ml-auto mr-0  ">
           <div className="relative ">
          <div className="w-3/5  m-auto bg-white border-l-[1px]  max-sm:w-4/5  border-black p-[0.5em] ">
            <div className="w-full  overflow-hidden">
              <h3 className="fadedtext">
                <span className="fadedtext2">P</span>
                <span className="fadedtext2">d</span>
                <span className="fadedtext2">f</span>

                <span className="fadedtext2"> M</span>
                <span className="fadedtext2">e</span>
                <span className="fadedtext2">r</span>
                <span className="fadedtext2">g</span>
                <span className="fadedtext2">e</span>
                <span className="fadedtext2">r</span>
              </h3>
            </div>
            <div className="text-[0.4em] ">
              <p className="line-11 ">
                With Express and Node.js The application handles file uploads, processes the merging efficiently, and returns the consolidated PDF. It features asynchronous operations for performance and includes error handling to ensure reliability.
                <br />
                <br />
              </p>
            </div>
            <div >
            
              <button className="line-22 rotates text-[0.3em]   ml-auto mr-0 block p-2 border-[1px] w-[30%] max-sm:w-[70%] border-black rounded-full ">
                <a
                  href="https://github.com/Ankush3314260/47pdf.com/tree/main/PROJECT"
                  target="_blank"
                  className="    flex justify-center items-center  "
                >
                  <span className=" block">See Code</span>

                  <svg
                    className="text-[0.4em]  w-[20%]  rotatesvg transition-all duration-500 "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    fill="#000"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          fill="#000"
                          d="M194.7,10L194.7,10l-83,118l83,118l0,0L61.3,128L194.7,10z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </button>
            
            </div>
          </div>
        </div>
           </div>
  </div>
  <div className="min-h-screen bg-white flex items-center " ref={project3}>
           <div className="w-2/3 bg-white text-black ml-auto mr-0  ">
           <div className="relative ">
          <div className="w-3/5  m-auto  p-[0.5em]  max-sm:w-4/5  border-black border-l-[1px] ">
            <div className="w-full  overflow-hidden">
              <h3 className="fadedtext">
                <span className="fadedtext2">F</span>
                <span className="fadedtext2">u</span>
                <span className="fadedtext2">l</span>
                <span className="fadedtext2">l</span>
                <span className="fadedtext2"> S</span>
                <span className="fadedtext2">t</span>
                <span className="fadedtext2">a</span>
                <span className="fadedtext2">c</span>
                <span className="fadedtext2">k</span>
                <span className="fadedtext2"> Project</span>
                

              </h3>
            </div>
            <div className="text-[0.4em] ">
              <p className="line-11 ">
             COMING SOOOOOOOOON, Dont Count On 'O' It Will Be Quick  :)
                <br />
                <br />
              </p>
            </div>
            <div>
            
              <button className="line-22 rotates text-[0.3em]   ml-auto mr-0 block p-2 border-[1px] w-[30%] max-sm:w-[70%] border-black rounded-full ">
                <a
                  href="https://github.com/Ankush3314260/47pdf.com/tree/main/PROJECT"
                  target="_blank"
                  className="    flex justify-center items-center  "
                >
                  <span className=" block">Just Magic</span>

                  <svg
                    className="text-[0.4em]  w-[20%]  rotatesvg transition-all duration-500 "
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    fill="#000"
                    viewBox="0 0 256 256"
                    enableBackground="new 0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path
                          fill="#000"
                          d="M194.7,10L194.7,10l-83,118l83,118l0,0L61.3,128L194.7,10z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </button>
            
            </div>
          </div>
        </div>
           </div>
  </div>
    </div>
  );
}

export default Projects;
