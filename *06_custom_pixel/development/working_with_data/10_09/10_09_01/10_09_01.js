// 10.9: New York Times API and JavaScript

// https://www.youtube.com/watch?v=IMne3LY4bks&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=9

let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rainbow&api-key=3E0cczF10rcPnnqCvwDQquV7mtnRvGK6";

function setup() {
    noCanvas();

    loadJSON(url, gotData);
}

function gotData(data) {
    let articles = data.response.docs;

    for (let i = 0; i < articles.length; i++) {
        createElement('h1', articles[i].headline.main);
        createP(articles[i].snippet);
    }

    console.log(data.response.docs[0].headline.main);
}

function draw() {

}
