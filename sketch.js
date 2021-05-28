let spritesheet;

let animationIn = [];
let animationMiddle = [];
let animationOut = [];
// let drawings = [];

let playState = "off"

function preload() {
  // spritesheet = loadImage('img/spritesheet-palindrome-300.jpg');
  spritesheetIn = loadImage('img/spritesheet-in.jpg');
  spritesheetMiddle = loadImage('img/spritesheet-middle.jpg');
  spritesheetOut = loadImage('img/spritesheet-out.jpg');
}


function setup() {
  createCanvas(640, 480);
  background(255);

  // let frames = spritedata.frames;

  //   Automatically count the number of frames by dividing the height by width (assuming frames are square)
  let frameCountIn = spritesheetIn.height / spritesheetIn.width;
  let frameCountMiddle = spritesheetMiddle.height / spritesheetMiddle.width;
  let frameCountOut = spritesheetOut.height / spritesheetOut.width;

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
  ball = new Sprite(animationIn, animationMiddle, animationOut, 0, 0, 300, 0.1);

}

function draw() {
  // Trigger if either the mouse or spacebar is pressed
  if (mouseIsPressed || keyIsDown(32)) {
    ball.enterStage();
    playState = "running";
    ball.holdStage();
    // console.log("ready to show hold scene:", ball.showHoldScene)
    // if (ball.showHoldScene) {
    //   // console.log("ready")
    //   ball.holdStage();
    //   playState = "running"
    // }

    // ball.holdStage();
    // TODO
    // Play 'in' sprite
    // Handoff to 'middle' sprite
  } else {
    if (playState === "running") {
      console.log("prepare to exit")
      ball.exitStage();
    }
    // TODO
    // Play 'out' sprite
  }
}