const display = document.getElementById("display")

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = eval(display.value); // Evaluate the expression in the display
        display.value = Math.round(result); // Round the result to the nearest integer
    } catch (error) {
        alert("Invalid Expression"); // Handle invalid expressions
    }
}
