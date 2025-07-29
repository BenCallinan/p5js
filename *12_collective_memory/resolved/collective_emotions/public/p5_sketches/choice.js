function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(32);
  fill(245);
  textAlign(CENTER);
  text('Choose a colour', width / 2, width / 20);

  redRect = new Rectangle(
    width / 20,
    width / 10,
    width / 4.75,
    width / 4.75,
    255,
    51,
    51
  );
  redRect.show();
  rectText(redRect, ['Excitement', 'Strength', 'Love', 'Energy']);

  orangeRect = new Rectangle(
    width / 20 + width / 4.5,
    width / 10,
    width / 4.75,
    width / 4.75,
    255,
    153,
    51
  );
  orangeRect.show();
  rectText(orangeRect, ['Confidence', 'Success', 'Bravery', 'Sociability']);

  yellowRect = new Rectangle(
    width / 20 + width / 2.25,
    width / 10,
    width / 4.75,
    width / 4.75,
    253,
    218,
    13
  );
  yellowRect.show();
  rectText(yellowRect, ['Creativity', 'Happiness', 'Warmth', 'Cheer']);

  greenRect = new Rectangle(
    width / 20 + width / 1.5,
    width / 10,
    width / 4.75,
    width / 4.75,
    80,
    200,
    120
  );
  greenRect.show();
  rectText(greenRect, ['Nature', 'Healing', 'Freshness', 'Quality']);

  blueRect = new Rectangle(
    width / 20,
    width / 10 + width / 4.5,
    width / 4.75,
    width / 4.75,
    51,
    153,
    255
  );
  blueRect.show();
  rectText(blueRect, ['Trust', 'Peace', 'Loyalty', 'Competence']);

  pinkRect = new Rectangle(
    width / 20 + width / 4.5,
    width / 10 + width / 4.5,
    width / 4.75,
    width / 4.75,
    255,
    153,
    255
  );
  pinkRect.show();
  rectText(pinkRect, ['Compassion', 'Sincerity', 'Sophistication', 'Sweet']);

  purpleRect = new Rectangle(
    width / 20 + width / 2.25,
    width / 10 + width / 4.5,
    width / 4.75,
    width / 4.75,
    178,
    102,
    255
  );
  purpleRect.show();
  rectText(purpleRect, ['Royalty', 'Luxury', 'Spirituality', 'Ambition']);

  brownRect = new Rectangle(
    width / 20 + width / 1.5,
    width / 10 + width / 4.5,
    width / 4.75,
    width / 4.75,
    153,
    76,
    0
  );
  brownRect.show();
  rectText(brownRect, ['Dependable', 'Rugged', 'Trustworthy', 'Simple']);
}

function rectText(rect, words) {
  fill(245);
  textAlign(RIGHT);
  textStyle(BOLD);
  textSize(rect.w / 11);
  let lineHeight = textAscent() + textDescent();
  for (let i = 0; i < words.length; i++) {
    text(
      words[i],
      rect.x + rect.w / 1.1,
      rect.y +
        rect.h / 1.5 -
        ((words.length - 1) * lineHeight) / 2 +
        i * lineHeight
    );
  }
}

function fetchReq() {
  fetch('/emotions/show', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emotion),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response);
      return response.json();
    })
    .then((emotion) => {
      console.log('Success:', emotion);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function mouseClicked() {
  emotion = null;

  if (redRect.isClicked(mouseX, mouseY)) {
    console.log('Red rectangle clicked');
    emotion = {
      xPosition: int(random(0, windowWidth / 4)),
      yPosition: int(random(0, windowHeight / 2)),
      red: 255,
      green: 51,
      blue: 51,
    };
  } else if (orangeRect.isClicked(mouseX, mouseY)) {
    console.log('Orange rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 4, windowWidth / 2)),
      yPosition: int(random(0, windowHeight / 2)),
      red: 255,
      green: 153,
      blue: 51,
    };
  } else if (yellowRect.isClicked(mouseX, mouseY)) {
    console.log('Yellow rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 2, windowWidth / 1.5)),
      yPosition: int(random(0, windowHeight / 2)),
      red: 253,
      green: 218,
      blue: 13,
    };
  } else if (greenRect.isClicked(mouseX, mouseY)) {
    console.log('Green rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 1.5, windowWidth)),
      yPosition: int(random(0, windowHeight / 2)),
      red: 80,
      green: 200,
      blue: 120,
    };
  } else if (blueRect.isClicked(mouseX, mouseY)) {
    console.log('Blue rectangle clicked');
    emotion = {
      xPosition: int(random(0, windowWidth / 4)),
      yPosition: int(random(windowHeight / 2, windowHeight)),
      red: 51,
      green: 153,
      blue: 255,
    };
  } else if (pinkRect.isClicked(mouseX, mouseY)) {
    console.log('Pink rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 4, windowWidth / 2)),
      yPosition: int(random(windowHeight / 2, windowHeight)),
      red: 255,
      green: 153,
      blue: 255,
    };
  } else if (purpleRect.isClicked(mouseX, mouseY)) {
    console.log('Purple rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 2, windowWidth / 1.5)),
      yPosition: int(random(windowHeight / 2, windowHeight)),
      red: 178,
      green: 102,
      blue: 255,
    };
  } else if (brownRect.isClicked(mouseX, mouseY)) {
    console.log('Brown rectangle clicked');
    emotion = {
      xPosition: int(random(windowWidth / 1.5, windowWidth)),
      yPosition: int(random(windowHeight / 2, windowHeight)),
      red: 153,
      green: 76,
      blue: 0,
    };
  }

  if (emotion) {
    fetchReq();
    location.href = '/emotions/show';
  }
}
