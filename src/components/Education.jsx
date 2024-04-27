
import React, {useEffect,useRef} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
function Education() {
    let fuse = useRef(null)
    useEffect(()=>{
      let temp = fuse.current
      let mm =gsap.matchMedia()
      mm.add("(max-width:640px)",()=>{
        gsap.to('.textpin',{
         rotate:"90deg",

         transform:"translateX(90px)",
          scrollTrigger:{
            trigger:'.mca',
            // markers:{
            //   startColor:"red",
            //   endColor:"orange",
            //   fontSize:"1rem"
            // },
            pin:".textpin",
            pinSpacing:false,
            scrub:true,
            start:"top bottom",
            end:"top 70%",
            }
  })
      })
  mm.add('(min-width:641px)',()=>{
    
        gsap.to('.textpin',{
          
          scrollTrigger:{
            trigger:temp,
            // markers:{
            //   startColor:"red",
            //   endColor:"orange",
            //   fontSize:"1rem"
            // },
            pin:".textpin",
            pinSpacing:false,
            scrub:true,
            start:"top top",
            end:"bottom bottom",
            }
  })
  
})
    gsap.to('.mca',{
      opacity:0,
      scrollTrigger:{
        trigger:'.mca',
        // markers:{
        //   startColor:"red",
        //   endColor:"orange",
        //   fontSize:"1rem"
        // },
        scrub:true,
        start:"-300% top",
        end:"bottom top",
        }  
    })
    gsap.to('.bca',{
      opacity:0,
      scrollTrigger:{
        trigger:'.bca',
        // markers:{
        //   startColor:"red",
        //   endColor:"orange",
        //   fontSize:"1rem"
        // },
        scrub:true,
        start:"-50% top",
        end:"bottom top",
        }  
    })
    },[])
return(
  <>
    <div className='bg-new1 overflow-hidden'>
        <div id='education' ref={fuse} className='bg-new1 text-white shadow-2xl overflow-hidden'style={{height:'130vh'}}>
      
           <div className='textpin max-sm:-translate-y-32   text-8xl text-newDD relative sm:top-48 max-sm:top-28 p-4 sm:h-64 max-sm:text-5xl overflow-hidden max-sm:w-11/12  max-sm:newclass' >
             EDUCATION
           </div>
           <div  className=' w-full  h-2/5 overflow-hidden   '>
            <div className='text-center w-1/2  float-end h-72 max-sm:w-full '>
           
              <div className='w-3/5 m-auto bg-new2 max-sm:float-start h-full border-2 border-new3'>
              <svg className='relative  -rotate-12 top-12 left-3 ' xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="70px" height="70px" viewBox="-4 0 32 32" version="1.1">
<path d="M12.188 7.844l12.188 4.875-12.188 4.844-9.094-3.625c-0.563 0.469-0.969 1.219-1.031 2.063h0.219c0.25 0 0.438 0.188 0.438 0.438v1.156c0 0.25-0.188 0.438-0.438 0.438h-0.156l0.594 6.063c0.031 0.25-0.156 0.469-0.406 0.469h-1.094c-0.25 0-0.438-0.219-0.438-0.469l0.625-6.063h-0.156c-0.25 0-0.469-0.188-0.469-0.438v-1.156c0-0.25 0.219-0.438 0.469-0.438h0.344c0.063-0.906 0.469-1.688 1.031-2.25l-2.625-1.031zM11.844 18.438l0.344 0.125 0.344-0.125 6.688-2.688 0.5 5.531c0.031 0.375-0.219 0.531-0.563 0.375l-2.625-1.344c-0.344-0.188-0.906-0.156-1.219 0.031l-2.531 1.438c-0.313 0.188-0.875 0.188-1.188 0l-2.531-1.438c-0.313-0.188-0.875-0.219-1.188-0.031l-2.656 1.344c-0.344 0.188-0.594 0-0.563-0.375l0.5-5.531z"/>
</svg>
                <p className='text-5xl max-sm:text-4xl mca relative top-6 text-newDD'>MDU ROHTAK</p>
                <p className='text-3xl max-sm:text-2xl mca relative top-6 ext-newDD'>Master of Computer Applications</p>
                </div>
            </div>
           </div>
           
           <div className='bca w-full h-2/5 overflow-hidden  max-sm:relative top-20 '>
           <div className='text-center w-1/2   float-end h-72 max-sm:w-full '>
              <div className='w-3/5 m-auto bg-new2 h-full border-2 border-new3'>
              <svg className='relative  -rotate-12 sm:top-12 sm:left-3 ' xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="70px" height="70px" viewBox="-4 0 32 32" version="1.1">
<path d="M12.188 7.844l12.188 4.875-12.188 4.844-9.094-3.625c-0.563 0.469-0.969 1.219-1.031 2.063h0.219c0.25 0 0.438 0.188 0.438 0.438v1.156c0 0.25-0.188 0.438-0.438 0.438h-0.156l0.594 6.063c0.031 0.25-0.156 0.469-0.406 0.469h-1.094c-0.25 0-0.438-0.219-0.438-0.469l0.625-6.063h-0.156c-0.25 0-0.469-0.188-0.469-0.438v-1.156c0-0.25 0.219-0.438 0.469-0.438h0.344c0.063-0.906 0.469-1.688 1.031-2.25l-2.625-1.031zM11.844 18.438l0.344 0.125 0.344-0.125 6.688-2.688 0.5 5.531c0.031 0.375-0.219 0.531-0.563 0.375l-2.625-1.344c-0.344-0.188-0.906-0.156-1.219 0.031l-2.531 1.438c-0.313 0.188-0.875 0.188-1.188 0l-2.531-1.438c-0.313-0.188-0.875-0.219-1.188-0.031l-2.656 1.344c-0.344 0.188-0.594 0-0.563-0.375l0.5-5.531z"/>
</svg>
                <p className='text-5xl max-sm:text-4xl bca relative sm:top-6'>MDU ROHTAK</p>
                <p className='text-3xl max-sm:text-2xl bca relative sm:top-6 '>Bachelor's of Computer Applications</p>
                </div>
            </div>
           </div>
        </div>
    </div>
  
  </>
)      
};


 
  

export default Education
