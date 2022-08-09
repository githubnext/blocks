function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY);
  ellipse(mouseX, mouseY, abs(pmouseX - mouseX) * 2, abs(pmouseX - mouseX) * 2);
}
