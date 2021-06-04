let ballSpritesPaths = ['img/ball/spritesheet-in.jpg', 'img/ball/spritesheet-middle.jpg', 'img/ball/spritesheet-out.jpg']
let ballSpritesImg = [];

let playState = "off"

function preload() {
  // Preload all the raw sprite images
  ballSpritesPaths.forEach((element, index) => {
    ballSpritesImg[index] = loadImage(element)
  })
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Create sprite based on these three 
  ball = new Sprite(ballSpritesImg, 0, 0, 300, 0.1);
  // spike = new Sprite(animationIn, animationMiddle, animationOut, 0, 0, 300, 0.1);
}

function draw() {
  // Trigger if either the mouse or spacebar is pressed
  if (mouseIsPressed || keyIsDown(32)) {
    ball.stageEnter();
    ball.stageHold();
  } else {
    ball.stageExit();
  }
}