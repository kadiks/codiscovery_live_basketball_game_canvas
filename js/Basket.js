class Basket {
  constructor(x, y) {
    this.hoopX = x;
    this.hoopY = y;
    this.hoopW = 50;
    this.hoopH = 5;

    this.boardW = 3;
    this.boardH = 70;
    this.boardX = x + this.hoopW + 5;
    this.boardY = y - this.boardH + 15;
  }

  draw() {
    fill(0);
    rect(this.hoopX, this.hoopY, this.hoopW, this.hoopH);

    fill(255);
    rect(this.boardX, this.boardY, this.boardW, this.boardH);
  }
}
