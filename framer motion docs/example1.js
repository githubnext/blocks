import * as React from "react";
import { motion } from "framer-motion";

const App = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"]
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }}
    style={{
      background: "linear-gradient(to right, #ddd, #818CF8)",
      borderRadius: "30px",
      margin: "30vh auto",
      width: "30vh",
      height: "30vh",
    }}
  />
);

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);