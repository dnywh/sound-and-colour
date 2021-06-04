let blackSpritesPaths = ['img/black/spritesheet-in.jpg', 'img/black/spritesheet-middle.jpg', 'img/black/spritesheet-out.jpg']
let blackSpritesImg = [];

let redSpritesPaths = ['img/red/spritesheet-in.jpg', 'img/red/spritesheet-middle.jpg', 'img/red/spritesheet-out.jpg']
let redSpritesImg = [];

let yellowSpritesPaths = ['img/yellow/spritesheet-in.jpg', 'img/yellow/spritesheet-middle.jpg', 'img/yellow/spritesheet-out.jpg']
let yellowSpritesImg = [];

let blueSpritesPaths = ['img/blue/spritesheet-in.jpg', 'img/blue/spritesheet-middle.jpg', 'img/blue/spritesheet-out.jpg']
let blueSpritesImg = [];

function loaded(loaded) {
console.log("loaded");
}

function error(err) {
  console.log("err");
  }

function progress(pr) {
  console.log(pr)
}

function preload() {
  // Preload all the raw sprite images
  blackSpritesPaths.forEach((element, index) => {
    blackSpritesImg[index] = loadImage(element, loaded, error, progress)
  })
  redSpritesPaths.forEach((element, index) => {
    redSpritesImg[index] = loadImage(element, loaded, error)
  })
  yellowSpritesPaths.forEach((element, index) => {
    yellowSpritesImg[index] = loadImage(element, loaded, error)
  })
  blueSpritesPaths.forEach((element, index) => {
    blueSpritesImg[index] = loadImage(element, loaded, error)
  })
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Create sprite based on these three 
  imageMode(CENTER);
  black = new Sprite(blackSpritesImg, windowWidth * 0.5, windowHeight * 0.5, 200, 0.01 );
  red = new Sprite(redSpritesImg, windowWidth * 0.3, windowHeight * 0.5, 300, 0.2);
  yellow = new Sprite(yellowSpritesImg, windowWidth * 0.6, windowHeight * 0.6, 300, 0.25);
  blue = new Sprite(blueSpritesImg, windowWidth * 0.6, windowHeight * 0.3, 300, 0.15);
}

function draw() {
  clear();
  blendMode(MULTIPLY);
  // Trigger black if either the mouse or spacebar is pressed
  if (mouseIsPressed || keyIsDown(32)) {
    black.stageEnter();
    black.stageHold();
  } else {
    black.stageExit();
  }

  // if 'w' is pressed
  if (keyIsDown(87)) {
    red.stageEnter();
    red.stageHold();
  } else {
    red.stageExit();
  }

  // if 'a' is pressed
  if (keyIsDown(65)) {
    yellow.stageEnter();
    yellow.stageHold();
  } else {
    yellow.stageExit();
  }

  // if 'd' is pressed
  if (keyIsDown(68)) {
    blue.stageEnter();
    blue.stageHold();
  } else {
    blue.stageExit();
  }
}