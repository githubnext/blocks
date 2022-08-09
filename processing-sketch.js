function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
  textSize(width / 60);
  textAlign(CENTER);
  text("Move your mouse around the screen", width / 2, height / 3);
}

function draw() {
  fill(mouseX, mouseY, mouseX + mouseY, 20);
  ellipse(mouseX, mouseY, abs(pmouseX - mouseX) * 2, abs(pmouseX - mouseX) * 2);
}
