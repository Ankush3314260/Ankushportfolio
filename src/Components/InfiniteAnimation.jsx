import gsap from "gsap";
import "../App.css";
import { useEffect } from "react";
import Propstype from "prop-types"
const InfiniteAnimation = ({ addAnimate }) => {
  const HandleCircle = () => {
    addAnimate(true);
    document.querySelector(".worldbutton").classList.remove("hover:text-white")

    document.querySelector(".circle").classList.add("z-50");
    document
      .querySelector(".infinitecontainer")
      .classList.remove("overflow-hidden");
    
  };

  useEffect(() => {}, []);
  return (
    <div className="min-h-svh flex items-center justify-center bg-white">
      <div className="infinitecontainer relative w-full z-0 overflow-hidden ">
        <div className=" w-full  flex m-auto  text-[3vw]  max-sm:text-[3.5vw] infiniteaddigAnimation p-2">
          <p className=" text-black font-copyright text-[0.7em] min-w-[33.3333%]    flex items-center text-center justify-center">
            FrontEnd Developer
          </p>
          <p className="font-custom5  text-black  text-[1.5em]  min-w-[33.3333%]  text-center flex items-center justify-center">
            seo expert
          </p>
          <p className="font-university text-black  text-[0.7em] min-w-[33.3333%]  text-center flex items-center justify-center">
            UI/UX Design
          </p>
          <p className=" text-black font-semibold  text-[0.7em] min-w-[33.3333%]    flex items-center text-center justify-center">
            #1 Rank Google
          </p>
          <p className=" text-black font-custom4 text-[1em] min-w-[33.3333%]   flex items-center text-center justify-center">
            Web Animation
          </p>
          <p className=" text-black font-custom5 text-[1.5em] min-w-[33.3333%]    flex items-center text-center justify-center">
            Love Art
          </p>
          <p className=" text-black font-custom text-[1.1em] min-w-[33.3333%]    flex items-center text-center justify-center">
            Video Creator
          </p>
          <p className=" text-black font-copyright text-[1.1em] min-w-[33.3333%]   flex items-center text-center justify-center">
            Passoinate
          </p>
          <p className=" text-black font-copyright text-[0.7em] min-w-[33.3333%]    flex items-center text-center justify-center">
            FrontEnd Developer
          </p>
          <p className="font-custom5  text-black  text-[1.5em]  min-w-[33.3333%]  text-center flex items-center justify-center">
            seo expert
          </p>
          <p className="font-university text-black  text-[0.7em] min-w-[33.3333%]  text-center flex items-center justify-center">
            UI/UX Design
          </p>
          <p className=" text-black font-semibold  text-[0.7em] min-w-[33.3333%] text-center  justify-center  flex items-center ">
            #1 Rank Google
          </p>
          <p className=" text-black font-custom4 text-[1em] min-w-[33.3333%]   flex items-center justify-center text-center">
            Web Animation
          </p>
          <p className=" text-black font-custom5 text-[1.5em] min-w-[33.3333%]    flex items-center justify-center text-center">
            Love Art
          </p>
          <p className=" text-black font-custom text-[1.1em] min-w-[33.3333%]    flex items-center justify-center text-center">
            Video Creator
          </p>
          <p className=" text-black font-copyright text-[1.1em] min-w-[33.3333%]   flex items-center justify-center text-center">
            Passoinate
          </p>
        </div>
        <div className=" flex justify-center items-center relative z-30   translate-y-full p-2 ">
          <span className="w-5 h-5 max-sm:w-[10px] max-sm:h-[10px] rounded-full  bg-[#111111]   circle  ">
            {" "}
          </span>
        </div>
        <div className="m-auto  w-1/5 z-50 max-sm:w-2/5 overflow-visible flex items-center relative ">
          <button
            className=" hover:text-white transition-all duration-200   text-[#111111]  w-full   rounded-sm p-[1.3vw]   m-auto  relative worldbutton block "
            onClick={(e) => {
              e.preventDefault();
              HandleCircle();
            }}
          >
            <p className="relative z-10 text-[2vw] max-sm:text-[12px] "> View My World</p>
          </button>
        </div>
      </div>
    </div>
  );
};

InfiniteAnimation.propstype={
  addAnimate:Propstype.func.isRequired,
};
export default InfiniteAnimation;
