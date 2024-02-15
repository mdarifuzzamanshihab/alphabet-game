//get element by id
function elementById(element) {
    const elementSelect = document.getElementById(element)
    return elementSelect;
}

//get element innertext
function getInnerText(element) {
    const elementSelect = document.getElementById(element)
    const elementInnertext = elementSelect.innerText;
    return elementInnertext;

}

//set element innertext with id and value

function setElementInnerText(element, value) {
    const selectElement = document.getElementById(element)
    const selectInnerText = selectElement.innerText;
    selectInnerText = value;
    return selectInnerText;
}

//hide and show element by id
function showElement(element) {
    const elementSelect = document.getElementById(element);
    elementSelect.classList.remove('hidden');
}

function hideElement(element) {
    const elementSelect = document.getElementById(element)
    elementSelect.classList.add('hidden');
}


//continue game function

function randomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabets.split('');
    const num1 = Math.random() * 25;
    const num2 = Math.round(num1);
    const index = alphabet[num2];

    return index
}

// set highlightedcolor

function setHighlightedColor(element) {
    const elementSelect = document.getElementById(element)
    elementSelect.classList.add('bg-orange-300');
}
function removeHighlightedColor(element) {
    const elementSelect = document.getElementById(element)
    elementSelect.classList.remove('bg-orange-300');
}
