import { useLayoutEffect,useRef } from "react";
import gsap from 'gsap';

const Animation =()=>{
     const first = useRef(null)

     useLayoutEffect(()=>{
        document.querySelector('body').classList.add('overflow-hidden')
       let page =gsap.context(()=>{
        const t1= gsap.timeline()
        t1.from(["#title1,#title2,#title3"],{
            opacity:0,
            y:"+=30",
            stagger:0.5,

        }).to(["#title1,#title2,#title3"],{
            opacity:0,
            y:"-=30",
            delay:0.3,
            stagger:0.5
        }).to("#intro-slider",{
            xPercent:"-100",
            duration:1.3,
        })

       },first)
       return ()=> page.revert()
     },[])
      setTimeout(()=>{
      document.querySelector('body').classList.remove('overflow-hidden')
      },5000)
     return(
        <>
            <div className="relative z-50     text-black " ref={first}>
                <div  id ="intro-slider"className="h-screen max-sm:absolute  max-sm:w-screen p-10 bg-white  w-full absolute top-0 left-0 z-10 flex flex-col">
                    <div className="max-sm:relative max-sm:top-20">
                    <h1  id="title1" className="text-9xl  max-sm:relative  max-sm:text-6xl">Welcome</h1>
                    <h1 id="title2" className="text-9xl max-sm:text-6xl ">Thetext</h1>
                    <h1 id="title3" className="text-9xl max-sm:text-6xl  " >Portfolio</h1>
                    </div>
                </div>

            </div>
        
        
        </>
     )
}
export default Animation