console.log("hello World")
const display = document.getElementById('user-input') as HTMLInputElement;
const equalBtn = document.getElementById('equals') as HTMLButtonElement;
const clearBtn = document.getElementById('clear') as HTMLButtonElement;
const btns = document.querySelectorAll('.btn');

let currentInput = "";
let operator: string | null;
let operand: number | null;

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = (button as HTMLButtonElement).getAttribute('data-value');
        const operation = (button as HTMLButtonElement).getAttribute('data-operation');
        if (value !== null) {
            currentInput += value;
            display.value = currentInput;
        } else if (operation !== null) {
            if (currentInput !== "") {
                if (operator !== null && operand !== null) {
                    operand = calculate(operand, parseFloat(currentInput), operator);
                    display.value = operand?.toString();
                } else {
                    operand = parseFloat(currentInput);
                }
                currentInput = "";
            }
            operator = operation;
            display.value = `${operand?.toString() || ""} ${operator} ${currentInput}`;
        }


    })
})

equalBtn.addEventListener('click', () => {
    if (operator !== null && currentInput !== "" && operand !== null) {
        operand = calculate(operand, parseFloat(currentInput), operator);
        display.value = operand?.toString();
        operator = null;
        currentInput = "";
    }
});

clearBtn.addEventListener('click', () => {
    currentInput = '';
    operator = null;
    operand = null;
    display.value = '';
});

function calculate(operand1: number, operand2: number, operator: string): number {

    switch (operator) {
        case '+':
            return operand1 + operand2;

        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;

        case '/':
            if (operand2 == 0) {
                alert('cannot divide by zero');
                return operand1;
            }
            else {
                return operand1 / operand2;
            }

        default:
            return operand1
    }

}


