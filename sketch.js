var fixedRect, movingRect;
var gm1,gm2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gm1=createSprite(100,100,50,50);
  gm2=createSprite(800,100,50,80);
  gm1.velocityX=5;
  gm2.velocityX=-5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
bounceOff(gm1,gm2);
  
  drawSprites();
}

