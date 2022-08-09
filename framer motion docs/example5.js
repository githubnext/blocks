import * as React from "react";
import { motion } from "framer-motion";

const App = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div style={{
      ...switchStyles,
      justifyContent: isOn ? "flex-end" : "flex-start"
    }}
      onClick={() => setIsOn(!isOn)}>
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#6366F1",
          borderRadius: "40px",
        }}
      />
    </div>
  );
};

const switchStyles = {
  margin: "40vh auto",
  width: "160px",
  backgroundColor: "#E0E7FF",
  display: "flex",
  justifyContent: "flex-start",
  borderRadius: "50px",
  padding: "10px",
  cursor: "pointer",
}

import { render } from "react-dom";
render(<App />, document.getElementById("root"));