// Mouse colour

// Function to change colour of bubble when mouse is pressed

class Rectangle {

    constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(0, 0, 255);
        rect(this.x, this.y, this.w, this.h);
    }
}
