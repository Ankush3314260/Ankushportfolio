import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Loader from "../Components/Loader";

function Intialrender() {
  const [loading, setLoading] = useState(true);

  // Create refs for the elements to animate
  const textRef = useRef([]);
  const imgRef = useRef(null);
  const nameText = useRef(null);

  const addAnimation = () => {
    // Use refs instead of query selectors
    const t1 = gsap.timeline();
    t1.fromTo(
      imgRef.current,
      {
        opacity: 0.3,
        duration: 1,
      },
      {
        opacity: 0.1,
        duration: 2,
      }
    ).fromTo(
      textRef.current,
      {

        opacity: 0,
        duration: 1,
        stagger:0.3
      },
      {
    
        opacity: 1,
        duration: 1,
        stagger:0.3
      }
    ).fromTo(nameText.current,{
      opacity:0,
      duration:2,
    },{opacity:1,
      duration:2
    })
  };

  useEffect(() => {
    // Add overflow-hidden class when component mounts (to hide the scroll initially)
    document.body.classList.add("overflow-hidden");

    const onPageLoad = () => {
     
      setTimeout(() => {
        // Trigger animations once the page is fully loaded
        setLoading(false);
        setTimeout(() => {
          // Trigger animations once the page is fully loaded
          document.body.classList.remove("overflow-hidden");
          
          addAnimation();
        });
      }, 3000);
    };

    // Check if page has already loaded
    if (document.readyState === "complete") {
      onPageLoad(); // Trigger animation if page is already loaded
    } else {
      window.addEventListener("load", onPageLoad); // Otherwise, listen for the load event
    }

    // Clean up the event listener
    return () => window.removeEventListener("load", onPageLoad);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111]">
      {loading ? (
        <div className="min-h-screen absolute z-[999999999] flex items-center justify-center w-screen bg-[#111111]">
          <Loader />
        </div>
      ) : (
        <div className="font-mono text-[15vw] bg-[#111111] text-white flex place-items-center items-center justify-center min-h-screen">
          <img
            width="30%"
            className="absolute z-10 imginf opacity-0  "
            ref={imgRef} // Attach the ref for GSAP targeting
            src="./Images/infinity-512.png"
            alt=""
          />
          <div className="relative z-0  text-[0.6em] ">
            <div className=" font-btheone">
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[0] = el;
                }}
              >
                B
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[1] = el;
                }}
              >
                T
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[2] = el;
                }}
              >
                H
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[3] = el;
                }}
              >
                E
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[4] = el;
                }}
              >
                O
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[5] = el;
                }}
              >
                N
              </span>
              <span
                className="animateIT opacity-0"
                ref={(el) => {
                  textRef.current[6] = el;
                }}
              >
                E
              </span>
            </div>
            {/* Attach the ref for GSAP targeting */}
            <div className="relative  ">
           
              <span className="text-[0.3em] max-sm:text-[0.25em] text-white relative z-20 float-end opacity-0  " ref={nameText}>
              <a
              className=" relative block  view tracking-tight font-newname"
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
         ~ Crafted by Ankush
                </a>
              </span>
          
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Intialrender;
