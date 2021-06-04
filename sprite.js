// This class takes three animations and figures out the frames
class Sprite {
  constructor(spriteSheetArray, x, y, width, speed) {
    // Break down the array again
    this.spriteSheetIn = spriteSheetArray[0];
    this.spriteSheetMiddle = spriteSheetArray[1];
    this.spriteSheetOut = spriteSheetArray[2];

    //  Automatically count the number of frames by dividing the sprightsheet height by width
    // (assumes frames are square so the height of each square is the same as the entire width)
    this.frameCountIn = this.spriteSheetIn.height / this.spriteSheetIn.width;
    this.frameCountMiddle = this.spriteSheetMiddle.height / this.spriteSheetMiddle.width;
    this.frameCountOut = this.spriteSheetOut.height / this.spriteSheetOut.width;

    // Declare other useful variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.animationEnter = [];
    this.animationHold = [];
    this.animationExit = [];
    this.speed = speed;
    this.indexIn = 0;
    this.indexMiddle = 0;
    this.indexOut = 0;
    this.index = 0;
    this.showEnterStage = true;
    this.showHoldScene = false;
    this.showExitScene = false;
    this.enterPlayProgress = 0;
    this.exitPlayProgress = 0;

    // Slice up the sprite sheets into arrays of single frames
    // Do this for the enter, hold, and exit animations
    for (let i = 0; i < this.frameCountIn; i++) {
      let img = this.spriteSheetIn.get(0, i * this.spriteSheetIn.width, this.spriteSheetIn.width, this.spriteSheetIn.width);
      this.animationEnter.push(img);
    }
    for (let i = 0; i < this.frameCountMiddle; i++) {
      let img = this.spriteSheetMiddle.get(0, i * this.spriteSheetMiddle.width, this.spriteSheetMiddle.width, this.spriteSheetMiddle.width);
      this.animationHold.push(img);
    }
    for (let i = 0; i < this.frameCountOut; i++) {
      let img = this.spriteSheetOut.get(0, i * this.spriteSheetOut.width, this.spriteSheetOut.width, this.spriteSheetOut.width);
      this.animationExit.push(img);
    }
  }

  // Enter the stage
  stageEnter() {
    if (this.showEnterStage) {
      // Rewind the exit animation from last time
      this.enterPlayProgress = 0;
      // Disable the hold stage for showing, for now
      this.showHoldScene = false;
      // Set the animation index
      let indexInFloored = floor(this.indexIn) % this.animationEnter.length;
      // Create the image
      image(this.animationEnter[indexInFloored], this.x, this.y, this.width, this.width);

      // Enable the exit for showing
      // TODO: Make this enter scene completely play out before triggering exit
      this.showExitScene = true;

      // Check each draw() for if this has finished all frames
      if (indexInFloored < this.animationEnter.length - 1 && this.enterPlayProgress !== 1) {
        // If not finished, progress another frame
        this.indexIn += this.speed;
      } else {

        // If finished
        // Finish the exit animation
        this.enterPlayProgress = 1;

        // Don't let this function continue again
        this.showEnterStage = false;
        // // Rewind the index for next time
        this.indexIn = 0;
        // Enable the hold stage for showing
        this.showHoldScene = true;

      }
    }
  }

  // Hold the stage
  stageHold() {
    if (this.showHoldScene) {
      let indexMiddleFloored = floor(this.indexMiddle) % this.animationHold.length;
      // console.log(indexMiddleFloored);
      image(this.animationHold[indexMiddleFloored], this.x, this.y, this.width, this.width);
      this.indexMiddle += this.speed;


      // Enable the exit for showing
      this.showExitScene = true;
    }
  }

  // Exit the stage
  stageExit() {
    if (this.showExitScene) {
      // Rewind the exit animation from last time
      this.exitPlayProgress = 0;
      // Set the animation index
      let indexOutFloored = floor(this.indexOut) % this.animationExit.length;
      // Create the image
      image(this.animationExit[indexOutFloored], this.x, this.y, this.width, this.width);

      // Check each draw() for if this has finished all frames
      if (indexOutFloored < this.animationExit.length - 1 && this.exitPlayProgress !== 1) {
        // If not, progress another frame
        this.indexOut += this.speed;
      } else {
        // If so, reset the 
        // Finish the exit animation
        this.exitPlayProgress = 1;
        // Don't let this function continue again
        this.showExitScene = false;
        // Rewind the index for next time
        this.indexOut = 0;
        background(255);
        // Allow the enter stage to appear
        this.showEnterStage = true
      }
    }


  }
}