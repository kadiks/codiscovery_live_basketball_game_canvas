class Indicator {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.w = 40;
    this.h = 7;

    this.r = this.h;

    this.speed = 1;

    this.circle1D = 1;
    this.circle1X = this.x + this.r * 0.5;

    this.circle2D = -1;
    this.circle2Y = this.y + this.r * 0.5;

    // this.vxStarted = false;
    this.vx = 0;
    this.vy = 0;

    this.velocitySet = false;
  }

  draw() {
    fill(255);

    rect(this.x, this.y, this.w, this.h); // hor bar
    rect(this.x, this.y - this.w + this.h, this.h, this.w); // vert bar

    fill(0, 255, 0);
    circle(this.x + this.r * 0.5, this.circle2Y, 10);

    fill(255, 0, 0);
    circle(this.circle1X, this.y + this.r * 0.5, 10);

    // strokeWidth(1);
  }

  setVelocity() {
    if (!this.vx) {
      this.vx = (this.circle1X - this.x) / this.w;
    } else {
      this.vy = Math.abs((this.circle2Y - this.y + this.h) / this.w);
      this.velocitySet = true;
    }

    console.log("this.vx", this.vx);
    console.log("this.vy", this.vy);
  }

  move() {
    if (!this.vx) {
      if (this.circle1X > this.w + this.x || this.circle1X < this.x) {
        this.circle1D = -this.circle1D;
      }
      this.circle1X += this.circle1D * this.speed;
    }

    if (this.vx && !this.vy) {
      if (
        this.circle2Y < this.y - this.w + this.h ||
        this.circle2Y > this.y + this.h
      ) {
        this.circle2D = -this.circle2D;
      }
      this.circle2Y += this.circle2D * this.speed;
    }
  }
}
