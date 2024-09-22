import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
function Lastscreen() {
  const [Email,setEmail]=useState('')
  const sendmail =(e)=>{
    e.preventDefault()
    emailjs.send(import.meta.env.VITE_SERVICE_KEY,import.meta.env.VITE_TEMPLATE_KEY,{
      email:Email
    },import.meta.env.VITE_PUBLIC_KEY).then((res)=>{
      console.log(res);
      setEmail('')
    }).catch((error)=>{console.log(error);
    });
   console.log("sent");
   
   setEmail('') 
  }
  return (
    <div id="contact" className="min-h-screen bg-[#111111] text-[5vw] max-sm:text-[10vw] flex items-center justify-center">
      <div className="text-white text-[0.6em] ">
        <p className="text-center">Thanks For Reaching</p>
        <h2 className="font-custom3 text-[2em] text-center">Ankush Kumar</h2>
     
        <h4 className="text-[0.4em] text-center py-[1em]">
          I Love to here From you just write your Mail
        </h4>
        
        <div className="">
          <form  onSubmit={sendmail} className="text-[0.3em] flex items-center flex-wrap justify-center space-x-3">
          <label htmlFor="Email">Email : </label>
          <input
            className="w-3/5 h-[2.5em] max-sm:h-[2.5em] "
            type="email"
            name="Email"
            onChange={(e)=>setEmail(e.target.value)}
            value={Email}
            required
            placeholder="example2430@gmail.com"
          />
          <button className="p-2  mt-3 " type="submit" >
            <div className="buttonsend">
              <div className="box">S</div>
              <div className="box">E</div>
              <div className="box">N</div>
              <div className="box">D</div>
            </div>
          </button>
          </form>
          
          
        </div>
        <br />
        <div className="flex items-center justify-center space-x-3">
        <a href="https://www.linkedin.com/in/ankushkumar47?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app" target="_blank" rel="noopener noreferrer"><svg id="svg5" className="hover:shadow-white hover:cursor-pointer bg-transparent hover:rounded-md max-sm:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#FFFFFF" style={{translate: 'none', rotate: 'none', scale:'none', opacity: '1', transform: 'translate(0px, 0px)'}}>    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg></a>
        <a href="https://github.com/Ankush3314260" target="_blank">                           <svg id="svg2" className="hover:shadow-sh21 hover:shadow-white hover:rounded-xl hover:cursor-pointer max-sm:w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill="#FFFFFF">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg></a>
        <a href="https://www.instagram.com/i_ankush_13?igsh=MW9uZnR0dnN3NGgyYg==" target="_blank" rel="noopener noreferrer">   <svg id="svg3" className=" hover:shadow-white hover:rounded-lg hover:cursor-pointer max-sm:w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" fill="#FFFFFF" ><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg></a>
        </div>
      </div>
    </div>
  );
}

export default Lastscreen;
