// after if (mouseIsPressed), changing the x and y values to mouseX and mouseY tells the bubble to move to the cursor location

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
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = mouseX;
      y = mouseY;
    }
    fill(255, 200, 200, 200);
  }
  else {
    fill(255, 220, 200, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
