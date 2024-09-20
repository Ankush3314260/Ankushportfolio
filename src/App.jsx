import { useEffect, useRef, useState } from "react";
import "./App.css";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar.jsx";
import Intialrender from "./screens/Intialrender.jsx";
import Skills from "./Components/Skills.jsx";
import Education from "./Components/Education.jsx";
import Projects from "./Components/Projects.jsx";
import Navigation from "./Components/Navigation.jsx";
import About from "./Components/About.jsx";
import Lastscreen from "./screens/Lastscreen.jsx";
import { Helmet } from "react-helmet";
import Loader from "./Components/Loader.jsx";
function App() {
  
  const menucloseopen = () => {
    console.log("sdsdd");

    if (
      document.querySelector(".toggle-container").classList.contains("open")
    ) {
      document.querySelector("body").classList.add("overflow-hidden");

      document.querySelector(".bar1").style.transform = "rotate(45deg)";
      document.querySelector(".bar2").style.transform = "rotate(-45deg)";
      document.querySelector(".bar2").classList.replace("mt-2", "mt-0");
      document.querySelector(".toggle-container").classList.remove("open");
      document
        .querySelector(".menuslide")
        .classList.remove("-translate-y-full");
    } else {
      document.querySelector(".bar1").style.transform = "rotate(0deg)";
      document.querySelector(".bar2").style.transform = "rotate(0deg)";
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector(".bar2").classList.replace("mt-0", "mt-2");
      document.querySelector(".toggle-container").classList.add("open");
      document.querySelector(".menuslide").classList.add("-translate-y-full");
    }
  };

  return (
    <>
     
       
          <Helmet>
            <title>Ankush Portfolio | Parallax </title>
            <link rel="canonical" href="https://ankushportfolios.netlify.app" />
            <meta name="author" content="Ankush Kumar" />
            <meta
              name="description"
              content="
    I'm Ankush Kumar, a Frontend Developer specializing in creating stunning parallax portfolio websites. My best portfolio website features dynamic, responsive designs that push the boundaries of web interaction. Recognized for its creativity and smooth user experience, my parallax portfolio is an Awwwards-worthy showcase of cutting-edge web design. Explore my work to see how I bring ideas to life with engaging, innovative digital experiences."
            />
            <meta
              name="keyword"
              content="Awwwards-worthy,awwwards webiste, awwwards portfolio, awwwards example website, parallax design,parallax website, Ankush portfolio parallax, parallax website template, parallax portfolio design, best portfolio design, Ankush Kumar portfolio, awwwards portfolio design, modern web site, github portfolio, parallax portfolio github"
            />
          </Helmet>
          <div className="bg-[#111111] mix-blend-difference">
            <div
              className="absolute  right-0 top-3  p-3  transition-all duration-300 z-[99999]"
              onClick={menucloseopen}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="view  w-[200px] relative z-50"
              >
                <div className="toggle-container open   mix-blend-difference ">
                  <span className=" transition-all duration-300 block h-[2px] w-[2.1rem]   bg-white mix-blend-difference bar1"></span>
                  <span className="transition-all duration-300 block h-[2px] w-[2.1rem] bg-white mix-blend-difference  mt-2  bar2"></span>
                </div>
              </a>
            </div>

            <div className="transition-all duration-1000 ease-out w-full -translate-y-full menuslide   z-50 absolute  min-h-screen ">
              <Navigation closefunction={menucloseopen} />
            </div>
            <div className="bg-[#111111]">
              <Intialrender />
              <Navbar />
              <Experience />
              <Skills />
              <Education />
              <Projects />
              <About />
              <Lastscreen />
            </div>
          </div>
     
    
    </>
  );
}

export default App;
