import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Education() {
  const bcatext = useRef(null);
  const mcatext = useRef(null);
  const parentcontainer = useRef(null);
  useEffect(() => {
    const text = bcatext.current;
    const text2 = mcatext.current;
    const main = parentcontainer.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        text,
        {
          y: 500,
          scale: 0,
        },
        {
          y: 0,
          scale: 1,
          ease: "circ.inOut",
          scrollTrigger: {
            trigger: main,
            // markers:true,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        text2,
        {
          y: 500,
          scale: 0,
        },
        {
          y: 0,
          scale: 1,
          ease: "circ.inOut",
          scrollTrigger: {
            trigger: main,
            //  markers:true,
            start: "-50% top",
            end: `50% bottom`,
            scrub: 1,
          },
        }
      );
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      id="education"
      className="min-h-screen text-[4vw] max-sm:text-[7vw] bg-white"
      ref={parentcontainer}
    >
      <div className="font-university text-[1em] text-center">
        <h3>UNIVERSITY</h3>
      </div>
      <div className=" flex items-center   text-[0.6em] h-[80vh] flex-wrap ">
        <div className="h-full w-full flex items-center justify-between">
          <div className="w-1/2 text-center">
            <h3 className=""> Post Graduate</h3>
            <p className="text-[0.5em]">Batch (OCT/2023 - July/2025 )</p>
          </div>
          <div className="w-1/2 text-white ">
            <div className="w-4/5 border-black bg-white border-[2px] h-[200px] flex items-center text-center relative overflow-hidden">
              <h2
                className=" bg-black absolute top-0 left-0 bottom-0 right-0 flex items-center"
                ref={mcatext}
              >
                <span> MCA (Master of Computer Applications)</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center   text-[0.6em] h-[80vh] flex-wrap ">
        <div className="h-full w-full flex items-center justify-between">
          <div className="w-1/2 text-center">
            <h3 className=""> Graduate</h3>
            <p className="text-[0.5em]">Batch (OCT/2020 -OCT/2023)</p>
          </div>
          <div className="w-1/2 text-white ">
            <div className="w-4/5 border-black bg-white border-[2px] h-[200px] flex items-center text-center relative overflow-hidden">
              <h2
                className=" bg-black absolute top-0 left-0 bottom-0 right-0 flex items-center"
                ref={bcatext}
              >
                <span> BCA (Bachelor of Computer Applications)</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
