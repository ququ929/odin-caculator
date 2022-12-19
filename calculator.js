// a + b = c
let firstNumber; // a
let secondNumber; // b
let equalNumber; // c
let operator; // +
let displayNumber = "0";


// basic arithmetic 
function add(a, b) {
    return +a + +b;
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b;
} 

function divide (a, b) {
    if (b == 0) return "NaN";
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

const displayNumberElement = document.querySelector(".display-screen");

displayNumberElement.textContent = displayNumber;

// link number button with display screen
const calculatorButtons = document.querySelectorAll(".numberButton");

calculatorButtons.forEach(function(button) {
    button.addEventListener("click", saveNumber);
});

function saveNumber() {
    if (displayNumber === "0") {
        displayNumber = this.textContent;
    }

    else {
        let previousNumber = displayNumber;
        displayNumber = previousNumber + this.textContent;
    } 

    displayNumberElement.textContent = displayNumber;
}

// AC button to reset to 0
const ACButton = document.querySelector(".ACButton");

ACButton.addEventListener("click", clean);

function clean() {
    displayNumber = "0"
    firstNumber = 0
    secondNumber = 0
    equalNumber = 0
    displayNumberElement.textContent = displayNumber;
}

// + - * / to save number and call operate function
const operatorButtons = document.querySelectorAll(".operatorButton");

operatorButtons.forEach(button => button.addEventListener("click", operateWith))

function operateWith() {
    firstNumber = displayNumber;
    operator = this.value;
    displayNumber = "0"; // reset
}

// equal button
const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", equalTo)

function equalTo() {
    secondNumber = displayNumber;
    equalNumber = operate(operator, firstNumber, secondNumber);
    displayNumberElement.textContent = equalNumber;
    displayNumber = "0"; // reset
}