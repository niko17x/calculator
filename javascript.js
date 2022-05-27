
//todo: Creating functions for math operators (add, subtract, multiply, divide):
const add = function add(...num) { // using ES6 'Rest Parameter' to take in n number of arguments.
    return num.reduce((total, current) => {
        return (total + current);
    })
}
// console.log(add([12],[12]))

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
    return num.reduce((total, current) => {
        return (total / current);
    })
}
// console.log(divide(10, 2, 2, 10)); // 5

//todo: Create a new function 'operate' that takes an operator and 2 numbers and then calls one of the above functions on the numbers:
function operate(operator, num1, num2) {
    return (operator(num1, num2));
}
// console.log(operate(multiply, 10, 2));

//todo: Create the functions that populate the display when you click the number buttons... you should be storing the 'display value' in a variable somewhere for use in the next step:
// input display with button (number or symbol that is clicked by user).
// update the 'value' in html using selectors with the corresponding button using the 'id' of the button clicked.
// 1. add event listener and wait for a click; 2. update the 'value' field.

// const button = document.querySelectorAll('button').forEach(element => element.click());
let userInput = []; // stores all the numbers pressed by the user.    
const numberRange = [...Array(10).keys()]; // range of numbers in array.
const button = document.querySelectorAll('button');
const textField = document.getElementById('text-field');

const addSym = document.getElementById('add');
const subtractSym = document.getElementById('subtract');
const multiplySym = document.getElementById('multiply');
const divideSym = document.getElementById('divide');
const equalSym = document.getElementById('equal');
const clearSym = document.getElementById('clear');



const buttonInput = [
    {num: []},
    {num: 10},
    {operator: 'add'},
];
// console.log(obj1[0].num + obj1[1].num);
// const b = buttonInput[0].num = 12; // updating object value.
// console.log(b)
// console.log(add(buttonInput[0].num, buttonInput[1].num)) // calling add function on object.
// console.log(add(buttonInput[0].num));



//todo: figure out how to check if 'operator' is IN the object so you can validate if the user has clicked on an operator button on the calculator:
const result1 = buttonInput.flatMap(Object.keys);
console.log(result1);

if ('operator' in result1) {
    console.log('true');
} else {
    console.log('false');
}

// if (buttonInput.operator) {
//     console.log('true');
// } else {
//     console.log('false');
// }






function numberInput() {
    for (let i=0; i<button.length; i++) {
        button[i].addEventListener('click', () => {
            if (button[i].value in numberRange) {
                if (!operatorCheck()) { // if there is no 'symbol' in array.
                    // userInput.push(parseInt(button[i].value));
                    buttonInput[0].num.push(button[i].value);
                    // textField.value = userInput.join("");
                    textField.value = buttonInput[0].num.join("");
                } else { // if a 'symbol' is detected...
                    buttonInput[1].num.push(button[i].value);
                    textField.value = buttonInput[i].num.join("");
                }
                console.log(buttonInput[0].num);
                console.log(buttonInput[1].num);
            } 
            if (button[i].id === 'add') {
                textField.value = (button[i].value);
                // const operator = 'operator'; //? var not being used - do I even need this?
                buttonInput[2] = {operator: "add"} // add new object inside array.

            } 
            if (button[i].id === 'equal') {
                return equalOperator();
            }
        })
    };
    // textField.value = userInput;
}  
numberInput();



//todo: need to update - function doesn't run properly since we need to update the 'buttonInput' array with the proper operators first:
// function if user clicks on 'equals' operator (note: try changing this to a switch operator):
function equalsOperator() {
    if ('operator' in buttonInput) {
        if (buttonInput.operator === 'add') {
            return add(buttonInput[0], buttonInput[1]);
        };
        if (buttonInput.operator === 'subtract') {
            return subtract(buttonInput[0], buttonInput[1]);
        };
        if (buttonInput.operator === 'subtract') {
            return multiply(buttonInput[0], buttonInput[1]);
        };
        if (buttonInput.operator === 'divide') {
            return divide(buttonInput[0], buttonInput[1]);
        };
    };
};




// check if 'symbol' exists within array object:
function operatorCheck() {
    for (let i=0; i<buttonInput.length; i++) {
        if ('symbol' in buttonInput[i]) return true;
    };
    return false;
};
