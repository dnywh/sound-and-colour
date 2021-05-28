class Sprite {
  constructor(animation, x, y, width, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    // this.h = h;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }


  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y, this.width, this.width);
  }

  loop() {
    this.index += this.speed;
    
//     Move from left to right
//     this.x += this.speed * 15;

//     if (this.x > width) {
//       this.x = -this.w;
//     }
  }
  
  playOnce() {
//     If the frame isn't the last...
    if(this.index < this.len && playMode === true) {
//       Go forward one frame
      this.index += this.speed;
//       Otherwise...
    } else {
//       Stay on the last frame
      this.index = this.len
      playMode = true;
    }
  }
}