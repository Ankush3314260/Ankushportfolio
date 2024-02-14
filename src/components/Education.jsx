
import React from 'react'

function Education() {
         
  return (
    <>
        <div className='max-sm:w-full overflow-hidden relative top-10  flex flex-wrap m-auto justify-evenly max-sm:justify-center max-sm:top-0 w-11/12 '>
                 
               
                 <img className='downside relative max-h-80 max-w-  -z-10 max-sm:left-0 ' src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/7/2022_7$largeimg_446023561.jpg" width="400px" alt="mdu_image"  />
              
                 <div className=' skill p-2 w-3/5 m-1 max-sm:w-full '>
               
                  <div className='border-t-2 border-b-2 '>
                   <p className='text-lg max-sm:text-sm float-right bg-new14 p-2 rounded-lg text-white'> 2023 - <i className='animate-pulse'>Present</i></p>
                 <p className='sm:text-2xl max-sm:xl inline '>Maharshi Dayanand University</p>
                 <br />
                  <p className='text-xl max-sm:text-lg  inline'>Master's Of Computer Application</p>
                 
               </div>
               <div className='border-t-2 border-b-2 mt-3 '>
                   <p className='text-lg max-sm:text-sm float-right bg-new p-2 bg-new14 text-white rounded-lg '> 2020 - 2023</p>
                 <p className='sm:text-2xl max-sm:xl mt-2 inline '>Maharshi Dayanand University</p>
                  <p className='text-xl max-sm:text-lg  '> Bachelor of Computer Applications</p>
                 </div>
                 
                </div>
                

              
            </div>    

            <div className='relative top-12 max-sm:top-3 w-11/12 max-sm:w-full m-auto downside sm:border-t-2 '>
              <h1 className='text-4xl  bg-new15  p-2 w-1/4 text-center max-sm:w-2/3 m-auto rounded-xl text-white max-sm:text-2xl mt-2'>Certifications</h1>
              <div className='text-xl m-1'>
                <p className='bg-new17 w-1/3 p-2 text-white max-sm:w-full text-center max-sm:text-lg' >Cognizant Agile Methodology Job Simulation on Forage - July 2023</p>
                <ul className='m-auto  list-disc text-sm max-sm:w-11/12 '>
                   <li>
                     Demonstrated an understanding of key project management concepts by creating a comprehensive presentation analysing strengths and weaknesses of Agile and Waterfall methodologies
                   </li>
                   <li className='max-sm:hidden'>
                   Applied knowledge of key aspects of Agile methodology by identifying user stories for an innovative interplanetary video-conferencing application and creating a document detailing Scrum role assignments and ceremonies.
                   </li>
                   <li >
                    Showcased problem-solving skills by diagnosing and proposing solutions for development process issues encountered during sprints.
                   </li>
                </ul>
              </div>
              <div className='text-xl m-1'>
                <p className='bg-new17 w-1/3 p-2 text-white max-sm:w-full text-center max-sm:text-lg' >Fiesta Event Coordinator 2023</p>
                <ul className='m-auto  list-disc text-sm max-sm:w-11/12 '>
                   <li>
                    Feedback and Surveys: Collected feedback from attendees through surveys and feedback forms. Use that feedback to demonstrate attendee satisfaction, areas of improvement, and overall success.
                   </li>
                   <li >
                   Social Media Engagement: Shared photos, videos, and stories from the event on social media platforms. Track engagement metrics such as likes, shares, and comments to demonstrated the reach and impact of the fiesta.
                   </li>
                   
                </ul>
              </div>
            </div>
     
       
    
    </>
  )
}

export default Education
