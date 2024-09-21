import React, { useEffect } from "react";
import gsap from "gsap";
function Cusrsor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a");
    const cursorText = document.querySelector(".cursor-text");

    const handlemouse = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursor, { x: clientX, y: clientY });
    };

    const mouseenter = (event) => {
      const link = event.target;
      if (link.classList.contains("view")) {
        // console.log("dfgdfsssd");

        gsap.to(cursor, { scale: 4 });
        cursorText.computedStyleMap.display = "block";
      } else {
        gsap.to(cursor, { scale: 4 });
      }
    };
    const mouseleave = (event) => {
      gsap.to(cursor, { scale: 1 });
      cursorText.style.display = "none";
    };
    links.forEach((a) => {
      a.addEventListener("mouseenter", mouseenter);
      a.addEventListener("mouseleave", mouseleave);
    });
    document.addEventListener("mousemove", handlemouse);
  });

  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">view</span>
    </div>
  );
}

export default Cusrsor;
