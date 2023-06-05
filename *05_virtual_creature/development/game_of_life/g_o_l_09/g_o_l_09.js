// 3D game of life using WEBGL

// Variables for game of life
let scl;

let cols;
let rows;
let plane;

let grid;
let next;

// Variables for camera
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let hgt = 20;

function setup() {
    createCanvas(600, 400, WEBGL);

    scl = 30;

    cols = floor(width / scl);
    rows = floor(height / scl);
    plane = floor(600 / scl);

    grid = new Array(cols);
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
        for (let j = 0; j < plane; j++) {
            grid[i][j] = new Array(plane);
        }
    }

    next = new Array(cols);
    for (let i = 0; i < cols; i++) {
        next[i] = new Array(rows);
        for (let j = 0; j < plane; j++) {
            next[i][j] = new Array(plane);
        }
    }
    init();

    frameRate(2);

    // create sliders
	for (let i = 0; i < 6; i++) {
		if (i === 2) {
			sliderGroup[i] = createSlider(10, 400, 200);
		} else {
			sliderGroup[i] = createSlider(-400, 400, 0);
		}
		h = map(i, 0, 6, 5, 85);
		sliderGroup[i].position(10, height + h);
		sliderGroup[i].style('width', '80px');
	}
}

function draw() {
    background(0);

    generate();

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < plane; k++) {

                let x = i * scl;
                let y = j * scl;
                let z = k * scl;

                if ((grid[i][j][k] == 1)) {
                    push();
                    normalMaterial();
                    translate(x - 290, y - 190, z - 800);
                    pointLight(250, 250, 250, width / 2, height / 2);
                    fill(100, 120, 150);
                    noStroke();
                    box(scl / 1);
                    pop();
                }
            }
        }
    }

    // assigning sliders' value to each paramaters
	X = sliderGroup[0].value();
	Y = sliderGroup[1].value();
	Z = sliderGroup[2].value();
	centerX = sliderGroup[3].value();
	centerY = sliderGroup[4].value();
	centerZ = sliderGroup[5].value();
	camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
}

function init() {
    for (let i = 0; i < cols; i ++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < plane; k++) {
                grid[i][j][k] = floor(random(2));
                next[i][j][k] = 0;
            }
        }
    }
}

function generate() {

    for (let x = 1; x < cols - 1; x++) {
        for (let y = 1; y < rows - 1; y++) {
            for (let z = 1; z < plane -1 ; z++) {

                let neigh = 0;
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        for (let k = -1; k <= 1; k++) {
                            neigh += grid[x + i][y + j][z + k];
                        }
                    }
                }

                neigh -= grid[x][y][z];

                if ((grid[x][y][z] == 1) && (neigh < 4)) {
                    next[x][y][z] = 0;
                } else if ((grid[x][y][z] == 1) && (neigh > 6)) {
                    next[x][y][z] = 0;
                } else if ((grid[x][y][z] == 0) && (neigh == 4)) {
                    next[x][y][z] = 1;
                } else {
                    next[x][y][z] = grid[x][y][y];
                }
            }
        }
    }
    let temp = grid;
    grid = next;
    next = temp;
}
