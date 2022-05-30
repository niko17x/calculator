
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


//todo: Create a new function 'operate' that takes an operator and 2 numbers and then calls one of the above functions on the numbers:
function operate(operator, num1, num2) {
    return (operator(num1, num2));
}
// console.log(operate(multiply, 10, 2));



const numberRange = [...Array(10).keys()]; // range of numbers in array.
const button = document.querySelectorAll('button');
const textField = document.getElementById('text-field');

const addSym = document.getElementById('add');
const subtractSym = document.getElementById('subtract');
const multiplySym = document.getElementById('multiply');
const divideSym = document.getElementById('divide');
const equalSym = document.getElementById('equal');
const clearSym = document.getElementById('clear');

let buttonInput = {input1: [], input2: []};

let ans = 0;
let result = 0;


function alpha(operator) {
    if (buttonInput.input1 && buttonInput.input2) {
        return (operate(operator, parseInt(buttonInput.input1.join(""), parseInt(buttonInput2.input2.join("")))));
    };
};


numberInput();
function numberInput() {
    for (let i=0; i<button.length; i++) {
        button[i].addEventListener('click', () => {
            if (button[i].value in numberRange) {
                if (!iterObj()) {
                    buttonInput.input1.push(parseInt(button[i].value));
                    textField.value = buttonInput.input1.join("");
                } else {
                    buttonInput.input2.push(parseInt(button[i].value));
                    textField.value = buttonInput.input2.join("");
                };

            };            
            if (button[i].id === 'add') {
                textField.value = (button[i].value);
                buttonInput.operator = 'add';
                result = alpha(add);

            };
            if (button[i].id === 'subtract') {
                textField.value = (button[i].value);
                buttonInput.operator = 'subtract';
            };
            if (button[i].id === 'multiply') {
                textField.value = (button[i].value);
                buttonInput.operator = 'multiply';
            };
            if (button[i].id === 'divide') {
                textField.value = (button[i].value);
                buttonInput.operator = 'divide';
            };
            if (button[i].id === 'equal') {
                // textField.value = equalsOperator();
                // return equalsOperator();
                // result = operate(operator, parseInt(buttonInput.input1.join("")) + parseInt(buttonInput.input2.join("")));
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
            console.log(buttonInput.input1);
            console.log(buttonInput.input2);
            console.log(buttonInput);            
        });
    };
};




// helper function to iterate through values inside object array:
function iterObj() {
    if ('operator' in buttonInput) {
        return (true);
    };
};



// function if user clicks on 'equals' operator (note: try changing this to a switch operator):
// if user clicks equal button, code will take the operator and operate on both arrays:
function equalsOperator() {
    let ans = 0;
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

































