
//todo: Creating functions for math operators (add, subtract, multiply, divide):
const add = function add(...num) { // using ES6 'Rest Parameter' to take in n number of arguments.
    return num.reduce((total, current) => {
        return (total + current);
    })
}

const subtract = function subtract(...num) {
    return num.reduce((total, current) => {
        return (total - current);
    })
}
// console.log(subtract(14, 2, 2, 2));

const multiply = function multiply(...num) {
    return num.reduce((total, current) => {
        return (total * current);
    })
}
// console.log(multiply(5, 5)); // 25

const divide = function divide(...num) {
    if (num[0] === 0) {
        return ("No dividing by 0.");
    } else {
        return num.reduce((total, current) => {
            return (total / current);
        })
    }
}
// console.log(divide(0, 2)) // 'No dividing by 0.'


function calculate(operator, num1, num2) {
    if (operator === 'add') return add(num1, num2);
    if (operator === 'subtract') return subtract(num1, num2);
    if (operator === 'multiply') return multiply(num1, num2);
    if (operator === 'divide') return divide(num1, num2);
}
// console.log(calculate(multiply, 10, 2));



const button = document.querySelectorAll('button');
const textField = document.getElementById('text-field');
const addSym = document.getElementById('add');
const subtractSym = document.getElementById('subtract');
const multiplySym = document.getElementById('multiply');
const divideSym = document.getElementById('divide');
const equalSym = document.getElementById('equal');
const clearSym = document.getElementById('clear');

const numberRange = [...Array(10).keys()]; // range of numbers in array (1 - 9).
let buttonInput = {input1: [], input2: []};
let ans = 0;
let result = 0;


function getCalc(operator) {
    if (Object.keys(buttonInput.input2).length > 0) {
        result = calculate(operator, (parseInt(buttonInput.input1.join(""))), (parseInt(buttonInput.input2.join(""))));
        buttonInput.input1 = [result];
        buttonInput.input2 = []; // reset input2.
        textField.value = result; // display updated result.
    };
};


function clickInput() {
    for (let i=0; i<button.length; i++) {
        button[i].addEventListener('click', () => {
            if (button[i].value in numberRange) {
                if (!iterObj()) {
                    buttonInput.input1.push(parseInt(button[i].value)); // mouse click event.
                    textField.value = buttonInput.input1.join("");
                } else {
                    buttonInput.input2.push(parseInt(button[i].value));
                    textField.value = buttonInput.input2.join("");
                };
            
            };
            if (button[i].id === 'add') {
                textField.value = (button[i].value);
                getCalc(buttonInput.operator);
                buttonInput.operator = 'add';
            };
            if (button[i].id === 'subtract') {
                textField.value = (button[i].value);
                getCalc(buttonInput.operator);
                buttonInput.operator = 'subtract';
            };
            if (button[i].id === 'multiply') {
                textField.value = (button[i].value);
                getCalc(buttonInput.operator);
                buttonInput.operator = 'multiply';
            };
            if (button[i].id === 'divide') {
                textField.value = (button[i].value);
                getCalc(buttonInput.operator);
                buttonInput.operator = 'divide';
            };
            if (button[i].id === 'equal') {
                result = equalsOperator();
                textField.value = result;
                buttonInput.input1 = [result];
                buttonInput.input2 = [];
                return result;
            };
            if (button[i].id === 'clear') {
                buttonInput = {input1: [], input2: []};
                textField.value = 0;
            };
            console.log("");
            console.log("buttonInput.input1: ", buttonInput.input1);
            console.log("buttonInput.input2: ", buttonInput.input2);
            console.log("buttonInput.operator: ", buttonInput.operator);
            console.log("buttonInput Object: ", buttonInput);            
        });
    };
};


// keyboard event:
/**
 * Press on number on keyboard.
 * Registers a return of the number associated with the keyboard press.
 * Number then gets stored inside buttonInput.input.
 * 
 */



// helper function to iterate through values inside object array:
function iterObj() {
    if ('operator' in buttonInput) {
        return (true);
    };
};



// function if user clicks on 'equals' operator (note: try changing this to a switch operator):
// if user clicks equal button, code will take the operator and operate on both arrays:
function equalsOperator() {
    if (buttonInput.input1 || buttonInput.input2) { // => if input1 and input2 is NOT empty...
        if ('operator' in buttonInput) { // check if 'operator' in the object array.
            if (buttonInput.operator === 'add') { // check for type of operator.
                return add(parseInt(buttonInput.input1.join("")), parseInt(buttonInput.input2.join("")));
            };
            if (buttonInput.operator === 'subtract') {
                return subtract(parseInt(buttonInput.input1.join("")), parseInt(buttonInput.input2.join("")));
            };
            if (buttonInput.operator === 'multiply') {
                return multiply(parseInt(buttonInput.input1.join("")), parseInt(buttonInput.input2.join("")));
            };
            if (buttonInput.operator === 'divide') {
                return divide(parseInt(buttonInput.input1.join("")), parseInt(buttonInput.input2.join("")));
            };
        };
    };
    return ("Invalid");
};



