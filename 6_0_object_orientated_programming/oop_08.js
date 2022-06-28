// Object Orientated Programing 8

// Aim: Create a button that changes colour when pressed

let rectangle1;
let rectangle2;

function setup() {
    createCanvas(500, 500);

    rectangle1 = new Rectangle(250, 150, 100, 100, 255, 0, 0);
    rectangle2 = new Rectangle(250, 350, 100, 100, 0, 255, 0);
}

function draw() {
    background(0);

    rectangle1.show();
    rectangle1.click();
    rectangle2.show();
    rectangle2.click();
}
