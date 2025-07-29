let originalWidth, originalHeight;
let startTime;
let textOpacity = 255;

function setup() {
  originalWidth = windowWidth;
  originalHeight = windowHeight;
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  background(0);

  textSize(width / 60);
  fill(245);
  textAlign(RIGHT);
  text('< Back', width / 15, height / 15);

  const elapsedTime = millis() - startTime;
  if (elapsedTime < 5000) {
    textOpacity = map(elapsedTime, 2500, 5000, 255, 0);
  } else {
    textOpacity = 0;
  }

  const refSize = min(windowWidth, windowHeight);

  for (let emotion of emotions) {
    fill(emotion.red, emotion.green, emotion.blue);
    const scaledX = (emotion.xPosition / originalWidth) * windowWidth;
    const scaledY = (emotion.yPosition / originalHeight) * windowHeight;
    ellipse(scaledX, scaledY, refSize / 50, refSize / 50);

    // Update positions with random movement
    if (emotion.red === 255 && emotion.green === 51 && emotion.blue === 51) {
      // Limit red ellipses to the top-left quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        0,
        originalWidth / 4
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        0,
        originalHeight / 2
      );
    } else if (
      emotion.red === 255 &&
      emotion.green === 153 &&
      emotion.blue === 51
    ) {
      // Limit orange ellipses to the top-left quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 4,
        originalWidth / 2
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        0,
        originalHeight / 2
      );
    } else if (
      emotion.red === 253 &&
      emotion.green === 218 &&
      emotion.blue === 13
    ) {
      // Limit yellow ellipses to the top-right quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 2,
        originalWidth / 1.5
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        0,
        originalHeight / 2
      );
    } else if (
      emotion.red === 80 &&
      emotion.green === 200 &&
      emotion.blue === 120
    ) {
      // Limit green ellipses to the top-right quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 1.5,
        originalWidth
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        0,
        originalHeight / 2
      );
    } else if (
      emotion.red === 51 &&
      emotion.green === 153 &&
      emotion.blue === 255
    ) {
      // Limit blue ellipses to the bottom-left quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        0,
        originalWidth / 4
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        originalHeight / 2,
        originalHeight
      );
    } else if (
      emotion.red === 255 &&
      emotion.green === 153 &&
      emotion.blue === 255
    ) {
      // Limit pink ellipses to the bottom-left quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 4,
        originalWidth / 2
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        originalHeight / 2,
        originalHeight
      );
    } else if (
      emotion.red === 178 &&
      emotion.green === 102 &&
      emotion.blue === 255
    ) {
      // Limit purple ellipses to the bottom-right quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 2,
        originalWidth / 1.5
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        originalHeight / 2,
        originalHeight
      );
    } else if (
      emotion.red === 153 &&
      emotion.green === 76 &&
      emotion.blue === 0
    ) {
      // Limit brown ellipses to the bottom-right quarter of the canvas
      emotion.xPosition = constrain(
        emotion.xPosition + random(-1, 1),
        originalWidth / 1.5,
        originalWidth
      );
      emotion.yPosition = constrain(
        emotion.yPosition + random(-1, 1),
        originalHeight / 2,
        originalHeight
      );
    }
  }
  textSize(width / 30);
  fill(245, textOpacity);
  textAlign(CENTER);
  text('Your colour has been added to the world', width / 2, height / 2);
}

function mouseClicked() {
  const backTextX = width / 15;
  const backTextY = height / 15;
  const backTextSize = width / 60;

  if (
    mouseX > backTextX - textWidth('< Back') &&
    mouseX < backTextX &&
    mouseY > backTextY - backTextSize &&
    mouseY < backTextY
  ) {
    window.location.href = '/emotions/choice';
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
