function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY);
  ellipse(mouseX, mouseY, 80, 80);
}
