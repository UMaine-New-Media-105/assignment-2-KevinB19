function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220); 
  
  drawStar(100, 100, 1);
}

function drawStar(x, y, scale) {
  fill('red');
  noStroke()

  beginShape(); // starts defining the shape of the star using vertices
  vertex(x + 100 * scale, y + 50 * scale); // top point
  vertex(x + 125 * scale, y + 125 * scale); // top right point
  vertex(x + 200 * scale, y + 125 * scale); // right point
  vertex(x + 150 * scale, y + 175 * scale); // bottom right point
  vertex(x + 175 * scale, y + 250 * scale); // bottom point
  vertex(x + 100 * scale, y + 200 * scale); // center point
  vertex(x + 25 * scale, y + 250 * scale); // bottom left point
  vertex(x + 50 * scale, y + 175 * scale); // bottom left point
  vertex(x, y + 125 * scale); // left point
  vertex(x + 75 * scale, y + 125 * scale); // top left point
  endShape(); // completes the shape of the star
}
