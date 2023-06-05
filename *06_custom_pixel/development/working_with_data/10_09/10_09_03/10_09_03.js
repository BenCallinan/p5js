// 10.9: New York Times API and JavaScript

// https://www.youtube.com/watch?v=IMne3LY4bks&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=9

let button;

let api = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=";
let facet1 = "&facet_field=day_of_week&facet=true&begin_date="
let facet2 = "0101&end_date="
let facet3 = "1231"
let apikey = "&api-key=3E0cczF10rcPnnqCvwDQquV7mtnRvGK6";

function setup() {
    noCanvas();

    input = createInput('Type a word');
    input.position(10, 10);

    inputYear = createInput('Type a year e.g. 2022');
    inputYear.position(10, 50);

    let button = createButton('submit');
    button.mousePressed(wordAsk);
    button.position(10, 90);
}

function wordAsk() {
    loadJSON(
        api + input.value()
        + facet1 + inputYear.value() + facet2 + inputYear.value() + facet3
        + apikey,
        gotData);
}

function gotData(data) {
    let articles = data.response.docs;

    for (let i = 0; i < articles.length; i++) {
        head = createElement('h1', articles[i].headline.main);
        head.style('font-size', '24px');
        head.position(10, 120 + i * 100);

        year = createP(articles[i].pub_date);
        year.position(10, 155 + i * 100);

        snip = createP(articles[i].snippet);
        snip.position(10, 180 + i * 100);


    }

    console.log(data.response.docs[0].headline.main);
}
