// basic arithmetic 
function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b;
} 

function divide (a, b) {
    return a / b;
}

// call +, - ,* ,/ function depend on operator
function operate (operator, number1, number2) {
    switch (operator) {
        case "+":
            return add(number1, number2);
        
        case "-":
            return subtract(number1, number2);
        
        case "*":
            return multiply(number1, number2);

        case "/":
            return divide(number1,number2);
    }
}

// display
let displayNumber = 0;

const displayNumberElement = document.querySelector(".display-screen");

displayNumberElement.textContent = displayNumber;

// link number button with display screen
const calculatorButtons = document.querySelectorAll("button");

calculatorButtons.forEach(function(button) {
    button.addEventListener("click", saveNumber);
});

function saveNumber() {
    displayNumber = this.innerHTML;
    displayNumberElement.textContent = displayNumber;
}

