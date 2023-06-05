// 10.10: The Giphy API and JavaScript

// https://www.youtube.com/watch?v=mj8_w11MvH8&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=10

// api.giphy.com/v1/gifs/

// 3Q17PY2B2je7TxVFmifXYCxO6g82vtJI

let api = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI";
let query = "&q=rainbow";

function setup() {
    noCanvas();
    let url = api + apiKey + query;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (let i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url, "gif");
    }
}