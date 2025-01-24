import  { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Loader from "../Components/Loader";
import InfiniteAnimation from "../Components/InfiniteAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
function Intialrender() {
   const [animate, setAnimate] = useState(false);
     const containeref=useRef(null)
  // Create refs for the elements to animate
  const textRef = useRef([]);
  // const imgRef = useRef(null);
  const nameText = useRef(null);
 useEffect(()=>{
       if (animate) {
        const addAnimation = () => {
          // Use refs instead of query selectors
    
          // console.log("added");
    setTimeout(()=>{
      document.body.classList.remove("overflow-hidden");
    },7000)
          const t1 = gsap.timeline();
          t1.to(".circle",{
            scale:500,
            duration:2,
            ease: "expo.inOut"
           }).to(".circleContaine",{
            opacity:0,
            duration:0.5

           }).to(".circleContaine",{
            display:"none"

           })
            .fromTo(
              textRef.current,
              {
                opacity: 0,
                duration: 1,
                stagger: 0.3,
              },
              {
                opacity: 1,
                duration: 1,
                stagger: 0.3,
              }
            )
            .fromTo(
              nameText.current,
              {
                opacity: 0,
                duration: 2,
              },
              { opacity: 1, duration: 2 }
            );
        };
        addAnimation()
       }
 },[animate])
  useEffect(() => {
  

    // Add overflow-hidden class when component mounts (to hide the scroll initially)
    document.body.classList.add("overflow-hidden");

    const onPageLoad = () => {
      setTimeout(() => {
        // Trigger animations once the page is fully loaded
        // const getLoader=removingLoader.current
        const myTimeLine = gsap.timeline();
        // Trigger animations once the page is fully loaded
        myTimeLine
          .to(".loader-container12", {
            clipPath: "polygon(100% 0%,100% 0%,100% 100%,100% 100%)",
            duration: 1,
          })
          .to(".loader-container12", {
            display: "none",
            zIndex: -10,
          });
          
        // console.log("worked1");
       
      }, 2000);
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
  useEffect(()=>{
    const container = containeref.current;
    const letters = container.querySelectorAll(".animateIT")

    Array.from(letters).forEach((e)=>{
      e.classList.remove("opacity-0")
      
    })
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
        // markers:{
        //   startColor:"green",
        //   endColor:"red"
        // }
      },
    });
   

    gsap.to(".animated-text", {
      opacity: 0,
      repeat: -1, 
      yoyo: true, 
      keyframes: [
        { opacity: 1, duration: 0.02 }, // 0%
        { opacity: 0.5, duration: 0.1 }, // 20%
        { opacity: 0, duration: 0.1 }, // 19%
        { opacity: 1, duration: 0.01 }, // 22%
        { opacity: 0.5, duration: 0.1 }, // 21%
        { opacity: 0, duration: 0.01 }, // 23%
        { opacity: 1, duration: 0.1 }, // 42%
        { opacity: 0.1, duration: 0.01 }, // 43%
        { opacity: 0, duration: 0.01 }, // 44%
        { opacity: 1, duration: 0.01 }, // 45%
        { opacity: 0.9, duration: 0.03 }, // 46%
        { opacity: 0, duration: 0.1 }, // 42%
        { opacity: 1, duration: 0.01 }, // 63%
        { opacity: 0.7, duration: 0.01 }, // 64%
        { opacity: 0, duration: 0.1 }, // 65%
        { opacity: 1, duration: 0.01 }, // 66%
        { opacity: 0.4, duration: 0.01 }, // 67%
        { opacity: 0, duration: 0.1 }, // 63%
        { opacity: 1, duration: 0.1 }, // 84%
        { opacity: 0.2, duration: 0.01 }, // 85%
        { opacity: 0, duration: 1 }, // 86%
        { opacity: 1, duration: 0.01 }, // 87%
        { opacity: 0.5, duration: 0.01 }, // 88%
        { opacity: 0, duration: 0.1 },
        { opacity: 0, duration: 0.1 }  // 84%
      ]
    });
    timeline.to(Array.from(letters), {
      duration: 1, 
      opacity: 0,
      stagger: 0.2, 
      ease: "power2.out" 
    })
    
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="min-h-screen bg-[#1111111] parentouter">
        
          <div className="min-h-screen loader-container12 absolute z-[999999999] flex items-center justify-center w-screen bg-black">
            <Loader />
          </div>
          
        <div className="absolute z-[99999999] min-h-svh w-screen circleContaine">
          <InfiniteAnimation addAnimate={setAnimate}  />
        </div>
        
       
       
        <div className="font-mono text-[15vw] bg-[#111111] z-[9999999999] text-white flex place-items-center items-center justify-center min-h-screen">
        
          {/* <img
            width="30%"
            className="absolute z-10 imginf opacity-30  "
            ref={imgRef} // Attach the ref for GSAP targeting
            src="./Images/infinity-512.png"
            alt=""
          /> */}
        
          <div className="relative z-0  text-[0.6em] h-[200vh]   " ref={containeref}>
            <div className=" font-btheone   h-[20%] translate-y-[100%]">
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
                className="animateIT opacity-0 "
                ref={(el) => {
                  textRef.current[2] = el;
                }}
              >
                H
              </span>
              <span
                className="animateIT opacity-0 "
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
                className="animateIT opacity-0 "
                ref={(el) => {
                  textRef.current[6] = el;
                }}
              >
                E
              </span>
            </div>
            {/* Attach the ref for GSAP targeting */}
            <div className="relative  ">
              <span
                className="text-[0.3em] max-sm:text-[0.25em] text-white relative z-20 float-end opacity-0  "
                ref={nameText}
              >
                <a
                  className=" relative block   . view tracking-tight font-newname animated-text  "
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                crafted by ankush 
                </a>
              </span>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Intialrender;
