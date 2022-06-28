function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(192); 

    stroke('purple');
    strokeWeight(5);

    rect(225, 225, 150, 150);

    ellipse(85, 85, 125, 125);

    circle(175, 175, 50);

    line(300, 0, 300, 399);

    quad(53, 46, 101, 15, 84, 78, 45, 91);

    square(235, 220, 55);

    triangle(145, 275, 173, 220, 201, 275);

    point(60, 50);
    point(115, 50);
    point(115, 105);
    point(60, 105);
}
