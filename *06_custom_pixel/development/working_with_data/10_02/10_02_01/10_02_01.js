// 10.2: What is JSON? Part I

// https://www.youtube.com/watch?v=_NFkzw6oFtQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=2

let flower;

function preload() {
    flower = loadJSON("flower.json");
}

function setup() {
    createCanvas(400, 400);

    // flower = {
    //     name: "sunflower",
    //     col: color(200, 220, 0)
    // }
}

function draw() {
    background(0);

    fill(flower.r, flower.g, flower.b);
    text(flower.name, 10, 50);

}
