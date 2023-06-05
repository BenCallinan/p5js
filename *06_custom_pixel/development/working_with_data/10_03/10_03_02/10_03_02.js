// 10.3: What is JSON? Part II

// https://www.youtube.com/watch?v=118sDpLOClw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=3

let data;

function preload() {
    data = loadJSON("planets.json");
}


function setup() {
    createCanvas(800, 600);
    background(0);

    let planets = data.planets;

    for (let i = 0; i < planets.length; i++) {

        let moons = planets[i].moons;
        for (let j = 0; j < moons.length; j++) {
            ellipse(i * 75, 300, j, j);

            console.log(j);
        }
    }
}
