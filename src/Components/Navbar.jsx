import React, { useEffect, useState, useRef } from "react";
import Canvas from "./Canvas";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Navbar() {
  const [images, setImages] = useState({ currentIndex: 0, maxIndex: 401 });
  const [ImageArray, setImageArray] = useState([]);
  const [ImageLoaded, setImagesLoaded] = useState(true);
  const colorchange =useRef(null)
  
  const [imageUrl, setImageurl] = useState("");
  

  useEffect(() => {
    // function PreLoader() {
    //   let array = [];
    //   let array2 = [];
    //   let loadedCount = 0;
    //   for (let index = images.currentIndex; index <= images.maxIndex; index++) {
    //     const url = `/Images/parts/frame_${(index + 1)
    //       .toString()
    //       .padStart(4, "0")}.jpeg`;
    //     const img = new Image();
    //     img.src = url;
    //     img.alt = `frame_${index}`;
    //     img.onload = () => {
    //       loadedCount += 1;
    //       if (loadedCount === images.maxIndex) {
    //         setImagesLoaded(true); // Set the loaded state to true when all images are loaded
    //         setImageArray(array);
    //         setImageurl(array2);
    //       }
    //     };
    //     array.push(
    //       <img
    //         className="w-full h-full"
    //         key={index}
    //         src={url}
    //         alt={`frame_${index + 1}`}
    //       />
    //     );
    //     array2.push(url);
    //     // setImageArray([...ImageArray, img]);
    //   }
    // }
    // PreLoader();
  }, []);
   
  useEffect(()=>{
         let container =colorchange.current
         gsap.to(container, {
          backgroundColor: '#111111',  // Change background color to black
          ease: 'none',
          scrollTrigger: {
            trigger: container,      // Element that triggers the scroll
            start: '20% 30%',        // Start animation when the top of container reaches the top of the viewport
            end: 'bottom bottom',    // End animation when the bottom of container reaches the bottom of the viewport
            scrub: true,   
            // markers:true          // Smooth scrubbing for a smooth transition
          },
        });
  },[])

 

  useEffect(() => {
    if (ImageLoaded) {
      // LoadImages(images.currentIndex);
    }
  }, [ImageLoaded]);

  return (
    <div>
      {ImageLoaded ? (
        <>
          <div className="w-full   relative  left-0 min-h-[100vh] bg-[#FFFAF1] " ref={colorchange}>
            <div className={` w-full min-h-screen   sticky top-0 left-0  z-10  overflow-x-hidden `}  >
              {/* <Canvas
                images={imageUrl}
                width={window.innerWidth}
                height={window.innerHeight}
              /> */}
            </div>
            <div className="min-h-screen overflow-x-hidden">
          <div className={`" relative z-0 text-center h-[100vh]    w-[80%] m-auto`} >By The Way That Is An Incredible Journey</div>
          <div className={`" relative z-0 text-center h-[100vh] text-[2em]  font-custom text-white`} >Animation Enthusiast</div>
          {/* <div className={`" relative z-0 text-center  text-white font-custom3 text-[4vw]` } > <span className="block font-mono relative left-3 text-[1.7em]">Yeah That's</span> <span className="text-[2.3em] block "> Ankush Kumar </span><br /><br /></div> */}
          </div>
          </div>
        </>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}

export default Navbar;
