// https://www.section.io/engineering-education/getting-started-with-data-visualization-using-p5js/

let data;
let values;
let labels;
let t = 0;

function preload() {
    data = loadTable('data.csv', 'csv', 'header');
}

function setup() {
    createCanvas(800, 600);

    values = data.getColumn("Mass (Tt)");
    labels = data.getColumn("Component");
}

function draw() {
    background(255);

    for (let i = 0; i < values.length; i++) {
        rect(i * 40, height - 1, 40, - values[i] * t)
        fill(0, 200, 220);

        push();
        translate(i * 40 + 20, height - 1 - values[i] * t - 10);
        rotate(radians(-45));
        fill(0, 200, 220);
        text(labels[i], 0, 0);
        pop(); 
    }

    if (t < 40) {
        t = t + 1;
    }
}