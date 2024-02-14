
import React,{useRef,useLayoutEffect,} from "react";
import './Animation.css';
import {NavLink} from 'react-router-dom'




const Header =(props)=>{
                  const navref =useRef()
                   const icons =useRef()
              let responss =()=>{
                navref.current.classList.toggle('hidden')
                
                 icons.current.classList.toggle('animate-spin')
                 
              
               
              }
             
              
              return(
                <>

                <div className={`sidebar h-screen   z-50 shadow-lg sm:hidden fixed w-svw hidden bg-white/10 text-center backdrop-blur-sm `}ref={navref} >
              
                         <li className={`float-right list-none m-3 `} ref={icons} onClick={responss}>
                         <svg xmlns="http://www.w3.org/2000/svg" height="30"  viewBox="0 -960 960 960" width="30" fill="#000" ><path d="M424-80q-51 0-77.5-30.5T320-180q0-26 11.5-50.5T367-271q22-14 35.5-36t18.5-47l-12-6q-6-3-11-7l-92 33q-17 6-33 10t-33 4q-63 0-111.5-55T80-536q0-51 30.5-77.5T179-640q26 0 51 11.5t41 35.5q14 22 36 35.5t47 18.5l6-12q3-6 7-11l-33-92q-6-17-10-33t-4-32q0-64 55-112.5T536-880q51 0 77.5 30.5T640-781q0 26-11.5 51T593-689q-22 14-35.5 36T539-606l12 6q6 3 11 7l92-34q17-6 32.5-9.5T719-640q81 0 121 67t40 149q0 51-32 77.5T777-320q-25 0-48.5-11.5T689-367q-14-22-36-35.5T606-421l-6 12q-3 6-7 11l33 92q6 16 10 30.5t4 30.5q1 65-54 115T424-80Zm56-340q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm-46-192q6-2 12.5-3.5T459-618q8-42 30.5-78t59.5-60q5-4 8-10t3-15q0-8-6-13.5t-18-5.5q-38 0-86 16.5T400-719q0 9 2.5 17t4.5 15l27 75ZM240-400q14 0 33-7l75-27q-2-6-3.5-12.5T342-459q-42-8-78-30.5T204-549q-4-5-10.5-8t-14.5-3q-9 0-14 6t-5 18q0 54 20.5 95t59.5 41Zm184 240q47 0 92.5-19t43.5-66q0-8-2.5-15t-4.5-13l-27-75q-6 2-12.5 3.5T501-342q-8 42-30.5 78T411-204q-5 4-8.5 10.5T400-180q1 8 6 14t18 6Zm353-240q9 0 16-5t7-19q0-38-16-86.5T719-560q-9 0-17 2t-15 4l-75 28q2 6 3.5 12.5T618-501q42 8 78 30.5t60 59.5q3 5 9 8t12 3ZM618-501ZM459-618ZM342-459Zm159 117Z"/></svg>
                         </li>
                       <ul  className="flex  flex-wrap flex-col  text-black relative top-20 left-7 rounded-xl  p-10 border-2  ">
                       
                        <NavLink  onClick={responss} to="/" className={({isActive})=>`hover:bg-cyan-300    text-black transition rounded-xl  p-2 ${isActive?"bg-cyan-300":""}`}>
                           Home</NavLink>
                        <NavLink onClick={responss} to="/skills" className={({isActive})=>`rounded-xl hover:text-black hover:transition   hover:duration-1000 ${isActive?"bg-purple-500":""} p-2`}>Skills</NavLink>
                        <NavLink onClick={responss}  to="/education" className={({isActive})=>` transition-all duration-1000 ${isActive?"bg-yellow-300 rounded-xl":""} p-2`}>Education</NavLink>
                        <NavLink  onClick={responss} to="/about" className={({isActive})=>`transition duration-1000 ${isActive?"bg-green-300 rounded-xl":""} p-2`}>About</NavLink>
                 </ul>
                        
                        <svg className="relative top-36 left-32  " id="svg1" viewBox="0 0 100 100" width="80" height="80">
                        <defs>
                          <path id="circle"
                            d="
                              M 50, 50
                              m -37, 0
                              a 37,37 0 1,1 74,0
                              a 37,37 0 1,1 -74,0"/>
                        </defs>
                        <text fontSize="17">
                          <textPath xlinkHref="#circle">
                           ANKUSH KUMAR 🤍  @2024 
                          </textPath>
                        </text>
                      </svg>
                          
                 </div>
                   <div  className="w-full p-3    flow-root flex-wrap sm:m-auto ">
                       <div className="float-left  flex-end flex space-x-1 mt-2 text-black">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5">
                              <path
                                strokeLinecap="round"
                                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                           <h1><b>Ankush</b> </h1>
                        </div>
                       <div className=" z-50  float-end hover:cursor-pointer 0 lg:mr-16 ">
                   <ul className="flex space-x-6 relative font-semiboldz     box-border  max-sm:hidden z-30">
                        <NavLink to='' className={({isActive})=>`hover:text-white hover:shadow-md text-black font-semibold hover:shadow-black hover:bg-black flex space-x1 hover:transition-colors  hover:duration-1000 p-2 rounded-lg ${isActive?"bg-black text-white transition-all font-thin duration-1000":""} `}>

                        Home
                         </NavLink>
            
                        <NavLink to='/skills' className={({isActive})=>`hover:text-white hover:shadow-md text-black font-semibold hover:shadow-black hover:bg-black flex space-x1 hover:transition-colors  hover:duration-1000 p-2 rounded-lg ${isActive?"bg-black text-white transition-all duration-1000":""}`}>Skills</NavLink>
                        <NavLink to="/education" className={({isActive})=>` hover:text-white hover:shadow-md text-black font-semibold hover:shadow-black hover:bg-black flex space-x1 hover:transition-colors  hover:duration-1000 p-2 rounded-lg ${isActive?"bg-black text-white transition-all duration-1000":""} `}>Education</NavLink>
                        <NavLink to="/About" className={({isActive})=>` hover:text-white hover:shadow-md text-black font-semibold hover:shadow-black hover:bg-black flex space-x1 hover:transition-colors  hover:duration-1000 p-2 rounded-lg ${isActive?"bg-black text-white transition-all duration-1000":""}`}>Contact
                        </NavLink>
                   </ul>
                         <li  onClick={responss} className=" list-none sm:hidden z-40   ">   <svg xmlns="http://www.w3.org/2000/svg"height="35" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z " fill="#000"/></svg> </li>
                       </div>
                     
                   </div>
                     
                </>
              )
}

export default Header