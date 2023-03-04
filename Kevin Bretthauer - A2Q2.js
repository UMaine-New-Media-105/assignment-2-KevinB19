function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220); 

  fill(255, 0, 0); // sets the fill color of the heart to red

  beginShape(); // starts defining the shape of the heart using vertices
  vertex(200, 100); // top point of the heart
  bezierVertex(200, 75, 150, 75, 150, 100); // top left curve of the heart
  bezierVertex(150, 125, 200, 175, 200, 175); // bottom left curve of the heart
  bezierVertex(200, 175, 250, 125, 250, 100); // bottom right curve of the heart
  bezierVertex(250, 75, 200, 75, 200, 100); // top right curve of the heart
  endShape(); // completes the shape of the heart
}
