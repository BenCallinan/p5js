// 9.14: Loading Animation

// https://www.youtube.com/watch?v=UWgDKtvnjIU&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=14

let songs = [];
let totalSongs = 10;
let angle = 0;
let loading = true;
let counter = 0;

function playSong(filename) {
    loadSound(filename, soundLoaded);

    function soundLoaded(sound) {
        console.log(filename);
        songs.push(sound);
        counter++;
        if (counter == totalSongs) {
            loading = false;
        }
    }
}

function setup() {
    createCanvas(300, 300);
    for (var i = 0; i < totalSongs; i++) {
        playSong('Bad Girls ' + i + '.mp3');
    }
}

function draw() {
    background(51);

    if (loading) {

        stroke(255);
        noFill();
        rect(10, 10, 200, 20);

        noStroke();
        fill(255, 100);
        let w = 200 * counter / totalSongs;
        rect(10, 10, w, 20);

        translate(width/2, height/2);
        rotate(angle);
        strokeWeight(4);
        stroke(255);
        line(0, 0, 100, 0);
        angle += 0.1;
    } else {
        background(0, 255, 0);
    }
}
