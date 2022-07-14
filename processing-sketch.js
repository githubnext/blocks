function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY);
  ellipse(mouseX, mouseY, abs(pmouseX - mouseX) * 2, abs(pmouseX - mouseX) * 2);
}
