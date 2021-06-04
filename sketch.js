let spritesheet;

let animationIn = [];
let animationMiddle = [];
let animationOut = [];

let playState = "off"

function preload() {
  spritesheetIn = loadImage('img/spritesheet-in.jpg');
  spritesheetMiddle = loadImage('img/spritesheet-middle.jpg');
  spritesheetOut = loadImage('img/spritesheet-out.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //  Automatically count the number of frames by dividing the sprightsheet height by width
  // (assumes frames are square so the height of each square is the same as the entire width)
  let frameCountIn = spritesheetIn.height / spritesheetIn.width;
  let frameCountMiddle = spritesheetMiddle.height / spritesheetMiddle.width;
  let frameCountOut = spritesheetOut.height / spritesheetOut.width;

  // Create img arrays for each of the three scenes
  for (let i = 0; i < frameCountIn; i++) {
    let img = spritesheetIn.get(0, i * spritesheetIn.width, spritesheetIn.width, spritesheetIn.width);
    animationIn.push(img);
  }
  for (let i = 0; i < frameCountMiddle; i++) {
    let img = spritesheetMiddle.get(0, i * spritesheetMiddle.width, spritesheetMiddle.width, spritesheetMiddle.width);
    animationMiddle.push(img);
  }
  for (let i = 0; i < frameCountOut; i++) {
    let img = spritesheetOut.get(0, i * spritesheetOut.width, spritesheetOut.width, spritesheetOut.width);
    animationOut.push(img);
  }

  // Create sprite based on these three 
  ball = new Sprite(animationIn, animationMiddle, animationOut, 0, 0, 300, 0.1);
  // spike = new Sprite(animationIn, animationMiddle, animationOut, 0, 0, 300, 0.1);
}

function draw() {
  // Trigger if either the mouse or spacebar is pressed
  if (mouseIsPressed || keyIsDown(32)) {
    ball.enterStage();
    ball.holdStage();
  } else {
      ball.exitStage();
    }
}