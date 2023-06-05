// https://www.section.io/engineering-education/getting-started-with-data-visualization-using-p5js/

let values = ["40", "153", "189", "109", "287", "69", "19", "163"];
let lerpValues = [];
let index = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < values.length; i++) {
        lerpValues.push(0);
    }
}

function draw() {
    background(255);

    noStroke();
    fill(0, 200, 200);
   
    for (i = 0; i < index; i++) {
        let posX = map(i, 0, values.length, 40, width);
        lerpValues[i] = lerp(lerpValues[i], values[i], 0.2);
        rect(posX, height - 20, 40, -lerpValues[i]);
        textAlign(CENTER);
        text(round(lerpValues[i]), posX + 20, height - lerpValues[i] - 30);
    }

    setInterval(function() {
        if (index < values.length) {
            index += 1;
        }
    }, 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}