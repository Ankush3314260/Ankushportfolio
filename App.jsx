import { useState } from 'react'
import Header from './src/components/Header'

import { Outlet } from 'react-router-dom'


function App() {
 
           
        
  return (
      <>
       <Header/>
        <Outlet />
    
     </>
  )
}

export default App
