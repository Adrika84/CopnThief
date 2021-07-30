var bg, bgImg;

function preload() {
  bg  = loadImage("459.jpg");
  thiefImg = loadImage("theif.webp")
  copImg = loadImage("cop2.jpg")
}

function setup() {
  createCanvas(500, 500);
 bgImg = createSprite(0, 0, 500, 500);
 bgImg.addImage(bg);

 cop = createSprite(100, 180, 20, 20);
 cop.addImage(copImg);
 cop.scale = 0.3

 theif = createSprite(400, 200, 20, 20);
 theif.addImage(thiefImg);
 theif.scale = 0.15;
 theif.velocityX = 2.5 ;
}

function draw() {

//  fill("Black")
//  text("Use Arrow Keys to MOVE", 50, 50)

  bgImg.velocityX = -2;

  if (bgImg.x < 0) {
    bgImg.x = bgImg.width/2;
  }

 if(keyDown(RIGHT_ARROW)){
   cop.x = cop.x + 3;
 }

 if(keyDown(UP_ARROW)){
  cop.x = cop.x - 3;
}
 
  if (theif.x > 500) {
    theif.x = 550;
  }

  if (theif.x < -5) {
    theif.x = 100;
  }

  if (cop.x === 400) {
      theif.x = 200;
      theif.velocityX = -2;
  }

  drawSprites();
}