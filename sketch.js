var hr;
var min;
var sec;
var hourAngle,secondAngle, minuteAngle;

function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
}
function draw(){
  background(0);
  translate(200,200);
  rotate(-90);

  hr = hour();
  min = minute();
  sec = second();
  noFill();
  stroke("white");
  strokeWeight(2);
  ellipse(0,0,300,300);
  ellipse(0,0,280,280);
  ellipse(0,0,260,260);

  secondAngle = map(sec,0,60,0,360);
  minuteAngle = map(min,0,60,0,360);
  hourAngle = map(hr%12,0,12,0,360);

  push();
  rotate(secondAngle);
  stroke(0,255,0);
  strokeWeight(3);
  line(0,0,110,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("yellow");
  strokeWeight(4);
  line(0,0,95,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("orange");
  strokeWeight(4);
  line(0,0,80,0);
  pop();
  
  strokeWeight(10);
  stroke("red");
  point(0,0);

  stroke(0,255,0);
  arc(0,0,300,300,0,secondAngle);

  stroke("orange");
  arc(0,0,280,280,0,minuteAngle);

  stroke("yellow");
  arc(0,0,260,260,0,hourAngle);

}