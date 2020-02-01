// the first fill dictates the color of the bubble when the mouse is hovering over it, you can tell from the placement of the curly brackets

// the second fill dictates the color of the bubble when the mouse is not over it, you can tell from "else"

// you can make the bubble smaller by lowering the radius

var x;
var y;
var radius;

function setup() {
  createCanvas(600, 400);
  x = random(width);
  y = random(height);
  radius = 5;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(200, 0, 255, 200);
  }
  else {
    fill(255, 255, 0, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
