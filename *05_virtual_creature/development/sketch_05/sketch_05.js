// Combine creatures, predators and food

let predators = [];
let males = [];
let females = [];
let foods = [];

let offspring = 0;

function setup() {
    createCanvas(600, 400);

    // Predators
    for (let i = 0; i < 1; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        predators[i] = new Predator(x, y, r);
    }

    // Males
    for (let j = 0; j < 5; j++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        males[j] = new Male(x, y, r);
    }

    // Females
    for (let k = 0; k < 5; k++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        females[k] = new Female(x, y, r);
    }

    // Food
    for (let l = 0; l < 100; l++) {
        let x = random(width);
        let y = random(height);
        let r = 10;
        foods[l] = new Food(x, y, r);
    }
    frameRate(10);
}

function draw() {
    background(150);

    // Predators eat males and females
    for (let i = 0; i < predators.length; i++) {
        predators[i].show();
        predators[i].move();

        if (predators[i].x < 0 || predators[i].y < 0 ||
        predators[i].x > width || predators[i].y > height) {
            predators[i].x = random(width);
            predators[i].y = random(height);
        }

        for (let j = 0; j < males.length; j++) {
            males[j].show();
            males[j].move();

            if (males[j].x < 0 || males[j].y < 0 ||
            males[j].x > width || males[j].y > height) {
                males[j].x = random(width);
                males[j].y = random(height);
            }

            if (predators[i].intersects(males[j])) {
                males.splice(j, 1);
                predators[i].r = predators[i].r + 2;
            }
        }

        for (let k = 0; k < females.length; k++) {
            females[k].show();
            females[k].move();

            if (females[k].x < 0 || females[k].y < 0 ||
            females[k].x > width || females[k].y > height) {
                females[k].x = random(width);
                females[k].y = random(height);
            }

            if (predators[i].intersects(females[k])) {
                females.splice(k, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Males and females reproduce
    for (let j = 0; j < males.length; j ++) {
        males[j].show();
        males[j].move();

        if (males[j].x < 0 || males[j].y < 0 ||
        males[j].x > width || males[j].y > height) {
            males[j].x = random(width);
            males[j].y = random(height);
        }

        for (let k = 0; k < females.length; k++) {
            females[k].show();
            females[k].move();

            if (females[k].x < 0 || females[k].y < 0 ||
            females[k].x > width || females[k].y > height) {
                females[k].x = random(width);
                females[k].y = random(height);
            }

            if (males[j].intersects(females[k])) {

                for (let j = 0; j < offspring; j++) {
                    let x = random(width);
                    let y = random(height);
                    let r = random(20);

                    m = new Male(x, y, r);

                    males.splice(j, 1, m);
                }
                offspring++;
            }

            // Males and females eat food and grow
            for (let l = 0; l < foods.length; l++) {
                foods[l].show();

                if (males[j].intersects(foods[l])) {
                    foods.splice(l, 1);
                    males[j].r = males[j].r + 1;
                } else if (females[k].intersects(foods[l])) {
                    foods.splice(k, 1);
                    females[k].r = females[k].r + 1;
                }
            }

        }
    }
    if (offspring >= 10) {
        offspring = 0;
    }
}
