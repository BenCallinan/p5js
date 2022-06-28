// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

function setup() {
    createCanvas(100, 100);
    background('grey');

    let inp = createInput('');
    inp.position(0, 0);
    inp.size(100);
    inp.input(myInputEvent);
}

function myInputEvent() {
    console.log('you are typing: ', this.value());
    text(this.value(), 10, 50);
}
