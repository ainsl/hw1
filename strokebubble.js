// fill sets the color that fills the object
// stroke sets the color of the line around the object

var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 50;
}

function draw() {
  background(0);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 180, 250, 255);
    stroke(255, 0, 0, 255);
    strokeWeight(5);
  }
  else {
    fill(255, 220, 200, 255);
    stroke(0, 80, 200, 255);
    strokeWeight(5);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
