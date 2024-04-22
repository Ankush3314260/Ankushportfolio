import React ,{useEffect,useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function () {
       let mine =useRef(null)
       let mc = gsap.matchMedia()
       useEffect(()=>{
        let tempc = mine.current
          
            gsap.to([".nameq",".thanks1",".review1",".starboy"],{
                opacity:1, 
                          
                scrollTrigger:{
                  trigger:tempc,
                 
                
                //   markers:{
                //   startColor:"red",
                //   endColor:"blue",
                //   fontSize:"1rem"
                // },
                start:"-30% 70% ",
                end:"bottom 10%"
                },
                stagger:0.5
             })  
       


       },[])
  return (
    <div>
       <div ref={mine} className='contact bg-new1 text-white'>
        <p className='text-7xl w-full max-sm:text-3xl text-center nameq opacity-0 transition-all duration-1000'>Ankush Himself</p>
        <br />
        <img className='w-1/5 m-auto rounded-full max-sm:w-2/5 starboy opacity-0 transition-all duration-1000' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762458/sjfwpmtjrcgte1kimwwg.jpg" alt="ankushimage"  />
     
        <p className='text-5xl max-sm:text-2xl  thanks1 opacity-0 transition-all duration-1000 text-center'>THANKS FOR VISTING </p>
        <p className='text-3xl max-sm:text-lg review1 opacity-0 transition-all duration-1000 text-center'>
           Don't Forget To Leave a Review !
        </p>

       </div>
      
    </div>
    
  )
}
