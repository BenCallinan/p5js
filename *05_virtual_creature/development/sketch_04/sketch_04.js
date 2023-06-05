// Aim: Creatures who reproduce when they intersect

// Will help:
// https://www.youtube.com/watch?v=W1-ej3Wu5zg&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=33
// https://www.youtube.com/watch?v=5Q9cA0REztY&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=34

// Last worked on Saturday 27 August 2022, 10:12am

let males = [];
let females = [];

let offspring = 0;

function setup() {
    createCanvas(600, 400);

    // males
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        males[i] = new Male(x, y, r);
    }

    // females
    for (let j = 0; j < 5; j++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        females[j] = new Female(x, y, r);
    }
    frameRate(10);
}

function draw() {
    background(150);

    for (let i = 0; i < males.length; i++) {
        for (let j = 0; j < females.length; j++) {
            if (males[i].intersects(females[j])) {

                for (let i = 0; i < offspring; i++) {
                    let x = random(width);
                    let y = random(height);
                    let r = random(20);

                    m = new Male(x, y, r);

                    males.splice(i, 1, m);
                }

                offspring++;

            } else {
                males[i].show();
                males[i].move();
                females[j].show();
                females[j].move();

                if (males[i].x < 0 || males[i].y < 0 ||
                    males[i].x > width || males[i].y > height) {
                    males[i].x = random(width);
                    males[i].y = random(height);
                }

                if (females[j].x < 0 || females[j].y < 0 ||
                    females[j].x > width || females[j].y > height) {
                    females[j].x = random(width);
                    females[j].y = random(height);
                }
            }
        }
    }
    if (offspring >= 10)  {
        offspring = 0;
    }
    console.log(offspring);
}

class Male {
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

class Female {
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
