// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let vid;

function setup() {
    createCanvas(300, 300);

    vid = createVideo(['happy_song.mp4']);
    vid.position(20, 0);
    vid.size(300, 300);

    playBtn = createButton('Play');
    playBtn.position(30, 40);
    playBtn.mouseClicked(playVid);

    pauseBtn = createButton('Pause');
    pauseBtn.position(150, 40);
    pauseBtn.mouseClicked(pauseVid);
}

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
