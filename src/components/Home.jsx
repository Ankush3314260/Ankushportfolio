
import React from "react"
import Header from '../components/Header.jsx'
import {gsap} from 'gsap'
import { useRef,useEffect } from "react";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import menuopen from "./headerfunction.jsx";
gsap.registerPlugin(ScrollTrigger)

function Home(){
 
      const earth =useRef(null)
      let mh= gsap.matchMedia()
      useEffect(()=>{
        mh.add('(max-width:640px)',()=>{
          gsap.to('#nameidw',{
            scale:10,
            duration:1,
            scrollTrigger:{
              //  markers:{
              //     startColor:"red",
              //   endColor:"orange",
              //   fontSize:"1rem"
              // },
              scrub:true,
              start:"-20% 60%",
              end:"top top",
              trigger:"#education",
            }
          })
          gsap.to('#Layer_2',{
           rotate:"360deg",
            duration:1,
            scrollTrigger:{
              //  markers:{
              //     startColor:"red",
              //   endColor:"orange",
              //   fontSize:"1rem"
              // },
              scrub:true,
              start:"-20% 60%",
              end:"top top",
              trigger:"#education",
            }
          })
          gsap.to('#Layer_1',{
           rotate:"-360deg",
           opacity:0,
            duration:1,
            scrollTrigger:{
              //  markers:{
              //     startColor:"red",
              //   endColor:"orange",
              //   fontSize:"1rem"
              // },
              scrub:true,
              start:"-20% 60%",
              end:"top top",
              trigger:"#education",
            }
          })
        })
      
        gsap.to(".newimg",{
          rotate:180,
          scrollTrigger:{
            scrub:true,
            trigger:"#education",
            // markers:{
            //   startColor:"red",
            //   endColor:"white",
            //   fontSize:"1rem"
            // },
           
            start:"top bottom",
            end:"bottom top"
            
            
          }
        })
     mh.add("(min-width:641px)",()=>{
        gsap.to('#nameidw',{
          scale:10,
          duration:1,
          scrollTrigger:{
            //  markers:{
            //     startColor:"red",
            //   endColor:"orange",
            //   fontSize:"1rem"
            // },
            scrub:true,
            start:"top bottom",
            end:"top top",
            trigger:"#education",
          }
        })
      })
     gsap.fromTo('#nameidw',{scale:0,duration:0,opacity:0,ease:"slow"},{scale:1,delay:2,duration:2,opacity:1,ease:"expo.out"})
        gsap.fromTo('#wel',{scaleY:0,opacity:0},{scaleY:1,duration:0.2,opacity:1,delay:4})
         gsap.fromTo('#hamburger',{y:-1000,duration:1},{y:0,duration:3.6,delay:4})
         gsap.fromTo(["#svg5","#svg2","#svg3"],{y:-100,opacity:0},{y:0,duration:1,delay:4,opacity:1,ease:"back.out",stagger:0.2})
        
      },[])
      const mousetextup =()=>{
        gsap.to('.mailtext',{y:-53,duration:0.8})
      }
      const mousetextdown =()=>{
        gsap.to('.mailtext',{y:0,duration:0.8})
      }
      
    
     const sendmail =()=>{
          
          let to="ankushsingh3314260@gmail.com"
          let subject="Thanks For Reaching"
          let maillink ="mailto:"+to+"?subject="+encodeURIComponent(subject)
          window.location.href=maillink
     }
        
    return (
        <> 
       <Header/>
          
         <div id="Home" ref={earth} className="fr h-screen w-screen bg-new1 overflow-hidden sm:bg-earthimage max-sm:bg-new12 imagecontain ">
         <svg className="absolute overflow-hidden left-1 -top-3  transition-all duration-1000 sm:hidden " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#E5E4E2" height="65px" width="65px" version="1.1" id="Layer_1" viewBox="0 0 512.853 512.853" xmlSpace="preserve">
<g transform="translate(1 1)">
	<g>
		<g>
			<path d="M255,195.693c-33.28,0-59.733,26.453-59.733,59.733c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533     c0-23.893,18.773-42.667,42.667-42.667c5.12,0,8.533-3.413,8.533-8.533C263.533,199.107,260.12,195.693,255,195.693z"/>
			<path d="M509.293,262.253c1.707-1.707,2.56-3.413,2.56-5.973c0-2.56-0.853-4.267-2.56-5.973     c-44.364-44.364-100.655-56.917-154.276-35.337c57.221-25.412,83.449-82.968,83.449-134.477c0-5.12-3.413-8.533-8.533-8.533     c-58.446,0-104.686,27.314-129.136,74.263C317.69,91.16,295.345,36.358,260.973,1.987c-3.413-3.413-8.533-3.413-11.947,0     c-41.607,41.607-55.237,93.704-38.97,144.251C182.807,95.381,128.738,71.96,80.067,71.96c-5.12,0-8.533,3.413-8.533,8.533     c0,59.195,28.02,105.866,76.079,130.561C91.941,193.1,36.309,215.557,1.56,250.307c-3.413,3.413-3.413,8.533,0,11.947     c29.867,29.867,65.707,45.227,102.4,45.227c13.424,0,26.848-2.028,40.136-6.182c-49.672,27.536-72.563,80.939-72.563,129.062     c0,5.12,3.413,8.533,8.533,8.533c58.446,0,104.686-27.314,129.136-74.263c-16.893,55.063,5.452,109.865,39.824,144.236     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.12-1.707c44.364-44.364,56.917-100.654,35.337-154.275     c25.413,57.221,82.968,83.449,134.476,83.449c5.12,0,8.533-3.413,8.533-8.533c0-59.016-27.851-105.586-75.645-129.845     c13.335,4.174,26.708,6.111,39.805,6.111C443.587,306.627,481.987,287.853,509.293,262.253z M489.667,255.427     c-35.733,30.628-90.974,47.679-142.892,19.873c0.79-3.702,1.363-7.486,1.706-11.34H383c5.12,0,8.533-3.413,8.533-8.533     c0-5.12-3.413-8.533-8.533-8.533h-34.519c-0.343-3.848-0.914-7.627-1.703-11.323     C395.289,211.106,447.988,218.001,489.667,255.427z M255,332.227c-18.068,0-34.592-6.138-47.656-16.436     c-8.142-6.564-14.839-14.449-19.757-23.67c-0.236-0.472-0.524-0.907-0.849-1.311c-1.954-3.79-3.609-7.761-4.919-11.893     c0.031-0.735-0.032-1.463-0.205-2.155c-1.678-4.474-2.613-9.312-3.065-14.039c-0.089-0.962-0.164-1.929-0.218-2.902     c-0.016-0.286-0.03-0.57-0.042-0.854c-0.052-1.173-0.088-2.351-0.088-3.539c0-18.068,6.138-34.592,16.436-47.656     c6.564-8.142,14.449-14.839,23.67-19.757c0.472-0.236,0.907-0.524,1.311-0.849c3.79-1.954,7.761-3.609,11.893-4.919     c0.735,0.031,1.463-0.032,2.155-0.205c13.653-4.267,28.16-4.267,42.667,0c0.511,0,1.023,0,1.534,0     c9.125,2.807,17.492,7.271,24.788,13.023c8.142,6.564,14.839,14.449,19.757,23.67c0.182,0.273,0.379,0.531,0.58,0.783     c5.62,10.696,8.807,22.902,8.807,35.91c0,18.069-6.138,34.593-16.437,47.657c-6.564,8.141-14.449,14.839-23.669,19.756     c-0.472,0.236-0.907,0.524-1.311,0.849C279.812,329.138,267.795,332.227,255,332.227z M342.312,220.748     c-0.099-0.249-0.202-0.496-0.303-0.744c2.791-0.927,5.512-1.932,8.175-2.998C347.552,218.17,344.928,219.418,342.312,220.748z      M420.547,89.027c-2.556,46.867-29.794,97.985-86.802,115.123c-2.022-3.11-4.223-6.092-6.591-8.93l27.686-27.686     c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-27.686,27.686c-2.838-2.367-5.82-4.568-8.93-6.59     C322.546,123.921,365.164,92.435,420.547,89.027z M255,20.76c30.628,35.733,47.679,90.974,19.873,142.892     c-3.702-0.79-7.486-1.363-11.34-1.706v-34.519c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v34.519     c-3.85,0.343-7.631,0.915-11.33,1.704C209.832,115.139,217.574,62.439,255,20.76z M88.6,89.027     c46.867,3.409,97.985,30.647,115.123,87.656c-3.11,2.022-6.092,4.224-8.93,6.591l-27.686-27.686     c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l27.686,27.686c-2.366,2.837-4.567,5.818-6.588,8.927     C123.495,187.031,92.008,145.262,88.6,89.027z M20.333,255.427c34.883-31.48,90.126-47.686,142.891-19.87     c-0.79,3.701-1.362,7.484-1.706,11.337H127c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h34.519     c0.343,3.85,0.915,7.631,1.704,11.33C114.712,300.595,62.012,292.853,20.333,255.427z M89.453,421.827     c2.556-46.867,29.794-97.985,86.802-115.123c2.022,3.11,4.223,6.092,6.591,8.93L155.16,343.32c-3.413,3.413-3.413,8.533,0,11.947     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56l27.686-27.686c3.05,2.544,6.262,4.899,9.625,7.043     C187.209,387.11,145.525,418.428,89.453,421.827z M255,490.093c-30.628-35.733-47.679-90.974-19.873-142.892     c3.702,0.79,7.486,1.363,11.34,1.706v34.519c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-34.519     c3.85-0.343,7.631-0.915,11.33-1.704C300.168,395.714,292.426,448.414,255,490.093z M289.679,342.739     c0.249-0.099,0.496-0.202,0.744-0.303c0.927,2.791,1.931,5.512,2.998,8.174C292.257,347.979,291.009,345.354,289.679,342.739z      M421.4,420.973c-46.867-2.556-97.985-29.794-115.123-86.802c3.11-2.022,6.092-4.223,8.93-6.591l27.686,27.686     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-27.686-27.686     c2.544-3.05,4.899-6.262,7.043-9.625C386.683,323.217,418.002,364.901,421.4,420.973z"/>
		</g>
	</g>
</g>
</svg>
         <svg className="absolute overflow-hidden  right-10 top-36 transition-all duration-1000 sm:hidden " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#E5E4E2" height="100px" width="100px" version="1.1" id="Layer_2" viewBox="0 0 512.853 512.853" xmlSpace="preserve">
<g transform="translate(1 1)">
	<g>
		<g>
			<path d="M255,195.693c-33.28,0-59.733,26.453-59.733,59.733c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533     c0-23.893,18.773-42.667,42.667-42.667c5.12,0,8.533-3.413,8.533-8.533C263.533,199.107,260.12,195.693,255,195.693z"/>
			<path d="M509.293,262.253c1.707-1.707,2.56-3.413,2.56-5.973c0-2.56-0.853-4.267-2.56-5.973     c-44.364-44.364-100.655-56.917-154.276-35.337c57.221-25.412,83.449-82.968,83.449-134.477c0-5.12-3.413-8.533-8.533-8.533     c-58.446,0-104.686,27.314-129.136,74.263C317.69,91.16,295.345,36.358,260.973,1.987c-3.413-3.413-8.533-3.413-11.947,0     c-41.607,41.607-55.237,93.704-38.97,144.251C182.807,95.381,128.738,71.96,80.067,71.96c-5.12,0-8.533,3.413-8.533,8.533     c0,59.195,28.02,105.866,76.079,130.561C91.941,193.1,36.309,215.557,1.56,250.307c-3.413,3.413-3.413,8.533,0,11.947     c29.867,29.867,65.707,45.227,102.4,45.227c13.424,0,26.848-2.028,40.136-6.182c-49.672,27.536-72.563,80.939-72.563,129.062     c0,5.12,3.413,8.533,8.533,8.533c58.446,0,104.686-27.314,129.136-74.263c-16.893,55.063,5.452,109.865,39.824,144.236     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.12-1.707c44.364-44.364,56.917-100.654,35.337-154.275     c25.413,57.221,82.968,83.449,134.476,83.449c5.12,0,8.533-3.413,8.533-8.533c0-59.016-27.851-105.586-75.645-129.845     c13.335,4.174,26.708,6.111,39.805,6.111C443.587,306.627,481.987,287.853,509.293,262.253z M489.667,255.427     c-35.733,30.628-90.974,47.679-142.892,19.873c0.79-3.702,1.363-7.486,1.706-11.34H383c5.12,0,8.533-3.413,8.533-8.533     c0-5.12-3.413-8.533-8.533-8.533h-34.519c-0.343-3.848-0.914-7.627-1.703-11.323     C395.289,211.106,447.988,218.001,489.667,255.427z M255,332.227c-18.068,0-34.592-6.138-47.656-16.436     c-8.142-6.564-14.839-14.449-19.757-23.67c-0.236-0.472-0.524-0.907-0.849-1.311c-1.954-3.79-3.609-7.761-4.919-11.893     c0.031-0.735-0.032-1.463-0.205-2.155c-1.678-4.474-2.613-9.312-3.065-14.039c-0.089-0.962-0.164-1.929-0.218-2.902     c-0.016-0.286-0.03-0.57-0.042-0.854c-0.052-1.173-0.088-2.351-0.088-3.539c0-18.068,6.138-34.592,16.436-47.656     c6.564-8.142,14.449-14.839,23.67-19.757c0.472-0.236,0.907-0.524,1.311-0.849c3.79-1.954,7.761-3.609,11.893-4.919     c0.735,0.031,1.463-0.032,2.155-0.205c13.653-4.267,28.16-4.267,42.667,0c0.511,0,1.023,0,1.534,0     c9.125,2.807,17.492,7.271,24.788,13.023c8.142,6.564,14.839,14.449,19.757,23.67c0.182,0.273,0.379,0.531,0.58,0.783     c5.62,10.696,8.807,22.902,8.807,35.91c0,18.069-6.138,34.593-16.437,47.657c-6.564,8.141-14.449,14.839-23.669,19.756     c-0.472,0.236-0.907,0.524-1.311,0.849C279.812,329.138,267.795,332.227,255,332.227z M342.312,220.748     c-0.099-0.249-0.202-0.496-0.303-0.744c2.791-0.927,5.512-1.932,8.175-2.998C347.552,218.17,344.928,219.418,342.312,220.748z      M420.547,89.027c-2.556,46.867-29.794,97.985-86.802,115.123c-2.022-3.11-4.223-6.092-6.591-8.93l27.686-27.686     c3.413-3.413,3.413-8.533,0-11.947s-8.533-3.413-11.947,0l-27.686,27.686c-2.838-2.367-5.82-4.568-8.93-6.59     C322.546,123.921,365.164,92.435,420.547,89.027z M255,20.76c30.628,35.733,47.679,90.974,19.873,142.892     c-3.702-0.79-7.486-1.363-11.34-1.706v-34.519c0-5.12-3.413-8.533-8.533-8.533s-8.533,3.413-8.533,8.533v34.519     c-3.85,0.343-7.631,0.915-11.33,1.704C209.832,115.139,217.574,62.439,255,20.76z M88.6,89.027     c46.867,3.409,97.985,30.647,115.123,87.656c-3.11,2.022-6.092,4.224-8.93,6.591l-27.686-27.686     c-3.413-3.413-8.533-3.413-11.947,0s-3.413,8.533,0,11.947l27.686,27.686c-2.366,2.837-4.567,5.818-6.588,8.927     C123.495,187.031,92.008,145.262,88.6,89.027z M20.333,255.427c34.883-31.48,90.126-47.686,142.891-19.87     c-0.79,3.701-1.362,7.484-1.706,11.337H127c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h34.519     c0.343,3.85,0.915,7.631,1.704,11.33C114.712,300.595,62.012,292.853,20.333,255.427z M89.453,421.827     c2.556-46.867,29.794-97.985,86.802-115.123c2.022,3.11,4.223,6.092,6.591,8.93L155.16,343.32c-3.413,3.413-3.413,8.533,0,11.947     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56l27.686-27.686c3.05,2.544,6.262,4.899,9.625,7.043     C187.209,387.11,145.525,418.428,89.453,421.827z M255,490.093c-30.628-35.733-47.679-90.974-19.873-142.892     c3.702,0.79,7.486,1.363,11.34,1.706v34.519c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-34.519     c3.85-0.343,7.631-0.915,11.33-1.704C300.168,395.714,292.426,448.414,255,490.093z M289.679,342.739     c0.249-0.099,0.496-0.202,0.744-0.303c0.927,2.791,1.931,5.512,2.998,8.174C292.257,347.979,291.009,345.354,289.679,342.739z      M421.4,420.973c-46.867-2.556-97.985-29.794-115.123-86.802c3.11-2.022,6.092-4.223,8.93-6.591l27.686,27.686     c1.707,1.707,3.413,2.56,5.973,2.56s4.267-0.853,5.973-2.56c3.413-3.413,3.413-8.533,0-11.947l-27.686-27.686     c2.544-3.05,4.899-6.262,7.043-9.625C386.683,323.217,418.002,364.901,421.4,420.973z"/>
		</g>
	</g>
</g>
</svg>
          <img className="absolute newimg w-5/12 sm:right-96 sm:-top-3 max-sm:m-auto max-sm:hidden m-auto max-sm:-top-5 max-sm:w-full " src="https://res.cloudinary.com/dfntazqum/image/upload/v1713762458/oydvwgjnqzdbmeygisqe.png" alt="homeimg" />
         <div  onClick={menuopen} id='hamburger' className='nonactive sticky h-5 w-8 sm:right-10 hover:cursor-pointer  float-right hover:duration-500  max-sm:right-3  top-10  max-sm:top-5 '>
                       
                        <span id='fre'  className='duration-300 h-0.5 w-7 max-sm:w-5 bg-white  absolute top-1/4   '></span>
                        <span  id='se' className='duration-300 ham h-0.5 w-7 max-sm:w-5 bg-white   absolute top-2/4  '></span>
                    </div>  
                <div className="w-full  h-1/2   ">
              <div className=" w-full text-white h-full z-20  relative top-24  p-4 max-sm:p-2 max-sm:w-full max-sm:top-14  ">
              
                  <h1 id="wel" className="welcome text-6xl  w-full max-sm:text-3xl max-sm:w-11/12 max-sm:text-center m-auto text-center ">Hi, Welcome To </h1>
                  <p id="nameidw" className="text-8xl overflow-hidden name max-sm:text-4xl max-sm:w-full max-sm:text-center   max-sm:p-2  shadow-black  sm:p-2 sm:w-11/12 rounded-xl  text-center m-auto max-md:text-6xl "> Ankush Portfolio</p>
              </div>
              <div className="w-4/5 sm:text-xl m-auto text-newDD relative top-9 max-sm:top-0 max-sm:text-sm max-sm:w-11/12  max-sm:p-2  sm:p-4  ">
                <p> ABOUT : Demonstrated ability to conceptualize and execute innovative projects, delivering high-quality solutions that <b> exceed </b>client <b> expectations </b>. Committed to continuous learning and staying abreast of emerging web technologies.</p>
                  <p>Lets Explore !!!!!</p> 
                  <div className=" flex space-x-4 relative sm:left-10 m-2   ">
                        <a href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                              <svg id="svg5" className="hover:shadow-sh21 hover:shadow-white hover:cursor-pointer bg-transparent hover:rounded-md max-sm:w-6"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#FFFFFF">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                             </a>
                         <a href="https://github.com/Ankush3314260" target="_blank">                           <svg id="svg2" className="hover:shadow-sh21 hover:shadow-white hover:rounded-xl hover:cursor-pointer max-sm:w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#FFFFFF">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>

                        <a href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg==" target="_blank" rel="noopener noreferrer">   <svg id="svg3" className="hover:shadow-sh21 hover:shadow-white hover:rounded-lg hover:cursor-pointer max-sm:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#FFFFFF"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                           </div>
                           <button onMouseEnter={mousetextup} onMouseLeave={mousetextdown} onClick={sendmail} id="hirebtn" className="p-1 hover:shadow-sh21 hover:shadow-white w-32 sm:h-10 max-sm:h-8 max-sm:w-28 hover:transition-all hover:duration-1000 bg-white text-black overflow-hidden shadow-lg max-sm:text-md rounded-full  max-sm:p-1 relative m-1 max-sm:-top-3 sm:left-10  "> <p className="mailtext">Mail Us <br /><br /> Excited !</p> </button>
              </div>
              </div>
              
         </div>
        





  
         </>
    )
}

export default Home
