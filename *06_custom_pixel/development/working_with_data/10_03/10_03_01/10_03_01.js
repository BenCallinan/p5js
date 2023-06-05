// 10.3: What is JSON? Part II

// https://www.youtube.com/watch?v=118sDpLOClw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=3

let data;

function preload() {
    data = loadJSON("birds_antartica.json");
}


function setup() {
    noCanvas();
    //createCanvas(400, 400);
    //let bird = data.birds[1].members[2];

    let birds = data.birds;

    for (let i = 0; i < birds.length; i++) {
        createElement('h1', birds[i].family);

        let members = birds[i].members;
        for (let j = 0; j < members.length; j++) {
            createDiv(members[j]);
        }
    }
}
