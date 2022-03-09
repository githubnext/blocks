let x = 100;
let y = 100;
console.log("p5 test");

function setup() {
  const myCanvas = createCanvas(400, 400);
  console.log(myCanvas);
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
