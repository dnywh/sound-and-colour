// Forked from:
// https://editor.p5js.org/codingtrain/sketches/vhnFx1mml
// No longer relies on JSON file

let spritesheet;
let spritedata;

let playMode = true;

let animation = [];
// let drawings = [];

function preload() {
  // spritesheet = loadImage('img/spritesheet-palindrome-300.jpg');
  spritesheet = loadImage('img/spritesheet-middle.jpg');
}


function setup() {
  createCanvas(640, 480);
  background(255);

  // let frames = spritedata.frames;

  //   Automatically count the number of frames by dividing the height by width (assuming frames are square)
  let amountOfFrames = spritesheet.height / spritesheet.width;

  // for (let i = 0; i < frames.length; i++) {
  for (let i = 0; i < amountOfFrames; i++) {
    // let pos = frames[i].position;
    // let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    let img = spritesheet.get(0, i * spritesheet.width, spritesheet.width, spritesheet.width);
    animation.push(img);


  }
  flame = new Sprite(animation, 0, 0, 100, 0.15);

}

function draw() {
// Trigger if either the mouse or spacebar is pressed
  if (mouseIsPressed || keyIsPressed && keyCode === 32) {
    
    // temporary
    flame.show();
    flame.loop();
    // TODO
    // Play 'in' sprite
    // Handoff to 'middle' sprite
  } else {
    // Temporary
    background(255);
    // TODO
    // Play 'out' sprite
  }

}