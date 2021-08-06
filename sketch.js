var bg, bgImg;
var happy, hImg, move, m, y, thIm, restart, reImg;
var gameState = 1;
var cool, pol;

function preload() {
  reImg = loadImage("reImg.jpg")
  thIm = loadImage("th.jpg");
  hImg = loadImage("Happy.jpg");
  m = loadImage("MOVE.jpg");
  bg  = loadImage("459.jpg");
  thiefImg = loadImage("theif.webp");
  copImg = loadImage("cop2.webp");
  bg2 = loadImage("bg2.jpg");

  soundFormats('mp3', 'ogg');
  cool = loadSound("o.mp3");
  pol = loadSound("p.mp3");

}

function setup() {
  createCanvas(700, 500);
 bgImg = createSprite(200, 200, 500, 500);
 bgImg.addImage(bg);

 cop = createSprite(100, 400, 20, 20);
 cop.addImage(copImg);
 cop.scale = 0.11;

 restart = createSprite(650, 50, 20, 20);
 restart.addImage(reImg);
 restart.scale = 0.15;
 restart.visible = false;


 theif = createSprite(400, 430, 20, 20);
 theif.addImage(thiefImg);
 theif.scale = 0.15;
 theif.velocityX = 2.5 ;

 happy = createSprite(250, 270, 50, 50);
 happy.addImage(hImg);
 happy.scale = 0.5;
 happy.visible = false;

 move = createSprite(150, 25, 50, 50);
 move.addImage(m);
 move.scale = 0.5;

 y = createSprite(250, 150, 50, 50);
 y.addImage(thIm);
 y.scale = 0.5;
 y.visible = false;
}

function draw(){

  if (bgImg.x < 0) {
    bgImg.x = bgImg.width/2;
  }

  if (gameState = 1) {
  
   if(keyDown(RIGHT_ARROW)){
     cop.x = cop.x + 3;
   }
  
   if(keyDown(LEFT_ARROW)){
    cop.x = cop.x - 3;
  }
   
    if (theif.x > 700) {
      theif.x = 800;
    }

    if(theif.x < 0){
      theif.x = 600
      theif.velocityX = 2;
    }
  
    if (cop.x === 400) {
        theif.x = 100;
        theif.velocityX = -2;
    }

    if (cop.isTouching(theif)){
      gameState = 0; 
    } 

    pol.play();
  } 
  if(gameState === 0){
    theif.velocityX = 0;
    theif.visible = false;
    cop.x = 250;
    restart.visible = true;
    happy.visible = true;
    y.visible = true;

    cool.play();
 //   pol.pause();
  }

  if(mousePressedOver(restart)){
    reset();
  }

  drawSprites();
}

function reset(){
  gameState = 1;
  happy.visible = false;
  theif.visible = true;
  theif.velocityX = 2;
  y.visible = false;
  restart.visible = false;
  cop.x = 100;
  pol.play();
}