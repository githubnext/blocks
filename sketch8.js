// Have to create the sketch in instance mode
// learn more here: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

const s = (sketch) => {
  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(400, 400);
    sketch.background(0);
  }

  sketch.draw = () => {
    if (sketch.mouseIsPressed) {
      sketch.fill(0);
    } else {
      sketch.fill(255);
    }

    sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
  }
};
const P5 = new p5(s);
