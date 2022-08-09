import * as React from "react";
import { motion } from "framer-motion";

const App = () => (
  <motion.div
    animate={{
      x: [-100, 100, -100],
      rotate: [0, 0, 270, 270, 0],
    }}
    transition={{
      type: "spring",
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

import { render } from "react-dom";
render(<App />, document.getElementById("root"));