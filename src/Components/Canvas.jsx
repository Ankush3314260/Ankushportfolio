import React, { useRef, useEffect, useState } from "react";

const Canvas = ({ images }) => {
  const canvasRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: window.innerWidth,
    height: 500,
  });
  const dpr = window.devicePixelRatio || 1;

  // Update canvas dimensions when the window resizes
  const updateCanvasDimensions = () => {
    let aspectRatio = 16 / 9;

    // Assume a common aspect ratio; adjust as needed based on your images
    const newWidth = window.innerWidth;
    const newHeight = newWidth / aspectRatio; // Calculate new height to maintain the aspect ratio

    setCanvasDimensions({ width: newWidth, height: newHeight });
  };

  useEffect(() => {
    const handleResize = () => {
      updateCanvasDimensions();
    };

    window.addEventListener("resize", handleResize);
    updateCanvasDimensions(); // Initial setting

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;

      // Calculate the scroll fraction to determine a smooth index
      const scrollFraction = scrollTop / maxScrollTop;
      const totalFrames = images.length - 1;
      const interpolatedIndex = scrollFraction * totalFrames;

      // Set the current image index as the rounded integer part of the interpolated index
      setCurrentImageIndex(interpolatedIndex);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const drawImage = (index) => {
      if (!images[Math.floor(index)]) return;

      const image = new Image();
      image.crossOrigin = "anonymous"; // Handle cross-origin if needed
      image.src = images[Math.floor(index)];

      image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

        // Calculate aspect ratio to fit image within the canvas
        const imgAspectRatio = image.width / image.height;
        const canvasAspectRatio = canvas.width / canvas.height;

        let renderWidth, renderHeight;

        // Maintain aspect ratio
        if (imgAspectRatio > canvasAspectRatio) {
          renderWidth = canvas.width;
          renderHeight = renderWidth / imgAspectRatio;
        } else {
          renderHeight = canvas.height;
          renderWidth = renderHeight * imgAspectRatio;
        }

        // Center image on the canvas
        const xOffset = (canvas.width - renderWidth) / 2;
        const yOffset = (canvas.height - renderHeight) / 2;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(image, xOffset, yOffset, renderWidth, renderHeight);
      };
    };

    const animate = () => {
      // Use the fractional index to create smooth transitions
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      drawImage(currentImageIndex);
    };

    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentImageIndex, images, canvasDimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="shadow-md shadow-black"
      width={canvasDimensions.width}
      height={canvasDimensions.height}
      style={{
        // Fix the canvas to the top
        // Position it at the top of the page
        left: 0, // Align it to the left side
        width: "100vw", // Take the full width of the viewport
        height: `${canvasDimensions.height}px`, // Set height based on aspect ratio
        zIndex: -10, // Push it behind other content if necessary
      }}
    />
  );
};

export default Canvas;
