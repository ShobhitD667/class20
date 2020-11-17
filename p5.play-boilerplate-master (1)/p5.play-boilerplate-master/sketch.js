var movingRect , fixedRect

function setup() {
  createCanvas(800,400);
 movingRect = createSprite (400,200,30,60) 
 fixedRect = createSprite (500,200,60,30)
 movingRect.shapeColor = "cyan"
 fixedRect.shapeColor  = "cyan"

}

function draw() {
  background("black");  
  movingRect.x = mouseX
  movingRect.y = mouseY
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2) {
  movingRect.shapeColor = "orange"
  fixedRect.shapeColor = "orange"
  }
  else{
    movingRect.shapeColor = "cyan"
    fixedRect.shapeColor = "cyan"
  }
  drawSprites();

}