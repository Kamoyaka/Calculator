let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let firstOperand = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.classList.contains('num')) {
            if (currentInput === '0' || currentInput === 'Error') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        } else if (button.classList.contains('operator') && value !== '=') {
            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else if (operator) {
                firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
            }
            operator = value;
            currentInput = '0';
        } else if (value === '=') {
            if (firstOperand !== null && operator) {
                currentInput = calculate(firstOperand, parseFloat(currentInput), operator).toString();
                firstOperand = null;
                operator = '';
            }
        } else if (value === 'AC') {
            currentInput = '0';
            firstOperand = null;
            operator = '';
        }

        updateDisplay();
    });
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        case '%':
            return a % b;
        default:
            return b;
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}