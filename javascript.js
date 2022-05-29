
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



const buttonInput = []; // variable that hold the property objects.
// console.log(obj1[0].num + obj1[1].num);
// const b = buttonInput[0].num = 12; // updating object value.
// console.log(b)
// console.log(add(buttonInput[0].num, buttonInput[1].num)) // calling add function on object.
// console.log(add(buttonInput[0].num));




// iterator through Object Array 'buttonInput' and splice 'operator' key:
// note: using 'delete' to remove an object only removes the properties but total length remains the same.
function deleteOperator() {
    for (let i=0; i<buttonInput.length; i++) {
        if ('operator' in buttonInput[i]) {
            return buttonInput.splice(2, 1);
        };
    }
}

let inputCounter = 0;
let inputResult = 0;

function numberInput() {
    for (let i=0; i<button.length; i++) {
        button[i].addEventListener('click', () => {
            if (button[i].id === 'clear') {
                inputCounter = 0;
                buttonInput[0].num = [];
                buttonInput[1].num = [];
                deleteOperator();
                // deleteUndefined();
                textField.value = 0;
            };
            if (button[i].value in numberRange) {
                if (buttonInput.length === 3) { // alternate method using function.
                    // userInput.push(parseInt(button[i].value));
                    buttonInput[0].num.push(button[i].value);
                    // textField.value = userInput.join("");
                    textField.value = buttonInput[0].num.join("");
                } else { // if a 'symbol' is detected...
                    buttonInput[1].num.push(button[i].value);
                    textField.value = buttonInput[1].num.join("");
                }
                // console.log(buttonInput[0].num);
                // console.log(buttonInput[1].num);
            };
            if (button[i].id === 'add') {
                textField.value = (button[i].value);
                buttonInput[2] = {operator: "add"}; // add new object inside array.
            };
            if (button[i].id === 'subtract') {
                textField.value = (button[i].value);
                buttonInput[2] = {operator: "subtract"};
            };
            if (button[i].id === 'multiply') {
                textField.value = (button[i].value);
                buttonInput[2] = {operator: "multiply"};
            };
            if (button[i].id === 'divide') {
                textField.value = (button[i].value);
                buttonInput[2] = {operator: "divide"};
            };
            if (button[i].id === 'equal') {
                textField.value = equalsOperator();
                return equalsOperator();
            };
            console.log("buttonInput Object: ", buttonInput);
            console.log("index 0: ", buttonInput[0].num);
            console.log("index 1: ", buttonInput[1].num);
            console.log("buttonInput length: ", buttonInput.length);
        }); 
    };
};
numberInput();





// function if user clicks on 'equals' operator (note: try changing this to a switch operator):
// if user clicks equal button, code will take the operator and operate on both arrays:
function equalsOperator() {
    for (let i=0; i<buttonInput.length; i++) {
        let ans = 0;
        if ('operator' in buttonInput[i]) { // check if 'operator' in the object array.
            if (buttonInput[i].operator === 'add') { // check for type of operator.
                ans = add(parseInt(buttonInput[0].num.join("")), parseInt(buttonInput[1].num.join("")));
                return (ans);
            };
            if (buttonInput[i].operator === 'subtract') {
                return subtract(parseInt(buttonInput[0].num.join("")), parseInt(buttonInput[1].num.join("")));
            };
            if (buttonInput[i].operator === 'multiply') {
                return multiply(parseInt(buttonInput[0].num.join("")), parseInt(buttonInput[1].num.join("")));
            };
            if (buttonInput[i].operator === 'divide') {
                return divide(parseInt(buttonInput[0].num.join("")), parseInt(buttonInput[1].num.join("")));
            };
        };
    };
};


//? This function currently not being used.
// check if 'operator' is a property in the object array:
function arrayCheck() {
    for (let i=0; i<buttonInput.length; i++) {
        if ('operator' in buttonInput[i]) return true;
    };
};