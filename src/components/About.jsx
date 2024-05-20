import React, { useState } from 'react'
import gsap from 'gsap'
import { useEffect ,useRef } from 'react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

  

function About() {
           let projects =useRef(null)
           let mp=gsap.matchMedia()
           useEffect(()=>{
             let temp =projects.current
            mp.add('(max-width:640px)',()=>{
           
            gsap.fromTo('.project1',{
              duration:3,
              opacity:1
             
            },{
              transform:"translateX(-150%)",
              duration:3,
              opacity:1,
           
              scrollTrigger:{
                trigger:temp,
                pin:'.project1',
                pinSpacing:false,
                scrub:true,
              //   markers:{
              //   startColor:"blue",
              //   endColor:"red",
              //   fontSize:"1rem"
              // },
              start:"top 10%",
              end:"50% 80%"
              },
            })
            

            })
            
           
            
           
             mp.add("(min-width:641px)",()=>{
              gsap.to('.projecttext',{
                scrollTrigger:{
                  trigger:temp,
                  pin:'.projecttext',
                  pinSpacing:false,
                  scrub:true,
                //   markers:{
                //   startColor:"red",
                //   endColor:"yellow",
                //   fontSize:"1rem"
                // },
                start:"50% top ",
                end:"50% top"
                },
                
             })    
             gsap.to('.project1',{
                opacity:0,
                scrollTrigger:{
                  trigger:temp,
                  pin:'.project1',
                  pinSpacing:false,
                  scrub:true,
                //   markers:{
                //   startColor:"red",
                //   endColor:"orange",
                //   fontSize:"1rem"
                // },
                start:"10% top",
                end:"50% 5%"
                },
                
             }) })
               
           },[])
  
   


  return (
    <> 
   
        <div ref={projects} className='project bg-new1 overflow-hidden'>
              <p className='text-7xl text-center w-full projecttext text-newDD max-sm:text-4xl'>PROJECTS</p>
            <div className='project1  h-screen text-newDD bg-new2 w-4/5 max-sm:w-11/12 m-auto    overflow-hidden '>
              <p className='text-5xl max-sm:text-2xl p-1'>Ankush's Portfolio</p>
              <div className='bg-new2  '>
                       <p className='text-3xl max-sm:text-xl p-2'>TechStack</p>
                       <div className="dif  border-new1">
                        <ul className='decoration-none flex sm:gap-5 flex-wrap p-2 gap-2 max-sm:text-xs '>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs' >Vite+React </li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>TailwindCSS</li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>JavaScript</li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>HTML</li>
                          <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>Netlify </li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>GIT </li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>GSAP </li>
                         </ul>
                      
                       </div>
                        
                       <p className='text-xl text-newf1 sm:w-full p-2'>DESCRIPTION</p>
                       <p className='max-sm:text-sm p-2'>
                        Welcome to Ankush Portfolios, your gateway to a world of creativity and innovation. Our website showcases the exceptional portfolio of Ankush, a talented individual dedicated to crafting immersive digital experiences. Utilizing cutting-edge technologies such as Vite, React, Tailwind CSS, JavaScript, and HTML, Ankush brings his vision to life, offering a glimpse into his expertise and passion for web development.</p>
             </div>

              <div className='w-3/5 m-auto'>
      <a href="https://ankushportfolios.netlify.app/">  <img className='hover:shadow-sh1 hover:shadow-white rounded-3xl transition-all duration-1000' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762458/op7gin9l185gmpkimyqx.png" alt="" /> </a>
  </div>
                  
            </div>
            <br />
            <br />
            <div className='  h-max text-newDD bg-new2 w-4/5 max-sm:w-11/12 m-auto p-1  overflow-hidden '>
              <p className='text-5xl max-sm:text-2xl'>Weather App</p>
              <div className='bg-new2 p-2 max-sm:p-1'>
                       <p className='text-3xl max-sm:text-xl p-2'>TechStack</p>
                       <div className=" ">
                        <ul className='decoration-none flex sm:gap-5 flex-wrap '>
                        <li className='bg-white rounded-full p-2 text-black max-sm:text-xs' >Vite+React </li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>TailwindCSS</li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>JavaScript</li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>HTML</li>
                          <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>Netlify </li>
                         <li className='bg-white rounded-full p-2 text-black max-sm:text-xs'>GIT </li>
                         </ul>
                      
                       </div>
                       <p className='text-xl text-newf1 sm:w-full p-2'>DESCRIPTION</p>
                       <p className='max-sm:text-sm p-2' >Welcome to our cutting-edge weather web application! Crafted with React and enhanced with the sleek design of Tailwind CSS, our platform delivers real-time weather updates with precision and style. Powered by the OpenWeather API, we bring you an intuitive interface that's as informative as it is engaging. Dive into a world of weather exploration with our user-friendly and dynamic app, providing you with all the essential meteorological insights you need, right at your fingertips. Experience the future of weather forecasting today.</p>
             
  
              </div>

              <div className='w-3/5 m-auto'>
              <a href="https://ankushportfolios.netlify.app/">  <img className='hover:shadow-sh1 hover:shadow-white rounded-3xl transition-all duration-1000' src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762458/s9gzjcdx3nug87g4zjt0.png" alt="" /> </a>
              </div>
                  
            </div>
           
                
            </div>
          
           
       
   
   
         
    </>
  )
}

export default About