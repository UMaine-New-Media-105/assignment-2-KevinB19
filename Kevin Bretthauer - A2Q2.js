function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220); 

  fill('red');
  noStroke()
  beginShape(); // starts defining the shape of the star using vertices
  vertex(200, 50); // top point
  vertex(225, 125); // top right point
  vertex(300, 125); // right point
  vertex(250, 175); // bottom right point
  vertex(275, 250); // bottom point
  vertex(200, 200); // center point
  vertex(125, 250); // bottom left point
  vertex(150, 175); // bottom left point
  vertex(100, 125); // left point
  vertex(175, 125); // top left point
  endShape(); // completes the shape of the star
}
