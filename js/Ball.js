class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;

    this.gravity = 0.3;
    this.frictionX = -0.9;
    this.frictionY = -0.8;

    this.rebounds = 2;
  }

  move() {
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= this.frictionX;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= this.frictionX;
    }
    if (this.y + this.diameter / 2 > height) {
      this.rebounds--;
      // sol
      this.y = height - this.diameter / 2;
      this.vy *= this.frictionY;

      bounceSound.play();
    }
    if (this.rebounds === 0) {
      window.location = "";
    }
  }

  draw() {
    fill(229, 107, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    noStroke();
  }
}
