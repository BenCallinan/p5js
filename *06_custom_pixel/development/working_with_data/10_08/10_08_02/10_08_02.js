// 10.8: Wordnik API and JavaScript

// https://www.youtube.com/watch?v=YsgdUaOrFnQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=8

// Synonym Soup

let input;
let words;

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function setup() {
    canvas = createCanvas(600, 600);
    canvas.position(10, 45);

    input = createInput('Type a word');
    input.position(10, 10);

    let button = createButton('submit');
    button.mousePressed(wordAsk);
    button.position(205, 10);
}

function wordAsk() {
    loadJSON(url + input.value(), gotData);
}

function gotData(data) {
    words = data;
    console.log(data);
}

function draw() {
    background(255);

    randomSeed(1);

    if (words) {
        for (i = 0; i < words[0].meanings[0].synonyms.length; i++) {

            fill(random(255), random(255), random(255));
            textSize(20);
            text(words[0].meanings[0].synonyms[i], random(width) / 2, random(height) / 2);
        }
    }
}
