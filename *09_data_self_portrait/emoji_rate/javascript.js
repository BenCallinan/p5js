const emFaces = document.querySelectorAll('.image');
const todayFeel = document.querySelector('.restext');
const faceResult = document.querySelector('.resemoji');
const emResult = document.querySelector('.result');
const button = document.createElement('button');

let showResult = false;

for (let i = 0; i < emFaces.length; i++) {
    emFace = emFaces[i];
    emFace.addEventListener('click', function() {
        if (!showResult) {
            todayFeel.append(document.createTextNode(`Today you are feeling ${[i + 1]}/10`));
            const emResult = document.createElement('img');
            emResult.src = `images/${[i + 1]}_emoji.png`;
            faceResult.append(emResult);
  
            const button = document.createElement('button');
            button.textContent = 'OK';
            document.body.append(button);
            showResult = true;

            button.addEventListener('click', function() {
                if (showResult = true) {
                    todayFeel.textContent = '';
                    emResult.style.display = 'none';
                    button.remove();
                    showResult = false;
                }
            });
        }
    });
}