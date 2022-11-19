# Framer motion

Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.

<BlockComponent
block={{owner: "githubnext", repo: "blocks-examples", "id": "sandbox-block"}}
context={{path: "examples/framer motion docs/example1.js"}}
height="20em"
state={{
  highlights:"6,7,8,9,10",
  view: "preview",
  theme: "light"
}}
/>

## Gestures

Motion provides whileHover, whileTap, whileDrag and whileFocus helper props, that will temporarily animate a component to a visual state while a gesture is active.

Like animate, these can either be set as an object of properties (each with their own transition prop), or the name of a variant.

Motion will also automatically handle the interplay of the two gestures, so if a component is being pressed while a hover gestures starts/stops, the whileTap gesture will take priority.

<BlockComponent
block={{owner: "githubnext", repo: "blocks-examples", "id": "sandbox-block"}}
context={{path: "examples/framer motion docs/example2.js"}}
height="30em"
state={{
  highlights:"6,7",
  view: "split",
}}
/>

## Gestures

A component can be made draggable with the addition of the drag prop. Lock it to either axis by setting drag to "x" or "y".

The component can be constrained to a specific range, defined either in pixels, or by providing a ref to another DOM element.

These constraints are elastic, and the strength of this elasticity can be configured with the dragElastic prop.

<BlockComponent
block={{owner: "githubnext", repo: "blocks-examples", "id": "sandbox-block"}}
context={{path: "examples/framer motion docs/example3.js"}}
height="30em"
state={{
  highlights:"6,7,8,9,10,11,12",
  view: "split",
}}
/>

## Springs

An animation that simulates spring physics for realistic motion.

This is the default animation for physical values like x, y, scale and rotate.

<BlockComponent
block={{owner: "githubnext", repo: "blocks-examples", "id": "sandbox-block"}}
context={{path: "examples/framer motion docs/example4.js"}}
height="30em"
state={{
  highlights:"11",
  view: "split",
}}
/>

## Layout animations

To automatically animate the layout of a motion component when its size or position changes, give it a layout prop.

<BlockComponent
block={{owner: "githubnext", repo: "blocks-examples", "id": "sandbox-block"}}
context={{path: "examples/framer motion docs/example5.js"}}
height="30em"
state={{
  highlights:"11",
  view: "split",
}}
/>
