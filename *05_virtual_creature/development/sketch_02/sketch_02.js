// Aim: Create a basic create that interacts with the surrounding
// environment

// Will help:
// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33
// https://www.youtube.com/watch?v=5Q9cA0REztY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=34

let creatures = [];
let foods = [];

function setup() {
    createCanvas(600, 400);

    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        creatures[i] = new Creature(x, y, r);
    }

    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let r = 10;
        foods[i] = new Food(x, y, r)
    }
}

function draw() {
    background(0);

    for (let i = 0; i < creatures.length; i++) {
        creatures[i].show();
        creatures[i].move();

        if (creatures[i].x < 0 || creatures[i].y < 0 || creatures[i].x > width || creatures[i].y > height) {
            creatures[i].x = random(width);
            creatures[i].y = random(height);
        }

        for (let j = 0; j < foods.length; j++) {
            foods[j].show();

            if (creatures[i].intersects(foods[j])) {
                foods.splice(j, 1);
                creatures[i].r = creatures[i].r + 2;
            } else if (foods.length <= 0) {
                creatures[i].r = creatures[i].r - 2;
            }
        }
    }
}

class Creature {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 255;
        this.gn = 0;
        this.bl = 0;
    }

    death() {
        this.rd = 255;
        this.gn = 255;
        this.bl = 255;
        this.x = random(width);
        this.y = random(height);
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-4, 4);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}

class Food {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 255;
        this.bl = 0;
    }

    changeColour() {
        this.rd = 0;
        this.gn = 0;
        this.bl = 0;
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}
