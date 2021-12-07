# Framer motion

Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.

<CodeSandbox language="js" height="20em" dependencies={["react", "react-dom", "framer-motion"]} sandboxOptions={{
  highlights:"6,7,8,9,10",
  view: "preview",
  theme: "light"
}}>

```js
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

import { render } from "react-dom";
render(<App />, document.getElementById("root"));
```

</CodeSandbox>

## Gestures

Motion provides whileHover, whileTap, whileDrag and whileFocus helper props, that will temporarily animate a component to a visual state while a gesture is active.

Like animate, these can either be set as an object of properties (each with their own transition prop), or the name of a variant.

Motion will also automatically handle the interplay of the two gestures, so if a component is being pressed while a hover gestures starts/stops, the whileTap gesture will take priority.

<CodeSandbox language="js" height="30em" dependencies={["react", "react-dom", "framer-motion"]} sandboxOptions={{
  highlights:"6,7",
  view: "split",
}}>

```js
import * as React from "react";
import { motion } from "framer-motion";

const App = () => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
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
```

</CodeSandbox>

## Gestures

A component can be made draggable with the addition of the drag prop. Lock it to either axis by setting drag to "x" or "y".

The component can be constrained to a specific range, defined either in pixels, or by providing a ref to another DOM element.

These constraints are elastic, and the strength of this elasticity can be configured with the dragElastic prop.

<CodeSandbox language="js" height="30em" dependencies={["react", "react-dom", "framer-motion"]} sandboxOptions={{
  highlights:"6,7,8,9,10,11,12",
  view: "split",
}}>

```js
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

import { render } from "react-dom";
render(<App />, document.getElementById("root"));
```

</CodeSandbox>

## Springs

An animation that simulates spring physics for realistic motion.

This is the default animation for physical values like x, y, scale and rotate.

<CodeSandbox language="js" height="30em" dependencies={["react", "react-dom", "framer-motion"]} sandboxOptions={{
  highlights:"11",
  view: "split",
}}>

```js
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
```

</CodeSandbox>

## Layout animations

To automatically animate the layout of a motion component when its size or position changes, give it a layout prop.

<CodeSandbox language="js" height="30em" dependencies={["react", "react-dom", "framer-motion"]} sandboxOptions={{
  highlights:"11",
  view: "split",
}}>

```js
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
```

</CodeSandbox>
