const WIDTH = 400;
const HEIGHT = 300;

let ball;
let basket;
let indicator;

let isBallStarted = false;
let hasWon = false;
let hasStartedIndicator = false;

let boardSound;
let swishSound;
let bounceSound;

function setup() {
  createCanvas(WIDTH, HEIGHT);

  ball = new Ball(50, 150, 25);
  basket = new Basket(320, 120);
  indicator = new Indicator(20, HEIGHT - 20);

  boardSound = loadSound("/media/board.mp3");
  swishSound = loadSound("/media/swish.mp3");
  bounceSound = loadSound("/media/bounce.mp3");
}

function draw() {
  if (hasWon) {
    background(56, 194, 56);
  } else {
    background(220);
  }

  if (isBallStarted) {
    ball.move();
  } else {
    indicator.move();
  }

  if (indicator.velocitySet) {
    ball.vx = indicator.vx * 8;
    ball.vy = indicator.vy * -30;
    isBallStarted = true;
    indicator.velocitySet = false;
  }

  // Left side hoop
  if (
    collideLineCircle(
      basket.hoopX,
      basket.hoopY,
      basket.hoopX,
      basket.hoopY + basket.hoopH,
      ball.x,
      ball.y,
      ball.diameter
    )
  ) {
    ball.vx = -ball.vx;
  }
  // Top left hoop
  if (
    collideLineCircle(
      basket.hoopX,
      basket.hoopY,
      basket.hoopX + 5,
      basket.hoopY,
      ball.x,
      ball.y,
      ball.diameter
    ) ||
    collideLineCircle(
      basket.hoopX + basket.hoopW,
      basket.hoopY,
      basket.hoopX + basket.hoopW - 5,
      basket.hoopY,
      ball.x,
      ball.y,
      ball.diameter
    )
  ) {
    ball.vy = -ball.vy;
  }

  // top board
  if (
    collideLineCircle(
      basket.boardX,
      basket.boardY,
      basket.boardX + basket.boardW,
      basket.boardY,
      ball.x,
      ball.y,
      ball.diameter
    )
  ) {
    ball.vy = -ball.vy;
    boardSound.play();
  }

  // left board
  if (
    collideLineCircle(
      basket.boardX,
      basket.boardY,
      basket.boardX,
      basket.boardY + basket.boardH,
      ball.x,
      ball.y,
      ball.diameter
    )
  ) {
    ball.vx = -ball.vx;
    boardSound.play();
  }

  if (
    collideLineCircle(
      basket.hoopX,
      basket.hoopY + basket.hoopH - 3,
      basket.hoopX + basket.hoopW,
      basket.hoopY + basket.hoopH - 3,
      ball.x,
      ball.y,
      ball.diameter
    )
  ) {
    if (ball.vy > 0) {
      hasWon = true;
      swishSound.play();
    }
    if (ball.vy < 0) {
      ball.vy = -ball.vy;
    }
  }

  ball.draw();
  basket.draw();
  indicator.draw();
}

function keyPressed() {
  //   console.log("key", key);
  if (key === " ") {
    isBallStarted = true;
    ball.vx = 3;
    ball.vy = -10;
  }

  if (key === "a") {
    indicator.setVelocity();
  }
}
