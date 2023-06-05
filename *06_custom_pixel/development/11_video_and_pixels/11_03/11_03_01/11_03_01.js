// 11.3: The Pixel Array - p5.js Tutorial

// https://www.youtube.com/watch?v=nMUMZ5YRxHI&list=PLRqwX-V7Uu6aKKsDHZdDvN6oCJ2hRY_Ig&index=3


function setup() {
    createCanvas(320, 240);
    pixelDensity(1);
}

function draw() {
    background(51);

    loadPixels();

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;

            // pixels[index] = x;
            // pixels[index + 1] = 0;
            // pixels[index + 2] = y;
            // pixels[index + 3] = 255;

            pixels[index] = x;
            pixels[index + 1] = random(255);
            pixels[index + 2] = y;
            pixels[index + 3] = 255;

        }
    }

    updatePixels();
}
