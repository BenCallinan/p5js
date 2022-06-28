// Object Orientated Programming 7

// Aim: Create several bubbles that change colour when clicked

// Last worked on Friday 21 January 2022, 7:10am

let bubble1;
let bubble2;
let rectangle1;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(200, 200, 40, 255, 0, 0);
    bubble2 = new Bubble(400, 200, 20, 0, 255, 0);
    rectangle1 = new Rectangle(100, 100, 50, 50);
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    rectangle1.show();
}
