let rounds = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let r = 20;
    rounds[i] = new Round(x, y, r);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 100; i++) {
    rounds[i].move();
    rounds[i].show();

    if (rounds[i].x > width || rounds[i].y > height) {
      rounds[i].x = rounds[i].x - 1;
      rounds[i].y = rounds[i].y - 1;
    }
  }
}

class Round {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    let r = 255;
    let g = 255;
    let b = 255;

    if (this.x < 200) {
      r = 255;
      g = 0;
      b = 0;
    }

    if (this.x > 200 && this.x < 400) {
      r = 0;
      g = 255;
      b = 0;
    }

    if (this.x > 400) {
      r = 0;
      g = 0;
      b = 255;
    }

    noStroke();
    fill(r, g, b);
    ellipse(this.x, this.y, this.r);
  }
}
