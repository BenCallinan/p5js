// 8.15: Drag and Drop a File

// https://www.youtube.com/watch?v=o4UmGrPst_c&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=15

function setup() {
    canvas = createCanvas(200, 200);
    background(0);

    canvas.drop(gotFile);
}

function gotFile(file) {
    createP(file.name + " " + file.size);
    var img = createImg(file.data, 'image');
    img.hide();

    image(img, 0, 0, 200, 200);
}
