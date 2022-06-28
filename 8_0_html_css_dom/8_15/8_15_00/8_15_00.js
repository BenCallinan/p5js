// 8.15: Drag and Drop a File

// https://www.youtube.com/watch?v=o4UmGrPst_c&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=15

var dropzone;

function setup() {
    createCanvas(200, 200);
    background(0);

    dropzone = select('#dropzone')
    dropzone.dragOver(highlight);
    dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
}

function gotFile(file) {
    createP(file.name + " " + file.size);
    var img = createImg(file.data, 'image');
    img.size(100, 100);
}

function highlight() {
    dropzone.style('background-color', '#ccc');
}

function unhighlight() {
    dropzone.style('background-color', '#fff');
}
