let redRect;
let greenRect;
let blueRect;

let round;

function setup() {
  createCanvas(800, 600);

  background(0);

  rectMode(CENTER);

  redRect = new Rectangle(200, 300, 100, 255, 0, 0);
  redRect.show();

  greenRect = new Rectangle(400, 300, 100, 0, 255, 0);
  greenRect.show();

  blueRect = new Rectangle(600, 300, 100, 0, 0, 255);
  blueRect.show();
}

function mousePressed() {
  if (mouseX > 150 && mouseX < 250 && mouseY > 250 && mouseY < 350) {
    redRect.clicked();
    let x = random(width);
    let y = random(height);
    let r = 20;
    round = new Round(x, y, r);
    round.show();
    round.move();
  } else if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) {
    greenRect.clicked();
  } else if (mouseX > 550 && mouseX < 650 && mouseY > 250 && mouseY < 350) {
    blueRect.clicked();
  }
}

function draw() {}
