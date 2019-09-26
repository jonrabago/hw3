What code draws the blades of grass?
  line(x, height-10, x+random(-10, 10), height-10-random(h));

What code makes the "lawnmower" come by? How often does it come by?
  x = x + 10;
  It comes by every 10 pixels.

What's the point of the h variable?
  It is the height of the grass.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
The first one dictates the maximum of tilt to the left the grass is; the second one, the max height of the grass.
