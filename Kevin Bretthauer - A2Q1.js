function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  mRow(1,1,4)
  mRow(2,1,3)
  mRow(3,1,2)
  mRow(4,1,3)
  mRow(5,1,4)
  
}

function mRow(y, s1, s2) {
  for (let i = 0; i < 5; i++){
    if (((i+1) == s1) || ((i+1) == s2)){
      fill('orange')
    } else{
      fill('blue')
    }
    rect((i* 80), ((y - 1) * 80), 80);
  }
    
}
