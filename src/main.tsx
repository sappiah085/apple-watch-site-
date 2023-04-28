import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./index.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
gsap.registerPlugin(ScrollTrigger);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
