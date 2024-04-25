import React from 'react'
import gsap from 'gsap'
import { useEffect ,useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Achievements() {
         let certificate = useRef(null)
         let pincertificate = useRef(null)
         let pincertificatee=useRef(null)
         useEffect(()=>{
             let temp =certificate.current
             let temp2= pincertificate.current
             let temp3= pincertificatee.current

             gsap.to('.achievements',{
             color:"black",
              scrollTrigger:{
                trigger:temp,
               //  markers:{
               //    startColor:"red",
               //    endColor:"orange",
               //    fontSize:"1rem"
               //  },
                pin:temp2,
                pinSpacing:false,
                scrub:true,
                start:"top top",
                end:"bottom 90%",
                }
    
             })
             gsap.to('.newpin',{
              x:0,
              
              duration:6,
              scrollTrigger:{
                trigger:temp,
               //  markers:{
               //    startColor:"red",
               //    endColor:"orange",
               //    fontSize:"1rem"
               //  },
               pin:temp3,
                scrub:true,
               start:"top top",
                end:"bottom 70%",
                }
             })
             gsap.to('.certificate',{
               backgroundColor:"white",
               scrollTrigger:{
                  trigger:temp,
                  // markers:{
                  //   startColor:"red",
                  //   endColor:"orange",
                  //   fontSize:"1rem"
                  // },
                  scrub:true,
                  start:"top top",
                  end:"bottom 90%",
                  }
             })
         },[])
  return (
    <>
     <div>
        <div ref={certificate} className='certificate bg-new1   overflow-hidden ' style={{height:'100vh'}}>
             <div ref={pincertificate} className=' text-white'>
                     <p className='text-white w-full text-center text-7xl achievements max-sm:text-4xl relative top-2 '>Achievements</p>
             </div>
             <div ref={pincertificatee} className='newpin flex max-sm:flex-col w-full sm:space-x-10 max-sm:relative max-sm:-top-4 max-sm:space-y-3  translate-x-full '>
             <div className='w-full max-sm:w-1/2  m-auto relative top-10 '>
                <img className='w-full max-sm:full m-auto ' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762459/kq7rltnqi6egkk8om8m5.jpg" alt=""/>
                
             </div>
             <div className='w-full max-sm:w-1/2 m-auto relative top-10'>
                <img className='w-full m-auto max-sm:w-full ' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762459/poh1rdkocgzjpdkeda91.jpg" alt=""/>
                
             </div>
             <div className='w-full max-sm:w-1/2 m-auto relative top-10'>
                <img className='w-full m-auto ' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762458/oxp6fbpur8wihws5nafn.jpg" alt=""/>
                
             </div>
           
             </div>
        </div>
     </div>
    
    </>
  )
}
