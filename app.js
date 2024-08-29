function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        addToHistory(display.innerText + ' = ' + result);
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    const historyList = document.getElementById('history-list');
    const newEntry = document.createElement('li');
    newEntry.innerText = entry;
    historyList.prepend(newEntry);
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

function setTheme(theme) {
    document.body.className = theme;
}
