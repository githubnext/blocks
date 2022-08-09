import * as React from "react";
import { motion } from "framer-motion";

const App = () => (
  <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
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