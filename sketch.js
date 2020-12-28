var moving,fixed
var a1,a2
function setup() {
  createCanvas(800,400);
moving=createSprite(200,20,50,70);
fixed=createSprite(400,200,70,50);
moving.shapeColor="pink";
fixed.shapeColor="red";
a1=createSprite(100,200,60,60);
a1.shapeColor="red";
a1.velocityY=2;
a2=createSprite(100,300,60,60);
a2.shapeColor="orange";
a2.velocityY=-2;
}

function draw() {
  background(0)  ;
  moving.x=mouseX;
  moving.y=mouseY;
 if(isTouching(moving,fixed)){
  moving.shapeColor="yellow";
  fixed.shapeColor="orange";
 }
 else{
  moving.shapeColor="pink";
  fixed.shapeColor="red";
 }
 bounceoff(a1,a2)
  drawSprites();
}