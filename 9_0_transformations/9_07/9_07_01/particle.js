// 9.7: Drawing Object Trails

// https://www.youtube.com/watch?v=vqE8DMfOajk&list=PLRqwX-V7Uu6ZmA-d3D0iFIvgrB5_7kB8H&index=7

function Particle(x, y) {
    this.x = x;
    this.y = y;

    this.history = [];

    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);

        let v = createVector(this.x, this.y);
        this.history.push(v);

        if (this.history.length > 25) {
            this.history.splice(0, 1);
        }
    }

    this.show = function() {
        stroke(0);
        fill(0, 150);
        ellipse(this.x, this.y, 24, 24);

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            fill(random(255));
            ellipse(pos.x, pos.y, i, i);
        }
    }
}
