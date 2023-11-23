let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function resetDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
