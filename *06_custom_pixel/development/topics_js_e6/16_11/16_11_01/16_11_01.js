// 16.11: Promises Part 1

// https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=11

let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?api_key=7h2k0tlhvvthh4ys0inhgw32lc14uld68b50fstq70vxao2yr";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=3Q17PY2B2je7TxVFmifXYCxO6g82vtJI&q=";

function setup() {
    noCanvas();

    fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
        createP(json.word);
        return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => createImg(json.data[0].images['fixed_height_small'].url, "giphy"))
    .catch(err => console.log(err));
}
