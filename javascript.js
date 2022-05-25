
//todo: Creating functions for math operators (add, subtract, multiply, divide):
const add = function add(num1, num2) {
    return (num1 + num2);
}
// console.log(add(2, 2)); // 4

const subtract = function subtract(num1, num2) {
    return (num1 - num2);
}
// console.log(subtract(4, 2)); // 2

const multiply = function multiply(num1, num2) {
    return (num1 * num2);
}
// console.log(multiply(5, 5)); // 25

const divide = function divide(num1, num2) {
    return (num1 / num2);
}
// console.log(divide(10, 2)); // 5

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
const button = document.querySelectorAll('button');
const textField = document.getElementById('text-field');

const numberRange = [...Array(10).keys()];

function buttonInput() {
    for (let i=0; i<button.length; i++) {
        // console.log(typeof button[i].value);
        if (button[i].value in numberRange) { // if clicked button is an integer...
            button[i].addEventListener('click', () => {
                userInput.push(button[i].value); // add button input to 'userInput'.
                // console.log(button[i]);
                textField.value = userInput.join(""); // removes all commas from 'userInput' array.
            });
        }
    }
}    
buttonInput();
