let x = 100;
let y = 100;

function setup() {
  const p5Canvas = createCanvas(400, 400);
  console.log(p5Canvas);
  p5Canvas.parent("processing");
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
