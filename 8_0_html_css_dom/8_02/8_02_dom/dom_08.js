// Use DOM elements on p5.js reference

// https://p5js.org/reference/#group-DOM

let vid;

function setup() {
    createCanvas(300, 300);

    aud = createAudio(['03 Zombie.mp3']);

    playBtn = createButton('Play');
    playBtn.position(30, 40);
    playBtn.mouseClicked(playAud);

    pauseBtn = createButton('Pause');
    pauseBtn.position(150, 40);
    pauseBtn.mouseClicked(pauseAud);
}

function playAud() {
    aud.play();
}

function pauseAud() {
    aud.pause();
}
