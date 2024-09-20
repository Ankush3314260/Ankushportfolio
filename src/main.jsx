import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cusrsor from "./Components/Cusrsor.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Cusrsor/>
    <App />
  </StrictMode>
);
