// Aim: Fire simulator but the particles are fire GIFs

let fires = [];

let gifs = [];

function preload() {
    let url = "https://api.giphy.com/v1/gifs/search?&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=fire"
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for(let i = 0; i < 10; i++) {
        gifs[i] = loadImage(giphy.data[i].images.original.url);
    }
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);

    for (let i = 0; i < 10; i++) {
        let f = new Fire();
        fires.push(f);
    }

    for (let i = 0; i < fires.length; i++) {
        fires[i].update();
        fires[i].show();
    }

    fires = fires.filter(p => !p.finished());
}


class Fire {
    constructor() {
        this.x = 300;
        this.y = 380;
        this.vx = random(-1, 1);
        this.vy = random(-5, 1);
        this.col = random(256);
        this.alpha = 255;
        this.gif = random(gifs);
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        image(this.gif, this.x, this.y, 16, 16);
    }
}
