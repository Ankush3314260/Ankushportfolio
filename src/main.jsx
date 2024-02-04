import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Animation from './animation.jsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'',
         element:<Home/>
      },{
           path:'/skills',
           element:<Skills/>
      }
      ,{
        path:"/Education",
        element:<Education/>

      },{
        path:'/About',
        element:<About/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animation/>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
