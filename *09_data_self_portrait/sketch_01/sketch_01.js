// Aim: Visualise COVID Rapid Antigen Test (RAT) results for 2022

let table;
let dates;
let labels;
let t = 0;

function preload() {
    table = loadTable('rat_record.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, 300);
    background(155);

    // Number of rows
    console.log(table.getRowCount() + ' total rows in table');

    // Number of columns
    console.log(table.getColumnCount() + ' total columns in the table');

    // Date Column
    console.log(table.getColumn('Date'));

    dates = table.getColumn('Date');
    labels = table.getColumn('Date');
    
    for (let i = 0; i < table.getRowCount(); i++) {
        let val = table.getNum(i, 'Date');
        let xpos = 10 + (i * 10);
        let ypos = 150;

        strokeWeight(5);
        point(xpos, ypos);

        // text(xpos, 0, 0);

        push();
        translate(i * 40 + 20, height - 1 - dates[i] * t - 10);
        rotate(radians(-45));
        fill(0, 200, 220);
        text(labels[i], 0, 0);
        pop();
    }

}