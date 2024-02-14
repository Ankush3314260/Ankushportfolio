
import React,{useEffect} from "react"
import { ReactTyped } from "react-typed";

function Home(){
         document.querySelector("body").style.overflowX="hidden"
      
     const sendmail =()=>{
          
          let to="ankushsingh3314260@gmail.com"
          let subject="Thanks For Reaching"
          let maillink ="mailto:"+to+"?subject="+encodeURIComponent(subject)
          window.location.href=maillink
     }
         useEffect(()=>{
              
            
             setTimeout(()=>{
                  document.querySelector('#faded').style.opacity=1
             },300)
         },[])
    return (
        <> 
         
  <svg className='animate-spin ml-1 max-sm:w-14 opacity-60 -z-10 absolute max-sm:left-12 left-1/4' xmlns="http://www.w3.org/2000/svg" height="50" viewBox="175.7 78 490.6 436.9" width="50"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
                    
               <svg className='ml-1 max-sm:w-16 rotate-45 max-sm:opacity-50 -z-10  absolute right-10 bottom-10 opacity-60' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" preserveAspectRatio="xMinYMid" width="50" height="50"><path fill="#000" d="M23 3.4C23 1.7 18.4.2 12.7.2S2.2 1.8 2.2 3.5c0 .2.1.5.2.6l-.5-.5v18h.4C8.4 11.3 22.7 4.5 22.7 4.5c-.2.1-.4.1-.5.2.4-.4.8-.9.8-1.3z"/><path fill="#000" d="M23.4 3.6c.1-2.1-5-3.6-10.9-3.6S1.6 1.4 1.6 3.6v18s0-2 0 0S6.8 25 12.5 25s10.9-1.3 10.9-3.4v-18zM12.5.6c6.1 0 10.2 1.5 10.2 2.9 0 1.5-4.1 2.9-10.2 2.9S2.3 5 2.3 3.6s4.1-3 10.2-3zm10.2 21c-.3 1.4-4.4 2.7-10.2 2.7s-9.9-1.4-10.2-2.7v-5.4c1.2 1.5 5.2 2.5 10.2 2.5 4.9 0 9-1 10.2-2.4v5.3zm0-6.1c-.4 1.4-4.4 2.7-10.2 2.7s-9.9-1.4-10.2-2.7v.1-5C3.5 12.1 7.5 13 12.5 13c4.9 0 9-1 10.2-2.4v4.9zm0-5.7c-.4 1.4-4.4 2.7-10.2 2.7S2.6 11.1 2.3 9.8v.2-5.4c1.2 1.3 5.3 2.5 10.2 2.5s9-1 10.2-2.4v5.1z"/><ellipse fill="#000" stroke="#000" strokeWidth=".900" strokeMiterlimit="10" cx="20.1" cy="8.7" rx=".9" ry=".9"/><ellipse fill="#000" stroke="#000" strokeWidth=".497" strokeMiterlimit="10" cx="20.1" cy="14.7" rx=".9" ry=".9"/><ellipse fill="#000" stroke="#000" strokeWidth=".497" strokeMiterlimit="10" cx="20.1" cy="20.7" rx=".9" ry=".9"/></svg>
              <div  id='faded' className="max-sm:relative opacity-0 absolute top-28  z-10 flex-wrap-reverse justify-evenly max-sm:-top-6  w-full   text-black   flex ">
                  <svg className=' absolute ml-1 max-sm:w-16 top-0 max-sm:top-1/2 -z-10 max-sm:right-10  right-36 rotate-6 opacity-50  ' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
            
                    <div className="  w-11/12    max-sm:m-6 max-sm:w-11/12  sm:m-auto max-sm:relative   ">
                           <h1 className="text-6xl max-sm:text-5xl  font-bold w-11/12 text-center  im ">I'M</h1>
                           <div  id="name" className="  text-8xl max-sm:text-6xl  max-sm:justify-center max-sm:relative  font-bold w-11/12 text-center  flex flex-wrap justify-center "><p className="downside "> ANKUSH </p> <p className="leftside"> KUMAR</p> </div>
                        <div  className="w-11/12 text-center justify-center text-4xl flex-wrap max-sm:text-2xl   flex  ">
    <ReactTyped strings={["And Skilled With"]} typeSpeed={40} />
    <br />

    <ReactTyped
      strings={[
        "Front-End Development",
        "UI/UX Designs",
        "Java Script ",
        "Tailwind Css",
        "Video Editing"
      ]}
      typeSpeed={40}
      backSpeed={50}
     
      loop
    >
      <input className="text-blue-300 outline-none max-sm:relative max-sm:left-10 " type="text" />
    </ReactTyped>
  </div>
                           <div  className="max-sm:text-md relative m-2 text-xl max-sm:top-3 top-2 ">Profile  Summary:
                            <p>Passionate about coding, and Software Development. Thrive in a dynamic development environment. Bringing fresh ideas and a strong work ethic to a forward-thinking organization.
                                Let's connect! </p>
                           </div>
                           <br />
                           <div className=" flex space-x-4 relative left-2 m-2  ">
                        <a href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                              <svg className="hover:shadow-sh21 hover:shadow-black hover:cursor-pointer bg-transparent hover:rounded-md"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                             </a>
                         <a href="https://github.com/Ankush3314260" target="_blank">                           <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#000">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>

                        <a href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg==" target="_blank" rel="noopener noreferrer">   <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-lg hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                           </div>
                           <button className="p-2 w-36 bg-black text-white shadow-black shadow-lg rounded-full  max-sm:p-2 relative m-3  " onClick={sendmail}> <a>HIRE ME</a></button>
                        
                     </div>
                   
                   
                    
                    
              </div>
         </>
    )
}
export default Home