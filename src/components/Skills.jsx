import React from 'react'

         

function Skills() {
        const mousebg=()=>{
             
             document.querySelector('.pro').classList.add('onmouse')
         
           
        }
       const lmouse=()=>{
         
       }
 
  return (
    <>
   
       
           
   
      <div  className='p-2  max-sm:p-2 relative z-10 sm:w-2/3 top-5 max-sm:top-2 max-sm:w-full max-sm:overflow-hidden justify-center  m-auto   text-white flex flex-wrap '>
             
                  <p className= 'align-middle flex bg-black text-white rounded-lg p-2 max-sm:p-1 m-1    max-sm:text-xs '>
                    React.js
                    <svg className='animate-spin ml-1 max-sm:w-6 ' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="175.7 78 490.6 436.9" width="30"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/><circle cx="420.9" cy="296.5" r="45.7"/></g></svg>
                    </p>
                    <p className='bg-black skill text-white   rounded-xl p-2 max-sm:p-1 overflow-visible m-1 hover:transition-all border-black border-2 flex  max-sm:text-xs  '>
                   
                    HTML5
                    <svg className=' ml-1 max-sm:w-5' xmlns="http://www.w3.org/2000/svg" fill="none" height="25" width="25" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a"/><path d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff"/></svg>
                    </p>
                    <p className='bg-black text-white downside  rounded-xl p-2 max-sm:p-1 overflow-visible  m-1 hover:transition-all border-black border-2  flex  max-sm:text-xs '>CSS3
                  <svg className='ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" fill="none" height="25" width="25" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"/><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"/><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"/></svg>
                  </p>
                  <p className= 'projects bg-black text-white    flex rounded-lg p-2 max-sm:p-1  m-1 max-sm:text-xs   hover:transition-all  border-black border-2  '>
                    Java Script
                    <svg className=' ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>
                    </p>
                  

                  <p className='bg-black projects text-white   rounded-xl p-2 max-sm:p-1 max-sm:text-xs  m-1 hover:transition-all  border-black border-2  flex   hover:duration-1000'>Tailwind Css
                  <svg className='ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" height="25" preserveAspectRatio="xMidYMid" width="25" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stopColor="#2298bd"/><stop offset="1" stopColor="#0ed7b5"/></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"/></svg>
                  </p>
                  
                  <p className='bg-black text-white m-1  rounded-xl p-2 max-sm:p-1 max-sm:text-xs   overflow-visible hover:transition-all flex   hover:duration-500'>Git
             <svg className='ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256" preserveAspectRatio="xMinYMin meet"><path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36"/></svg>
                  </p>
                 
                  
                  <p className='bg-black rightside  text-white  rounded-xl max-sm:p-1 max-sm:text-xs  p-2 overflow-visible  m-1 hover:transition-all flex '>SQL
                 <svg className='ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" preserveAspectRatio="xMinYMid" width="25" height="25"><path fill="#FFFFFF" d="M23 3.4C23 1.7 18.4.2 12.7.2S2.2 1.8 2.2 3.5c0 .2.1.5.2.6l-.5-.5v18h.4C8.4 11.3 22.7 4.5 22.7 4.5c-.2.1-.4.1-.5.2.4-.4.8-.9.8-1.3z"/><path fill="#FFFFFF" d="M23.4 3.6c.1-2.1-5-3.6-10.9-3.6S1.6 1.4 1.6 3.6v18s0-2 0 0S6.8 25 12.5 25s10.9-1.3 10.9-3.4v-18zM12.5.6c6.1 0 10.2 1.5 10.2 2.9 0 1.5-4.1 2.9-10.2 2.9S2.3 5 2.3 3.6s4.1-3 10.2-3zm10.2 21c-.3 1.4-4.4 2.7-10.2 2.7s-9.9-1.4-10.2-2.7v-5.4c1.2 1.5 5.2 2.5 10.2 2.5 4.9 0 9-1 10.2-2.4v5.3zm0-6.1c-.4 1.4-4.4 2.7-10.2 2.7s-9.9-1.4-10.2-2.7v.1-5C3.5 12.1 7.5 13 12.5 13c4.9 0 9-1 10.2-2.4v4.9zm0-5.7c-.4 1.4-4.4 2.7-10.2 2.7S2.6 11.1 2.3 9.8v.2-5.4c1.2 1.3 5.3 2.5 10.2 2.5s9-1 10.2-2.4v5.1z"/><ellipse fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".900" strokeMiterlimit="10" cx="20.1" cy="8.7" rx=".9" ry=".9"/><ellipse fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".497" strokeMiterlimit="10" cx="20.1" cy="14.7" rx=".9" ry=".9"/><ellipse fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".497" strokeMiterlimit="10" cx="20.1" cy="20.7" rx=".9" ry=".9"/></svg>
                  </p>
                  <p className='bg-black skill text-white  leftside max-sm:text-xs max-sm:p-1  rounded-xl p-2 overflow-visible flex  m-1 hover:transition-all  border-black border-2    hover:duration-500'> Core Java
                <svg className='ml-1 max-sm:w-6' xmlns="http://www.w3.org/2000/svg" height="30" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346" width="25"><path d="m82.5539491 267.472524s-13.1984291 7.675345 9.3928727 10.272581c27.3687272 3.12227 41.3565672 2.674502 71.5170912-3.033832 0 0 7.929483 4.971985 19.003578 9.278371-67.611927 28.977338-153.0191128-1.678429-99.9135419-16.51712" fill="#5382a1"/><path d="m74.2921309 229.658996s-14.8033164 10.957731 7.8047418 13.296175c29.2361313 3.016145 52.3245383 3.262836 92.2763633-4.430196 0 0 5.525877 5.60221 14.214982 8.665832-81.746851 23.903884-172.798138 1.885091-114.2960871-17.531811" fill="#5382a1"/><path d="m143.941818 165.514705c16.659549 19.180451-4.377134 36.440437-4.377134 36.440437s42.30144-21.837266 22.874298-49.18272c-18.144349-25.501324-32.058647-38.171927 43.267723-81.8585602 0 0-118.2375559 29.5302982-61.764887 94.6008432" fill="#e76f00"/><g fill="#5382a1"><path d="m233.364015 295.441687s9.767098 8.047709-10.756655 14.273629c-39.026502 11.822546-162.4324655 15.392582-196.7141236.47104-12.3233746-5.361105 10.7864436-12.800931 18.0559127-14.362065 7.5813236-1.643986 11.9137745-1.337716 11.9137745-1.337716-13.7048436-9.654459-88.5825163 18.957032-38.0341527 27.150894 137.8527421 22.355782 251.2923931-10.066851 215.5352441-26.195782"/><path d="m88.9008873 190.479825s-62.7721309 14.90944-22.2291782 20.323608c17.1184873 2.291898 51.2437529 1.773382 83.0305749-.889949 25.977949-2.19136 52.062952-6.85056 52.062952-6.85056s-9.160145 3.922851-15.787287 8.448c-63.744 16.764741-186.88558536 8.965585-151.4347054-8.182691 29.9808582-14.492393 54.3576437-12.848408 54.3576437-12.848408"/><path d="m201.506444 253.422313c64.79872-33.671913 34.838341-66.030313 13.9264-61.670866-5.125586 1.066822-7.410968 1.991215-7.410968 1.991215s1.902779-2.980771 5.537048-4.271011c41.370531-14.544524 73.187141 42.897222-13.354822 65.647709 0 .000931 1.002589-.895535 1.302342-1.697047"/></g><path d="m162.438982.37143273s35.886545 35.89864727-34.036829 91.10062547c-56.0714475 44.2814838-12.786037 69.5295998-.023273 98.3766108-32.7298327-29.530298-56.7491491-55.525934-40.6351127-79.720262 23.6516077-35.5151125 89.1745747-52.7341379 74.6952147-109.75697427" fill="#e76f00"/><path d="m95.2683055 344.665367c62.1986905 3.981498 157.7118255-2.209047 159.9739345-31.639738 0 0-4.348276 11.156946-51.403869 20.017338-53.087884 9.990517-118.5643055 8.824088-157.3990401 2.421295.0009309-.000931 7.9499636 6.579665 48.8289746 9.201105" fill="#5382a1"/></svg>
                  </p>
        
                  <p className='bg-black downside text-white max-sm:text-xs max-sm:p-1   rounded-xl p-2 overflow-visible  m-1 flex hover:transition-all  border-black border-2    hover:duration-500'> Python
                <svg className='ml-1  max-sm:w-6' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#366a96"/><stop offset="1" stopColor="#3679b0"/></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffc836"/><stop offset="1" stopColor="#ffe873"/></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg>
                  </p>
                 
                  <p className='bg-black text-white skill max-sm:text-xs max-sm:p-1  rounded-xl p-2 overflow-visible  m-1 hover:transition-all flex  border-black border-2    hover:duration-500'> Video Editor 
                 <svg className='ml-1 animate-pulse  max-sm:w-6' xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 512 266" preserveAspectRatio="xMinYMin meet"><path d="M7.533 14.629L14.3 7.86c10.371-10.262 27.292-9.607 36.79 1.42l93.666 109.168c8.188 9.497 8.079 23.58-.218 32.969L51.2 257.2c-9.607 10.808-26.31 11.353-36.571 1.092l-6.769-6.769c-9.17-9.17-9.825-23.799-1.528-33.842l55.894-67.03c7.642-9.17 7.751-22.38.328-31.768L5.786 47.924C-2.293 38.1-1.528 23.69 7.533 14.63z" fill="#92D13D"/><path d="M62.117 150.87L6.223 217.9c-8.297 9.935-7.642 24.672 1.528 33.842l6.768 6.769c10.262 10.262 26.965 9.716 36.572-1.092l20.196-22.925c7.642-15.065 11.9-32.096 11.9-50.108 0-22.27-6.55-42.904-17.686-60.261 4.148 8.515 3.057 19.104-3.384 26.746zM192.791 214.516h-21.724V88.208h21.724v13.21c3.057-8.843 14.083-15.175 29.148-15.175 12.882 0 23.69 4.585 32.423 13.755 8.843 9.061 13.21 20.306 13.21 33.843 0 13.536-4.367 24.78-13.21 34.06-8.733 9.061-19.54 13.537-32.423 13.537-15.065 0-26.09-6.332-29.148-15.174v48.252zm6.332-100.544c-5.24 5.24-7.97 12.008-7.97 19.978 0 7.969 2.73 14.628 7.97 19.978 5.459 5.24 12.118 7.969 19.978 7.969 7.86 0 14.083-2.73 19.214-7.97 5.24-5.24 7.75-12.008 7.75-19.977 0-7.97-2.51-14.629-7.75-19.978-5.022-5.24-11.463-7.97-19.214-7.97-7.75 0-14.52 2.73-19.978 7.97zm75.981-60.698h21.725v96.396c0 8.843 2.948 12.663 10.917 12.663 2.51 0 4.694-.218 6.55-.764v19.432c-2.51.764-6.004 1.092-10.371 1.092-19.214 0-28.82-9.825-28.82-29.585V53.274zm112.771 48.143V88.208H409.6v63.754c0 7.751 1.856 10.699 6.66 10.699 1.31 0 2.947-.218 4.584-.328v17.577c-2.401.873-6.004 1.419-10.698 1.419-5.24 0-9.389-.874-12.664-2.948-4.039-2.729-6.55-6.332-7.423-11.026-6.332 9.607-16.812 14.301-31.331 14.301-12.882 0-23.69-4.476-32.642-13.755-8.733-9.28-13.1-20.524-13.1-34.06 0-13.537 4.367-24.782 13.1-33.843 8.843-9.279 19.76-13.755 32.642-13.755 14.628 0 25.654 6.55 29.147 15.174zm-6.55 52.401c5.459-5.24 8.188-12.008 8.188-19.977 0-7.97-2.73-14.63-8.188-19.978-5.24-5.24-12.008-7.97-19.76-7.97-7.75 0-14.082 2.73-19.431 7.97-5.022 5.24-7.642 12.008-7.642 19.978 0 7.969 2.511 14.628 7.642 19.977 5.24 5.24 11.572 7.97 19.432 7.97 7.86 0 14.52-2.73 19.76-7.97zm47.052 43.995c2.73.874 6.113 1.42 10.153 1.42 3.493 0 6.004-.765 7.969-1.966 1.965-1.2 3.82-4.039 5.24-7.75l2.402-6.55-38.21-94.759h21.834l26.856 68.885 25.218-68.885h21.943L470.843 194.43c-2.729 7.096-6.004 12.554-9.825 16.266-5.458 5.022-12.663 7.642-21.943 7.642-4.039 0-7.641-.546-10.698-1.42v-19.104z" fill="#49691F"/></svg>
                  </p>
                 
            </div >
         
            
          
           
             <div className='pro relative  max-sm:top-3   p-4 m-auto sm:w-11/12    max-sm:justify-center max-sm:w-full  ' onMouseEnter={mousebg} onMouseLeave={lmouse}>
            
              <h1 className='w-full text-4xl text-center opac font-bold max-sm:text-3xl border-t-2 border-b-2 '>
                         PROJECTS
              </h1>
               <div className='text-xl  max-sm:text-xl'>

               <p className='bg-new3 rightside delay-700 sm:w-1/4 text-white  text-center p-2 justify-center rounded-lg m-1 max-sm:w-2/3 max-sm:text-center max-sm:text-sm flex'>
                  Ankush Portfolio
                 <a className='ml-2' target='_blank'  href="https://github.com/Ankush3314260/Ankushportfolio"><svg className="hover:shadow-sh21 hover:shadow-white hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#FFFFFF">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg> </a>
              </p>
              
              <div className=' text-sm leftside flex flex-wrap bg-new2 p-2 max-sm:p-1 w-1/2   rounded-xl max-sm:w-full ' >
               
               <p className='bg-new1 p-2 rounded-xl m-1 max-sm:text-xs' >Vite+React.js</p>
               <p className='bg-new1 p-2 rounded-xl m-1  max-sm:text-xs'>React-Router-Dom</p>
               <p className='bg-new1 p-2 rounded-xl m-1  max-sm:text-xs'>Gsap</p>
               <p className='bg-new1 p-2 rounded-xl m-1  max-sm:text-xs'>Tailwind Css</p>
               <p className='bg-new1 p-2 rounded-xl m-1  max-sm:text-xs'>Java Script</p>
                </div>
              
                <div>
                <p>Key Features: </p>
                <p className='text-sm max-sm:text-xs '><b> Responsive Design:</b> This portfolio is built with a responsive design, ensuring a seamless experience across various devices, from desktops to smartphones. </p>
                <p className='text-sm max-sm:hidden'><b> Project Showcase:</b> Discover a collection of my most notable projects, each with a brief description, key technologies used, and links to live demos or GitHub repositories. </p>
                <p className='text-sm max-sm:hidden'> <b>Skills Section:</b> Learn about the technologies and skills I've honed throughout my journey.I am dedicated to staying up-to-date with the latest trends in the industry. </p>
               <p className='text-sm max-sm:text-xs'> <b>Contact Information:</b> Reach out to me easily through the provided contact form or connect with me on professional platforms like LinkedIn or GitHub. I'm always open to new opportunities and collaborations.  </p>
              <p className='text-sm max-sm:text-xs'> <b>Continuous Improvement: </b>  
                  Acknowledging that the tech landscape evolves, I've committed to updating my portfolio regularly. Whether it's adding new projects, acquiring new skills, or sharing recent accomplishments, this commitment reflects my dedication to staying relevant in a fast-paced industry. </p>
               
                </div> 
               </div>
               <div className='text-xl  max-sm:text-xl '>

              <p className='p-2 bg-new3 sm:w-1/4 text-center max-sm:text-sm  max-sm:justify-center rounded-lg m-1 max-sm:w-1/2 text-white skill justify-center flex '> Weather App
               <a className='ml-2' target='_blank'  href="https://github.com/Ankush3314260/REACT_47/tree/main/Weather%20App"><svg className="hover:shadow-sh21 hover:shadow-white hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#FFFFFF">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg> </a>
              </p>
               
              <div className=' text-sm flex flex-wrap bg-new2 p-2 w-1/2 max-sm:text-xs  rounded-xl max-sm:w-full rightside' >
               <p className='bg-new1 p-2 rounded-xl m-1' >Vite+React.js</p>
               <p className='bg-new1 p-2 rounded-xl m-1' >Open Weather API</p>
               <p className='bg-new1 p-2 rounded-xl m-1'>Tailwind Css</p>
               <p className='bg-new1 p-2 rounded-xl m-1'>Java Script</p>
                </div>
              
                <div >
                <p>Key Features: </p>
                <p className='text-sm max-sm:text-xs '><b > Responsive Design:</b> This portfolio is built with a responsive design, ensuring a seamless experience across various devices, from desktops to smartphones. </p>
                <p className='text-sm max-sm:hidden '><b> Project Showcase:</b> Discover a collection of my most notable projects, each with a brief description, key technologies used, and links to live demos or GitHub repositories. </p>
              <p className='text-sm max-sm:text-xs'> <b>Your Location Weather:</b>  
                  You can Search for your location as well
                   </p>
              <p className='text-sm max-sm:text-xs'> <b>Continuous Improvement: </b>  
                  Acknowledging that the tech landscape evolves, I've committed to updating my portfolio regularly. Whether it's adding new projects, acquiring new skills, or sharing recent accomplishments, this commitment reflects my dedication to staying relevant in a fast-paced industry. </p>
              
                </div> 
               </div>
         
               
           
                

            </div>
         
    
    </>
  )
}

export default Skills