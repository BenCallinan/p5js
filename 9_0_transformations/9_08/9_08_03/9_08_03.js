// Aim: Create a field of circles that change colour when they collide

let rounds = [];

function setup() {
    createCanvas(640, 360)

        while (rounds.length < 10) {
            let round = {
                x: random(width),
                y: random(height),
                r: 36
            };

        let overlapping = false;
        for (let j = 0; j < rounds.length; j++) {
            let round2 = rounds[j];
            let d = dist(round.x, round.y, round2.x, round2.y);
            if (d < round.r + round2.r) {
                overlapping = true;
                break;
            }
        }

        if (!overlapping) {
            rounds.push(round);
        }
    }

    for (let i = 0; i < rounds.length; i++) {
        fill(255, 0, 150, 100);
        noStroke();
        ellipse(
            rounds[i].x,
            rounds[i].y,
            rounds[i].r*2,
            rounds[i].r*2
        );
    }
}
