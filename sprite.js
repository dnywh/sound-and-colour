// This class takes three animations and figures out the frames
class Sprite {
  constructor(spriteSheetIn, spriteSheetMiddle, spriteSheetOut, x, y, width, speed) {
    //  Automatically count the number of frames by dividing the sprightsheet height by width
    // (assumes frames are square so the height of each square is the same as the entire width)
    this.frameCountIn = spriteSheetIn.height / spriteSheetIn.width;
    this.frameCountMiddle = spriteSheetMiddle.height / spriteSheetMiddle.width;
    this.frameCountOut = spriteSheetOut.height / spriteSheetOut.width;


    this.x = x;
    this.y = y;
    this.width = width;
    this.animationIn = [];
    this.animationMiddle = [];
    this.animationOut = [];
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

    // Create img arrays for each of the three scenes
    for (let i = 0; i < this.frameCountIn; i++) {
      let img = spriteSheetIn.get(0, i * spriteSheetIn.width, spriteSheetIn.width, spriteSheetIn.width);
      this.animationIn.push(img);
    }
    for (let i = 0; i < this.frameCountMiddle; i++) {
      let img = spriteSheetMiddle.get(0, i * spriteSheetMiddle.width, spriteSheetMiddle.width, spriteSheetMiddle.width);
      this.animationMiddle.push(img);
    }
    for (let i = 0; i < this.frameCountOut; i++) {
      let img = spriteSheetOut.get(0, i * spriteSheetOut.width, spriteSheetOut.width, spriteSheetOut.width);
      this.animationOut.push(img);
    }
  }

  // In
  enterStage() {
    if (this.showEnterStage) {
      // Rewind the exit animation from last time
      this.enterPlayProgress = 0;
      // Disable the hold stage for showing, for now
      this.showHoldScene = false;
      // Set the animation index
      let indexInFloored = floor(this.indexIn) % this.animationIn.length;
      // Create the image
      image(this.animationIn[indexInFloored], this.x, this.y, this.width, this.width);

      // Enable the exit for showing
      // TODO: Make this enter scene completely play out before triggering exit
      this.showExitScene = true;

      // Check each draw() for if this has finished all frames
      if (indexInFloored < this.animationIn.length - 1 && this.enterPlayProgress !== 1) {
        // If not finished, progress another frame
        this.indexIn += this.speed;
      } else {
        // console.log("Finished!")
        // If finished
        // Finish the exit animation
        this.enterPlayProgress = 1;
        // console.log ("finished")
        // this.enterPlayProgress = 1;
        // Don't let this function continue again
        this.showEnterStage = false;
        // // Rewind the index for next time
        this.indexIn = 0;
        // Enable the hold stage for showing
        this.showHoldScene = true;

        // return this.showHoldScene;
        // this.holdStage()
      }
    }
  }

  // Middle
  holdStage() {
    if (this.showHoldScene) {
      let indexMiddleFloored = floor(this.indexMiddle) % this.animationMiddle.length;
      // console.log(indexMiddleFloored);
      image(this.animationMiddle[indexMiddleFloored], this.x, this.y, this.width, this.width);
      this.indexMiddle += this.speed;


      // Enable the exit for showing
      this.showExitScene = true;
    }

    //     Move from left to right
    //     this.x += this.speed * 15;

    //     if (this.x > width) {
    //       this.x = -this.w;
    //     }
  }

  // Out
  exitStage() {
    if (this.showExitScene) {
      // Rewind the exit animation from last time
      this.exitPlayProgress = 0;
      // Set the animation index
      let indexOutFloored = floor(this.indexOut) % this.animationOut.length;
      // Create the image
      image(this.animationOut[indexOutFloored], this.x, this.y, this.width, this.width);

      // Check each draw() for if this has finished all frames
      if (indexOutFloored < this.animationOut.length - 1 && this.exitPlayProgress !== 1) {
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