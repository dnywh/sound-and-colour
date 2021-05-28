class Sprite {
  constructor(animationIn, animationMiddle, animationOut, x, y, width, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.animationIn = animationIn;
    this.animationMiddle = animationMiddle;
    this.animationOut = animationOut;
    this.speed = speed;
    this.indexIn = 0;
    this.indexMiddle = 0;
    this.indexOut = 0;
    this.index = 0;
    this.showHoldScene = false;
    this.showExitScene = false;
    this.enterPlayProgress = 0;
    this.exitPlayProgress = 0;
  }


  // show() {
  //   let index = floor(this.index) % this.lengthMiddle;
  //   image(this.animationMiddle[index], this.x, this.y, this.width, this.width);
  // }

  enterStage() {
    // Rewind the exit animation from last time
    this.enterPlayProgress = 0;
    // Disable the hold stage for showing, for now
    this.showHoldScene = false;
    // Set the animation index
    let indexInFloored = floor(this.indexIn) % this.animationIn.length;
    // Create the image
    image(this.animationIn[indexInFloored], this.x, this.y, this.width, this.width);

    // Check each draw() for if this has finished all frames
    if (indexInFloored < this.animationIn.length - 1 && this.enterPlayProgress !== 1) {
      // If not finished, progress another frame
      this.indexIn += this.speed;
    } else {
      // If finished
      this.enterPlayProgress = 1;
      // // Rewind the index for next time
      this.indexIn = 0;
      // Enable the hold stage for showing
      console.log("Playing the hold music...")
      this.showHoldScene = true;
      // this.holdStage();
    }
  }

  holdStage() {
    if (this.showHoldScene) {
      let indexMiddleFloored = floor(this.indexMiddle) % this.animationMiddle.length;
      console.log(indexMiddleFloored);
      image(this.animationMiddle[indexMiddleFloored], 100, 100, this.width, this.width);
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

  exitStage() {
    if (this.showExitScene) {
      // Rewind the exit animation from last time
      this.exitPlayProgress = 0;
      // Set the animation index
      let indexOutFloored = floor(this.indexOut) % this.animationOut.length;
      // Create the image
      image(this.animationOut[indexOutFloored], 200, 200, this.width, this.width);

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
      }
    }


  }
}