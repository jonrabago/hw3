function setup() {
  createCanvas(425, 400);
  
}

// track the circle to draw next frame
var x = 25;
var y = 25;

function draw() {
  frameRate(25);
  
  fill(random(100));
  ellipse(125, 125, 20);
  ellipse(125, 150, 20);
  ellipse(125, 175, 20);
  ellipse(125, 200, 20);
  ellipse(125, 225, 20);
  ellipse(125, 250, 20);
  ellipse(125, 275, 20);
  
  ellipse(150, 200, 20);
  ellipse(175, 200, 20);
  ellipse(200, 225, 20);
  ellipse(200, 250, 20);
  ellipse(200, 275, 20);
  
  ellipse(250, 150, 20);
  ellipse(250, 200, 20);
  ellipse(250, 225, 20);
  ellipse(250, 250, 20);
  ellipse(250, 275, 20);
  
  ellipse(300, 125, 20);
  ellipse(300, 150, 20);
  ellipse(300, 175, 20);
  ellipse(300, 200, 20);
  ellipse(300, 225, 20);
  ellipse(300, 275, 20);

  frameRate(100);
  // colorMode(HSB);
  stroke(255);

  // draw circle with random hue
  fill(255, 255, random(255));
  
  ellipse(x, y, 20);

  // set up next circle
  x = x + 25;

  // if we hit the right edge, go down a line
  if (x > width-25) {
    x = 25;
    y = y + 25;
  }

  // if we hit the bottom edge, reset to top
  if (y > height-25) {
    y = 25;
  }
}
