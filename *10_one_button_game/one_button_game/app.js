// Aim: Create a one-button game
// Idea: Blackhole - a blackhole eats other stars but is abosorbed by other black holes

let blobX = 0;
let blobY = 0;
let blobW = 50;
let blobH = 65;

let xSpeed = 1;
let ySpeed = 1;

let greenCircles = [];
let redCircles = [];

let score = 0;

let playGame = false;
let stopGame = false;

let gameOver = false;
let showScore = true;

let startText = true;

function preload() {
  blobSprite = loadImage("blob_sprite.png");
}

function setup() {
  createCanvas(600, 600);

  game();
}

function keyPressed() {
  if (gameOver || score === 50) {
    greenCircles = [];
    redCircles = [];
    showScore = true;
    score = 0;
    setTimeout(wait, 500);
    function wait() {
      game();
      loop();
    }
  }
}

function game() {
  for (let i = 0; i < 50; i++) {
    greenCircles.push(new Blobfood());
  }

  for (let j = 0; j < 5; j++) {
    redCircles.push(new Blobpoison());
  }

  blobX = random(500);
  blobY = random(500);

  score = 0;
}

function draw() {
  background(210, 210, 200);

  gameOver = false;

  // Display blobfood and remove when eaten
  for (let i = greenCircles.length - 1; i >= 0; i--) {
    greenCircles[i].display();
    let hit =
      blobX < greenCircles[i].x &&
      blobX + blobW > greenCircles[i].x &&
      blobY < greenCircles[i].y + greenCircles[i].h &&
      blobY + blobH > greenCircles[i].y;
    if (hit && keyIsPressed === true) {
      greenCircles.splice(i, 1);
      blobX = int(random(blobX + 5, blobX - 5));
      blobY = int(random(blobY + 7, blobY - 7));
      score++;
    }
  }

  // Display blobpoison
  for (let j = 0; j < redCircles.length; j++) {
    redCircles[j].display();
    let hit =
      blobX < redCircles[j].x &&
      blobX + blobW > redCircles[j].x &&
      blobY < redCircles[j].y + redCircles[j].h &&
      blobY + blobH > redCircles[j].y;
    if (hit && keyIsPressed === true) {
      gameOver = true;
    }
  }

  // Blob bounces around the canvas
  image(blobSprite, blobX, blobY, blobW, blobH);

  blobX = blobX + random(-1, 1);
  blobY = blobY + random(-1, 1);

  blobX = blobX + xSpeed;
  blobY = blobY + ySpeed;
  if (blobX < 0 || blobX > width - 50) {
    xSpeed = xSpeed * -1 || 1;
  }
  if (blobY < 0 || blobY > height - 65) {
    ySpeed = ySpeed * -1 || 1;
  }

  if (blobX <= 0) {
    blobX = 20;
  }
  if (blobX >= width) {
    blobX = 580;
  }

  if (blobY <= 0) {
    blobY = 20;
  }
  if (blobY >= height) {
    blobY = 580;
  }

  // Text color
  fill(255);

  if (showScore) {
    textSize(60);
    textAlign(CENTER);
    text(score, 40, 60);
  }

  if (score === 50) {
    showScore = false;
    background(205, 205, 195);
    textSize(60);
    textAlign(CENTER);
    fill(0, 190, 75);
    text("Green is good", 300, 225);
    text("You ate: " + score, 300, 325);
    textSize(40);
    text("Press any key to try again", 300, 425);
    noLoop();
  }

  if (gameOver) {
    showScore = false;
    background(205, 205, 195);
    textSize(90);
    textAlign(CENTER);
    fill(255, 102, 102);
    text("Red is dead", 300, 225);
    textSize(60);
    text("You ate: " + score, 300, 325);
    textSize(40);
    text("Press any key to try again", 300, 425);
    noLoop();
  }

  if (startText) {
    textSize(60);
    textAlign(CENTER);
    text("Press any key to play", 300, 325);
    if (keyIsPressed) {
      startText = false;
    }
  }
}

class Blobfood {
  constructor(x, y, w, h) {
    this.x = int(random(50, 550));
    this.y = int(random(50, 550));
    this.w = 15;
    this.h = 15;
  }

  display() {
    let c = color(0, 190, 75);
    fill(c);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  }
}

class Blobpoison {
  constructor(x, y, w, h) {
    this.x = int(random(50, 550));
    this.y = int(random(50, 550));
    this.w = 15;
    this.h = 15;
  }

  display() {
    let c = color(255, 102, 102);
    fill(c);
    noStroke();
    ellipse(this.x, this.y, this.w, this.h);
  }
}
