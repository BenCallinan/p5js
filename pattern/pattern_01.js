// https://stackoverflow.com/questions/51818117/p5-js-checkers-chessboard-draw-with-nested-loop

const WIDTH = 400;
    const HEIGHT = 400;
    const ROWS = 10;
    const COLS = 10;
    var squareSize = WIDTH/10;

    function setup() {
        createCanvas(400, 400);
    }

    function draw() {
        background(220);
        drawBoard();
    }

    function drawBoard() {
        for(var i = 0; i < ROWS; i++)
            {
                for(var j = 0; j < COLS; j++)
                    {
                        if((i+j) % 2 == 0)
                        {
                        fill(255, 0, 0);
                        }
                        else
                            {
                                fill(0, 0, 255);
                            }
                        rect( i * squareSize, j * squareSize, squareSize, squareSize);
                    }
                }
        noLoop();
    }
