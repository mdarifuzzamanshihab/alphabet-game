
//play button show playground and hide home screen
function play() {
    hideElement('home');
    showElement('playground');

    gameStart();
}
// its for play again button

function play2() {
    hideElement('home');
    hideElement('final-score')
    //remove color
    const expectedWord = getInnerText('expected-word')
    const expectedLower = expectedWord.toLowerCase();
    removeHighlightedColor(expectedLower);
    
    showElement('playground');
    gameStart();
    const elements = elementById('current-life');
    elements.innerText = 5;
    const elements2 = elementById('current-score');
    elements2.innerText = 0;




}


function gameStart() {
    const newAlphabet = randomAlphabet();
    const text = elementById('expected-word');
    text.innerText = newAlphabet;
    setHighlightedColor(newAlphabet);
}





//Add keypress function
function keypress(event) {
    const playerPressed = event.key;
    //if player press escape
    if (playerPressed === "Escape") {
        hideElement('playground');
        showElement('final-score');
    }
    //score update
    const expectedWord = getInnerText('expected-word')
    const expectedLower = expectedWord.toLowerCase();
    if (playerPressed === expectedLower) {

        const scoreText = elementById('current-score');
        const innerText = scoreText.innerText;
        const scoreNumber = parseInt(innerText);
        const score = scoreNumber + 1;
        scoreText.innerText = score;
        removeHighlightedColor(expectedLower);
        gameStart();

    }
    else {
        const lifeText = elementById('current-life');
        const lifeInner = lifeText.innerHTML;
        const lifeScore = parseInt(lifeInner);
        const life = lifeScore - 1;
        lifeText.innerText = life;
        gameOver();
        scoreUpdate()
    }


}

// game over 
function gameOver() {
    const selectLife = getInnerText('current-life');
    const life = parseInt(selectLife);
    if (life === 0) {
        hideElement('playground');
        showElement('final-score');
        //remove color

    }
}

//add keyboard event
document.addEventListener('keyup', keypress)

// take score to final score
function scoreUpdate() {
    const inner = getInnerText('current-score')
    const final = elementById('final-result');
    final.innerText = inner;
    return final;
}