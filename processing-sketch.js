function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
  textSize(50);
  text("Move your mouse around the screen", width / 2, height / 2);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY, 20);
  ellipse(mouseX, mouseY, abs(pmouseX - mouseX) * 2, abs(pmouseX - mouseX) * 2);
}
