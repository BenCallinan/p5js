// Aim: Add a predator to the environment

// Will help:
// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33
// https://www.youtube.com/watch?v=5Q9cA0REztY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=34

let predators = [];
let creatures = [];
let foods = [];

function setup() {
    createCanvas(600, 400);

    // 1 predator
    for (let i = 0; i < 1; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        predators[i] = new Predator(x, y, r);
    }

    // 5 creatures
    for (let j = 0; j < 5; j++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        creatures[j] = new Creature(x, y, r);
    }

    // 100 pieces of food
    for (let k = 0; k < 100; k++) {
        let x = random(width);
        let y = random(height);
        let r = 10;
        foods[k] = new Food(x, y, r)
    }
}

function draw() {
    background(0);

    // Predator
    for (let i = 0; i < predators.length; i++) {
        predators[i].show();
        predators[i].move();

        if (predators[i].x < 0 || predators[i].y < 0 || predators[i].x > width || predators[i].y > height) {
            predators[i].x = random(width);
            predators[i].y = random(height);
         }

         // Food
         for (let k = 0; k < foods.length; k++) {
             foods[k].show();
        }

         // Creatures
         for (let j = 0; j < creatures.length; j++) {
             creatures[j].show();
             creatures[j].move();

             if (creatures[j].x < 0 || creatures[j].y < 0 || creatures[j].x > width || creatures[j].y > height) {
                 creatures[j].x = random(width);
                 creatures[j].y = random(height);
             }

            if (predators[i].intersects(creatures[j])) {
                creatures.splice(j, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Creatures
    for (let j = 0; j < creatures.length; j++) {
        creatures[j].show();
        creatures[j].move();

        if (creatures[j].x < 0 || creatures[j].y < 0 || creatures[j].x > width || creatures[j].y > height) {
            creatures[j].x = random(width);
            creatures[j].y = random(height);
        }

        //Food
        for (let k = 0; k < foods.length; k++) {
            foods[k].show();

            if (creatures[j].intersects(foods[k])) {
                foods.splice(k, 1);
                creatures[j].r = creatures[j].r + 2;
            }
        }
    }
}

class Predator {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 255;
        this.gn = 0;
        this.bl = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return(d < this.r + other.r);
    }

    move() {
        this.x = this.x + random(-6, 6);
        this.y = this.y + random(-6, 6);
    }

    show() {
        noStroke();
        fill(this.rd, this.gn, this.bl);
        ellipse(this.x, this.y, this.r);
    }
}

class Creature {
    constructor(x, y, r, rd, gn, bl) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rd = 0;
        this.gn = 0;
        this.bl = 255;
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
