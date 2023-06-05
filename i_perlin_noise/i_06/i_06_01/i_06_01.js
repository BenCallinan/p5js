// I.6: noiseDetail() - Perlin Noise and p5.js Tutorial

// https://www.youtube.com/watch?v=D1BBj2VaBl4&list=PLRqwX-V7Uu6bgPNQAdxQZpJuJCjeOr7VD&index=5

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
    updatePixels();
    //noiseDetail(500);
    noiseDetail(4, 0.9);
}
