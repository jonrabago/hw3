function setup() {
  createCanvas(400, 400);
  frameRate(45);
  
}

function draw() {
  background(20, 40);
  
  var x1 = random(width);
  var y1 = random(height);
  var x2 = random(width);
  var y2 = random(height);

  strokeWeight(random(10, 20));
  stroke(random(1, 255), random(1, 255), random(1, 255));
  line(random(width, mouseX), random(height, mouseY), random(width, mouseX), random(height, mouseY));
}
