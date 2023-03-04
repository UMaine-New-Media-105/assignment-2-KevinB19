function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke()
  background('blue');
  fill('darkgreen')
  rect(0,50,600,280)
  fill('white')
  rect(0,50,600,30)
  rect(0,300,600,30)
  fill('darkred')
  ellipse(175, 185, 160, 160);
  fill('white')
  star(55,55,.6)
  
}

function star(x,y,z){
  translate(x, y)
  scale(z)
  beginShape();
  vertex(200, 100); // Top point
  vertex(240, 160); // Upper right point
  vertex(320, 160); // Upper right inner point
  vertex(265, 215); // Lower right point
  vertex(280, 300); // Lower right inner point
  vertex(200, 255); // Bottom point
  vertex(120, 300); // Lower left inner point
  vertex(135, 215); // Lower left point
  vertex(80, 160); // Upper left inner point
  vertex(160, 160); // Upper left point
  endShape(CLOSE);
}
  


