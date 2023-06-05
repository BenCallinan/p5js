// Aim: Create a flash of light

class Bright {
    constructor() {
        this.r = 255;
        this.g = 0;
        this.b = 0;
    }

    show() {
        fill(this.r, this.g, this.b);
        rect(0, 0, 800, 500);
    }

}