//! TESTING AREA:
function keyboardNumInput() {
    document.addEventListener('keydown', (event) => {
        if (!iterObj()) {
            if (event.key === "0") {buttonInput.input1 = event.key}
            else if (event.key === "1") {buttonInput.input1 = event.key}
            else if (event.key === "2") {buttonInput.input1 = event.key}
            else if (event.key === "3") {buttonInput.input1 = event.key}
            else if (event.key === "4") {buttonInput.input1 = event.key}
            else if (event.key === "5") {buttonInput.input1 = event.key}
            else if (event.key === "6") {buttonInput.input1 = event.key}
            else if (event.key === "7") {buttonInput.input1 = event.key}
            else if (event.key === "8") {buttonInput.input1 = event.key}
            else if (event.key === "9") {buttonInput.input1 = event.key}
        } else {
            if (event.key === "0") {buttonInput.input2 = event.key}
            else if (event.key === "1") {buttonInput.input2 = event.key}
            else if (event.key === "2") {buttonInput.input2 = event.key}
            else if (event.key === "3") {buttonInput.input2 = event.key}
            else if (event.key === "4") {buttonInput.input2 = event.key}
            else if (event.key === "5") {buttonInput.input2 = event.key}
            else if (event.key === "6") {buttonInput.input2 = event.key}
            else if (event.key === "7") {buttonInput.input2 = event.key}
            else if (event.key === "8") {buttonInput.input2 = event.key}
            else if (event.key === "9") {buttonInput.input2 = event.key}  
        };
        // else if (event.key === "+") {return 'add'}
        // else if (event.key === "-") {return 'subtract'}
        // else if (event.key === "*") {return 'multiply'}
        // else if (event.key === "/") {return 'divide'}
    });
};



function numberInput() {
    document.addEventListener('keydown', (event) => {
        if (!iterObj()) {
            if (event.key === "0") {buttonInput.input1.push(event.key)}
            else if (event.key === "1") {buttonInput.input1.push(event.key)}
            else if (event.key === "2") {buttonInput.input1.push(event.key)}
            else if (event.key === "3") {buttonInput.input1.push(event.key)}
            else if (event.key === "4") {buttonInput.input1.push(event.key)}
            else if (event.key === "5") {buttonInput.input1.push(event.key)}
            else if (event.key === "6") {buttonInput.input1.push(event.key)}
            else if (event.key === "7") {buttonInput.input1.push(event.key)}
            else if (event.key === "8") {buttonInput.input1.push(event.key)}
            else if (event.key === "9") {buttonInput.input1.push(event.key)}
            textField.value = buttonInput.input1.join("");
        } else {
            if (event.key === "0") {buttonInput.input2.push(event.key)}
            else if (event.key === "1") {buttonInput.input2.push(event.key)}
            else if (event.key === "2") {buttonInput.input2.push(event.key)}
            else if (event.key === "3") {buttonInput.input2.push(event.key)}
            else if (event.key === "4") {buttonInput.input2.push(event.key)}
            else if (event.key === "5") {buttonInput.input2.push(event.key)}
            else if (event.key === "6") {buttonInput.input2.push(event.key)}
            else if (event.key === "7") {buttonInput.input2.push(event.key)}
            else if (event.key === "8") {buttonInput.input2.push(event.key)}
            else if (event.key === "9") {buttonInput.input2.push(event.key)}
            textField.value = buttonInput.input2.join("");
        };
        if (event.key === '+') {
            textField.value = ('+');
            getCalc(buttonInput.operator);
            buttonInput.operator = 'add';
        };
        if (event.key === '-') {
            textField.value = ('-');
            getCalc(buttonInput.operator);
            buttonInput.operator = 'subtract';
        };
        if (event.key === '*') {
            textField.value = ('x');
            getCalc(buttonInput.operator);
            buttonInput.operator = 'multiply';
        };
        if (event.key === '/') {
            textField.value = ('/');
            getCalc(buttonInput.operator);
            buttonInput.operator = 'divide';
        };
        if (event.key === 'Enter') {
            result = equalsOperator();
            textField.value = result;
            buttonInput.input1 = [result];
            buttonInput.input2 = [];
            return result;
        };
        if (button.id === 'clear') {
            buttonInput = {input1: [], input2: []};
            textField.value = 0;
        };
        console.log("");
        console.log("buttonInput.input1: ", buttonInput.input1);
        console.log("buttonInput.input2: ", buttonInput.input2);
        console.log("buttonInput.operator: ", buttonInput.operator);
        console.log("buttonInput Object: ", buttonInput);     
    });                
};

clickInput();
numberInput();