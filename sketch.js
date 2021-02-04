var hr,mn,sc;
var scAngle,mnAngle,hrAngle 

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(hrAngle);
  strokeWeight(7);
  stroke(0,255,0);
  line(0,0,50,0);
  pop();

  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0,0,285,285,0,scAngle);

  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0,0,270,270,0,mnAngle);

  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,255,255,0,hrAngle);

  drawSprites();
}