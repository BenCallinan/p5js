// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let button;
let checkbox;

function setup() {
    createCanvas(100, 100);
    background(0);
    button = createButton('click me');
    button.position(10, 85);
    button.mousePressed(changeBG);

    checkbox = createCheckbox('label', false);
    checkbox.changed(myCheckedEvent);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(10, 10);
    sel.option('pear');
    sel.option('kiwi');
    sel.option('grape');
    sel.selected('kiwi');
    sel.changed(mySelectEvent);
}

function changeBG() {
    let val = random(255);
    background(val);
}

function myCheckedEvent() {
    if (checkbox.checked()) {
        console.log('Checking!');
    } else {
        console.log('Unchecking!');
    }
}

function mySelectEvent() {
    let item = sel.value();
    background(200);
    text('It is a '+ item + '!', 50, 50);
}
