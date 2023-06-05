// 10.9: New York Times API and JavaScript

// https://www.youtube.com/watch?v=IMne3LY4bks&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=9

let button;

let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
let apikey = "&api-key=3E0cczF10rcPnnqCvwDQquV7mtnRvGK6";

function setup() {
    noCanvas();

    input = createInput('Type a word');
    input.position(10, 10);

    let button = createButton('submit');
    button.mousePressed(wordAsk);
    button.position(205, 10);
}

function wordAsk() {
    loadJSON(api + input.value() + apikey, gotData);
}

function gotData(data) {
    let articles = data.response.docs;

    for (let i = 0; i < articles.length; i++) {
        head = createElement('h1', articles[i].headline.main);
        head.style('font-size', '24px');
        head.position(10, 60 + i * 80);

        snip = createP(articles[i].snippet);
        snip.position(10, 90 + i * 80);
    }

    console.log(data.response.docs[0].headline.main);
}
