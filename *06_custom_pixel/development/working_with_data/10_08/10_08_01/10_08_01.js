// 10.8: Wordnik API and JavaScript

// https://www.youtube.com/watch?v=YsgdUaOrFnQ&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=8

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let word = "rainbow";

let link;

function setup() {
    noCanvas();
    link = createA('#', word);
    link.mousePressed(askDict);
}

function askDict() {
    loadJSON(url + word, gotData);
}

function gotData(data) {
    let index1 = floor(random(0, data.length));
    let index2 = floor(random(0, data[index1].meanings.length));
    let index3 = floor(random(0, data[index1].meanings[index2].synonyms.length));
    word = data[index1].meanings[index2].synonyms[index3];
    link.html(word);
}
