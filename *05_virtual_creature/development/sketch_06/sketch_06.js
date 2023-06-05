// Aim: Create an ecosystem of different shapes

// Add sliders to change numbers of predators, creatures and food

let predators = [];
let males = [];
let females = [];
let foods = [];

let offspring = 0;

function setup() {
    createCanvas(800, 600);

    // Predators (grey squares)
    for (let i = 0; i < 5; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(20);

        predators[i] = new Predator(x, y, w);
    }

    // Males (blue circles)
    for (let j = 0; j < 5; j++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        males[j] = new Male(x, y, r);
    }

    // Females (red circles)
    for (let k = 0; k < 5; k++) {
        let x = random(width);
        let y = random(height);
        let r = random(20);

        females[k] = new Female(x, y, r);
    }

    // Food (green triangles)
    for (let l = 0; l < 500; l++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = x1 + random(10, 20);
        let y2 = y1;
        let x3 = x1 + random(5, 10);
        let y3 = y1 - random(10, 20);

        foods[l] = new Food(x1, y1, x2, y2, x3, y3);
    }

    frameRate(10);
}

function draw() {
    background(220, 215, 210);

    // https://www.youtube.com/watch?v=GY-c2HO2liA

    // Predators
    for (let i = 0; i < predators.length; i++) {
        predators[i].show();
        predators[i].move();

        if (predators[i].x < 0 || predators[i].y < 0 ||
        predators[i].x > width || predators[i].y > height) {
            predators[i].x = random(width);
            predators[i].y = random(height);
        }
    }

    // Males
    for (let j = 0; j < males.length; j++) {
        males[j].show();
        males[j].move();

        if (males[j].x < 0 || males[j].y < 0 ||
        males[j].x > width || males[j].y > height) {
            males[j].x = random(width);
            males[j].y = random(height);
        }
    }

    // Females
    for (let k = 0; k < females.length; k++) {
        females[k].show();
        females[k].move();

        if (females[k].x < 0 || females[k].y < 0 ||
        females[k].x > width || females[k].y > height) {
            females[k].x = random(width);
            females[k].y = random(height);
        }
    }

    // Food
    for (let l = 0; l < foods.length; l++) {
        foods[l].show();
    }

    // Predator eat males
    for (let i = 0; i < predators.length; i++) {
        for (let j = 0; j < males.length; j++) {

            if (predators[i].intersects(males[j])) {
                males.splice(j, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Predator eats females
    for (let i = 0; i < predators.length; i++) {
        for (k = 0; k < females.length; k++) {

            if (predators[i].intersects(females[k])) {
                females.splice(k, 1);
                predators[i].r = predators[i].r + 2;
            }
        }
    }

    // Males and females reproduce
    for (let j = 0; j < males.length; j++) {
        for (let k = 0; k < females.length; k++) {
            if (males[j].cirIntersects(females[k])) {

                for (let j = 0; j < offspring; j++) {
                    let x = random(width);
                    let y = random(height);
                    let r = random(20);

                    m = new Male(x, y, r);

                    males.splice(j, 1, m);
                }
                offspring++;
            }
        }
    }
    // Limits the number of offspring
    if (offspring >= 10) {
        offspring = 0;
    }

    // Males eat food and grow
    for (let j = 0; j < males.length; j++) {
        for (let l = 0; l < foods.length; l++) {

            if (males[j].triIntersects(foods[l])) {
                foods.splice(l, 1);
                males[j].r = males[j].r + 1;
            }
        }
    }

    // Females eat food and grow
    for (let k = 0; k < females.length; k++) {
        for (let l = 0; l < foods.length; l++) {

            if (females[k].triIntersects(foods[l])) {
                foods.splice(l, 1);
                females[k].r = females[k].r + 1;
            }
        }
    }
}
