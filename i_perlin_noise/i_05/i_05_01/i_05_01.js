// I.5: 2D Noise - Perlin Noise and p5.js Tutorial

// https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=5

let inc = 0.01;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
}

function draw() {
    let yoff = 0;

    loadPixels();

    for (let y = 0; y < height; y++) {
        let xoff = 0;
        for (let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            let r = noise(xoff, yoff) * 255;
            pixels[index+0] = r;
            pixels[index+1] = r;
            pixels[index+2] = r;
            pixels[index+3] = 255;

            xoff += inc;
        }
        yoff += inc;
    }

    // for (let x = 0; x < width; x++) {
    //     for (let y = 0; y < height; y++) {
    //         let index = (x + y * width) * 4;
    //         let r = noise(xoff) * 255;
    //         pixels[index+0] = r;
    //         pixels[index+1] = r;
    //         pixels[index+2] = r;
    //         pixels[index+3] = 255;
    //
    //         xoff += 0.01;
    //     }
    // }
    updatePixels();
    //noLoop();
}
