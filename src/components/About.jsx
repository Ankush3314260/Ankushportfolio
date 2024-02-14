import React, { useState } from 'react'
import emailjs from '@emailjs/browser'



function About() {
    
      emailjs.init(import.meta.env.VITE_MY_ID );
    
  const [name ,setname ]=useState('')
  const [email ,setEmail ]=useState('')
  const [message ,setMessage ]=useState('')
  const handlename =(e)=>{
          setname(e.target.value)
  } 
  const handleemail =(e)=>{
          setEmail(e.target.value)
  } 
  const handlemessage =(e)=>{
          setMessage(e.target.value)
  } 
   const func=(e)=>{
     e.preventDefault()
     
   
     var templateParams = {
       name:name,
       email:email,
       message:message
      };
     
      
    //     emailjs.send(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, templateParams)
    //     .then(function(response) {
          
    //       e.target.value ="Message Sent !"
    //    }, function(error) {
    //    e.target.value="Trouble in Sending !"
    // }).then(()=>{
    //   setTimeout(()=>{
    //     const form =document.querySelector('form')
    //       form.reset()
    //      e.target.value="REACH"
    //      setEmail("")
    //      setMessage('')
    //      setname('')
    //   },6000)
    // });

     
    
   }
        
  
   


  return (
    <> 
   
   
   
    <div className='z-10 relative top-6 justify-evenly  w-full flex-wrap max-sm:-top-3   flex text-black' >
      <div className='w-1/2 max-sm:w-full   downside      rounded-xl      '>
        <div className='relative top-2'>
         <p className=' text-center text-3xl  bg-new5 text-white rounded-lg max-sm:w-11/12 m-auto'>ABOUT</p>
         </div>
         <div className=' flex flex-wrap w-full justify-center p-2 relative top-3'>
       
        
         
          <img src="myphoto2.jpg" alt="" className='w-48 relative rounded-full max-sm:ml-8 max-h-48  m-2 mr-10  sp  ' />
          
      
          <div className=' flex  max-sm:w-full  flex-wrap relative'>
            "Hi,I'm Ankush Kumar ,Skilled with expertise in React.js ,Java Script and Web Technologies such as HTML ,Tailwind Css and Core Java. I'm always eager to learn and grow as a professional, and i believe in staying up-to-date with latest trend and technologies in my field. If you're looking for a software developer who can bring innovative ideas and solid execution to your team, i am your guy Feel free to connect with me to discuss potential collaborations or to simply chat about software development and technologies.  
           </div>
        </div>
        <div className='flex z-20 justify-center m-2 p-3  space-x-6 sm:top-10 '>
         <a className='downside' href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                              <svg className="hover:shadow-sh21 hover:shadow-black hover:cursor-pointer bg-transparent hover:rounded-md"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg>
                             </a>
                          <a className='skill' href="https://github.com/Ankush3314260"> <svg className="hover:shadow-sh21 hover:shadow-black hover:rounded-xl hover:cursor-pointer " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#000">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>
                          <a className='leftside' href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg=="> <svg className="hover:shadow-sh21  hover:rounded-lg  hover:cursor-pointer hover:shadow-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#000"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
                           </div>
                          
      </div>
       
      <div className='leftside w-1/4  z-10 border-white bg-new5 border-2 rounded-lg  text-white align-middle  max-sm:w-11/12 '>
          <div className='w-full text-center text-3xl text-white'>
            <p className='relative top-2'>Contact Me</p>
          </div>
          <div className='flex justify-center m-3 '>
       <form action="" id='form'  method="post">
        <p > Name</p>
          <br />
          <div className='float-end relative bottom-5'>
            <svg id='personicon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#FFFFFF'><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
          </div>
         <input required id='names'  type="text" onChange={handlename} className='w-full bottom-10 outline-none bg-transparent relative border-b-2 border-white  'placeholder='name' />
         <br />
        
        <p className='relative bottom-4'>Your @Mail</p>
          <br />
          <div id='svgmail' className='float-end ml-7 relative bottom-10 '>
          <svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#FFFFFF'><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          </div>
       <input required id='mail' onChange={handleemail}  type="text"placeholder='YourName2430@Gmail.com' className='w-full outline-none border-b-2 relative  border-white bottom-16 bg-transparent ' />
       <br />
       <div className='relative bottom-6'>
         <label htmlFor="textarea" >Your Valueable Words</label>
         <br />
         <textarea name="textarea" id="textarea" onChange={handlemessage}  cols="20" rows="5" className='outline-none text-white bg-white/5 border-2 border-white  w-full  resize-none ' placeholder='Keep Your Thought Here' ></textarea>

      
         </div>
         <div className='flex bg-green-500 rounded-3xl justify-center p-1 hover:cursor-pointer w-full ' id='newone'  onClick={func}>
         <input type="submit" id='submites' value= "REACH" onClick={func}  className='p-2 text-white hover:cursor-pointer' />
         <div className='relative top-3 _1 opacity-100  '>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#FFFFFF'><path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z"/></svg>
            <div className='relative bottom-6 opacity-0 _2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='white'><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
            </div>
            </div>
         </div>
       </form>
          </div>
      </div>
      
      
     </div>
         
    </>
  )
}

export default About