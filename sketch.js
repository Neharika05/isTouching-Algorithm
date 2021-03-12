var sprite1, sprite2;
function setup() {
  createCanvas(800,400);
sprite1 = createSprite(200,200,50,50);
sprite2 = createSprite(600,200,50,50);
}



function draw() {
  background(0,0,0); 
  sprite1.shapeColor = "yellow"; 
  sprite2.shapeColor = "yellow";

  sprite1.debug = true;
  sprite2.debug = true;

  sprite1.y = mouseY;
  sprite1.x = mouseX;

  isTouching();

  drawSprites();
}


function isTouching(){
  
  if ((sprite2.x - sprite1.x < ((sprite2.width)/2 + (sprite1.width)/2))&&
  (sprite1.x - sprite2.x < (sprite1.width)/2 + (sprite2.width)/2)&&
  (sprite2.y - sprite1.y < (sprite2.height)/2 + (sprite1.height)/2)&&
  (sprite1.y - sprite2.y < (sprite1.height)/2 + (sprite2.height)/2)){
    sprite1.shapeColor = "green";
    sprite2.shapeColor = "green";
  } else{
    sprite1.shapeColor = "yellow";
    sprite2.shapeColor = "yellow";
  }
}