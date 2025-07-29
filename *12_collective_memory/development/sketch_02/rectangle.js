class Rectangle {
  constructor(x, y, s, r, g, b) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  show() {
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.s);
  }

  clicked() {
    background(0);
  }
}
