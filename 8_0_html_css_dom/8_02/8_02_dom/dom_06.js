// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let input;
let img;

function setup() {
    input = createFileInput(handleFile);
    input.position(0, 0);
}

function draw() {
    background(255);
    if (img) {
        image(img, 0, 20, width, height);
    }
}

function handleFile(file) {
    print(file);
    if(file.type === 'image') {
        img = createImg(file.data, '');
        img.hide();
    } else {
        img = null;
    }
}
