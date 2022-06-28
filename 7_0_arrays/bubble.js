// Bubble class

// 6.4: p5.js Web Editor: Adding JavaScript Files

// https://www.youtube.com/watch?v=5nf41qLeagU&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=26

class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r*2);
    }
}
