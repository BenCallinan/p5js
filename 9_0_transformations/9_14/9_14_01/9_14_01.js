// 9.14: Loading Animation

// https://www.youtube.com/watch?v=UWgDKtvnjIU&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=14

let bonds = [];
let totalBonds = 48;
let loading = true;
let counter = 0;

function showBond(filename) {
    loadImage(filename, loadBond);

    function loadBond(image) {
        console.log(filename);
        bonds.push(image);
        counter++;
        if (counter == totalBonds) {
            loading = false;
        }
    }
}

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < totalBonds; i++) {
        showBond('bonds/bond_' + i + '.jpg');
    }

}

function draw() {
    background(50);

    if (loading) {

        for (let i = 0; i < 10; i ++) {
            stroke(230, 190, 60, random(100));
            strokeWeight(3);
            noFill();
            ellipse(random(190, 210), random(190, 210), 400, 400);
        }

        noStroke();
        fill(230, 190, 60, random(100));
        let w = 400 * counter / totalBonds;
        ellipse(200, 200, w, 400);
    } else {
        for (let i = 0; i < totalBonds; i++) {
            image(bonds[i], 0, 0);
        }
    }
}
