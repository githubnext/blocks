function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255, 192, 203);
  }

  ellipse(mouseX, mouseY, 80, 80);
}
